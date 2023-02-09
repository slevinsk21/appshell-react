import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { blue, orange, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { AppRouter } from './routes/AppRouter';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: blue[900]
    },
    secondary: {
      main: orange[600]
    },
    error: {
      main: red.A400
    }
  }
});

const App = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
