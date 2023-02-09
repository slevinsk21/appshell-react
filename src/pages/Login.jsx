import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Alert, Button, Grid, TextField } from '@mui/material';

import { SimpleLayout } from '../components';

import { useForm } from '../hooks';
import { startLogin } from '../store/user';

import logo from '../assets/imgs/groundor_logo.png';

export const Login = () => {
  const { status, errorMessage } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = event => {
    event.preventDefault();

    dispatch(startLogin({ email, password }));
  };

  return (
    <SimpleLayout>
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
      <form
        onSubmit={onSubmit}
        className='animate_animated animatefadeIn animate_faster'
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder=''
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder=''
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container display={!!errorMessage ? '' : 'none'} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button
                disabled={isAuthenticating}
                type='submit'
                variant='contained'
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </SimpleLayout>
  );
};
