import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid
} from '@mui/material';

import { SimpleLayout } from '../components';

import logo from '../assets/imgs/groundor_logo.png';

export const Company = () => {
  const [company, setCompany] = useState('');

  const handleChange = ({ target }) => {
    setCompany(target.value);

  };

  return (
    <SimpleLayout>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 120,
          minHeight: 240
        }}
      >
        <Grid container spacing={2}>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <img
              src={logo}
              height={'auto'}
              width={100}
              style={{
                maxWidth: '80px',
                width: '100%'
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant='h5' sx={{ textAlign: 'center' }}>
              Select a Company
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Company</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={company}
                label='Company'
                onChange={handleChange}
              >
                <MenuItem value='Company A'>Company A</MenuItem>
                <MenuItem value='Company B'>Company B</MenuItem>
                <MenuItem value='Company C'>Company C</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </SimpleLayout>
  );
};
