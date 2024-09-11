'use client';
import { useState } from 'react';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Box,TextField,Button } from '@mui/material';



export default function AuthForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
     e.preventDefault();
    onLogin(email, password);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"   // Arrange elements in a column (vertical)
        justifyContent="center"  // Centers horizontally
        alignItems="center"      // Centers vertically
        height="100vh"           // Full viewport height
      >
        <Typography variant="h3" color="initial" textAlign="center">
          Please login using your credentials
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"  // Ensures input fields are stacked vertically
          gap={2}                 // Adds space between the form elements
          width="300px"           // Set a consistent width for the form
          mt={3}                  // Adds margin-top to separate the form from the title
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            InputProps={{
              style: { color: 'white' },  // Ensure text is visible
            }}
            InputLabelProps={{
              style: { color: 'gray' },   // Label color
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            InputProps={{
              style: { color: 'white' },  // Ensure text is visible
            }}
            InputLabelProps={{
              style: { color: 'gray' },   // Label color
            }}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Log In
          </Button>
        </Box>
      </Box>
    </>
  );
}