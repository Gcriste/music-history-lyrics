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
  artist: string;
  songTitle: string;
  songLyrics: string;
}
const Display = (props: OwnProps) => {
  const { artist, songTitle, songLyrics } = props;
  return (
    <Grid container className='search-container'>
      <Grid item xs={6}>
        <Box sx={{ textAlign: 'center' }}>
          <Card sx={{ minWidth: 275, maxWidth: 1024 }}>
            <Grid item xs={12}>
              <CardContent>
                <h3>{artist}</h3>
              </CardContent>
              <CardContent>
                <h3>{songTitle}</h3>
              </CardContent>
              <Grid item xs={12}>
                <CardContent>
                  <p>{songLyrics}</p>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Display;
