import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import './Components.css';

interface OwnProps {
	handleChangeArtist: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeSong: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSearch: () => void;
	songError: boolean;
	artistError: boolean;
	bothError: boolean;
}
const Search = (props: OwnProps) => {
	const { handleChangeArtist, handleChangeSong, handleSearch, songError, artistError, bothError } = props;
	return (
		<Grid container className='search-container'>
			<Grid item xs={6}>
				<Box sx={{ textAlign: 'center' }}>
					<Card sx={{ minWidth: 275, maxWidth: 1024 }}>
						<Grid item xs={12}>
							<CardContent>
								<TextField
									error={artistError || bothError}
									label='Artist'
									onChange={handleChangeArtist}
									type='search'
									helperText={artistError || bothError ? `Please enter a valid artist.` : ''}
								/>
							</CardContent>
							<CardContent>
								<TextField
									error={songError || bothError}
									onChange={handleChangeSong}
									label='Song title'
									type='search'
									helperText={songError || bothError ? `Please enter a valid song title.` : ''}
								/>
							</CardContent>
							<Grid item xs={12}>
								<CardContent>
									<Button onClick={handleSearch} variant='contained'>
										Search
									</Button>
								</CardContent>
							</Grid>
						</Grid>
					</Card>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Search;
