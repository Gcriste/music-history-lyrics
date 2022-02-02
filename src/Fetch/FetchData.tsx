import React from 'react';
const axios = require('axios');

interface Response {
	data: DataResponse[];
}
interface DataResponse {
	artist: string;
	songName: string;
	songLyric: string;
}
interface Error {}

export const fetchData = (artist: string, songTitle: string): Response => {
	let request = {
		method: 'GET',
		url: `https://lyrics-finder1.p.rapidapi.com/${artist}/${songTitle}`,
		headers: {
			'x-rapidapi-host': 'lyrics-finder1.p.rapidapi.com',
			'x-rapidapi-key': 'dcd656f09cmsh2c6d4acc9994430p14d168jsn8cbf05c0a1b3'
		}
	};

	const result = axios
		.request(request)
		.then((response: Response) => {
			return {
				artist: artist,
				songTitle: response.data[0].songName,
				songLyrics: response.data[0].songName
			};
		})
		.catch((err: Error) => console.error(err));

	return result;
};
