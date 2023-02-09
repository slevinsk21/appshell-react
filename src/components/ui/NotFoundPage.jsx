import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: grey[800]
      }}
    >
      <Typography variant='h1' style={{ color: 'white' }}>
        Page not found
      </Typography>
    </Box>
  );
};
