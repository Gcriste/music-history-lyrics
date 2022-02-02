import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Search from './Components/Search';

const App = () => {
	const [artist, setArtist] = useState('');
	const [song, setSong] = useState('');
	const [artistError, setArtistError] = useState(false);
	const [songError, setSongError] = useState(false);
	const [bothError, setBothError] = useState(false);

	const handleChangeArtist = (e: React.ChangeEvent<HTMLInputElement>) => {
		setArtist(e.target.value);
		setArtistError(false);
	};
	const handleChangeSong = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSong(e.target.value);
		setSongError(false);
	};

	const handleSearch = () => {
		if (artist && song) {
			console.log('there is both');
		} else if (artist && !song) {
			setSongError(true);
		} else if (!artist && song) {
			setArtistError(true);
		} else {
			setBothError(true);
		}
	};

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
