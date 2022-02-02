import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// import { fetchData } from './Fetch/FetchData';

import Search from './Components/Search';
import { fetchData } from './Fetch/FetchData';
const axios = require('axios');
interface Response {
	data: DataResponse[];
}
interface DataResponse {
	artist: string;
	songName: string;
	songLyric: string;
}

const App = () => {
	const [artist, setArtist] = useState('');
	const [song, setSong] = useState('');
	const [artistError, setArtistError] = useState(false);
	const [songError, setSongError] = useState(false);
	const [bothError, setBothError] = useState(false);
	const [responseData, setResponseData] = useState({});

	const handleChangeArtist = (e: React.ChangeEvent<HTMLInputElement>) => {
		setArtist(e.target.value);
		setArtistError(false);
		setBothError(false);
	};
	const handleChangeSong = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSong(e.target.value);
		setSongError(false);
		setBothError(false);
	};

	const handleSearch = () => {
		if (artist && song) {
			fetchDat();
		} else if (artist && !song) {
			setSongError(true);
		} else if (!artist && song) {
			setArtistError(true);
		} else {
			setBothError(true);
		}
	};

	const fetchDat = async () => {
		let request = {
			method: 'GET',
			url: `https://lyrics-finder1.p.rapidapi.com/${artist}/${song}`,
			headers: {
				'x-rapidapi-host': 'lyrics-finder1.p.rapidapi.com',
				'x-rapidapi-key': 'dcd656f09cmsh2c6d4acc9994430p14d168jsn8cbf05c0a1b3'
			}
		};
		try {
			// fetch data from a url endpoint
			const response = await axios.request(request);

			setResponseData({
				artist: artist,
				songTitle: response.data[0].songName,
				songLyrics: response.data[0].songLyric
			});
		} catch (error) {
			console.log('error', error);
			// appropriately handle the error
		}
	};

	console.log(responseData);
	return (
		<>
			<CssBaseline />
			<Container>
				<Search
					handleChangeArtist={handleChangeArtist}
					handleChangeSong={handleChangeSong}
					handleSearch={handleSearch}
					songError={songError}
					artistError={artistError}
					bothError={bothError}
				/>
			</Container>
		</>
	);
};

export default App;
