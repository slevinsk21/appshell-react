import { CircularProgress, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

export const Loading = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: grey.A400, padding: 4 }}
    >
      <Grid container direction='row' justifyContent='center'>
        <CircularProgress color='warning' />
      </Grid>
    </Grid>
  );
};
