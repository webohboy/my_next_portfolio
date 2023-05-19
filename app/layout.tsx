'use client';

import Navbar from '@/components/Navbar/Navbar';
import './globals.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggleTheme, setToggleTheme] = useState(false);

  function onThemeToggle() {
    setToggleTheme((prev) => !prev);
  }
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={toggleTheme === false ? lightTheme : darkTheme}>
          <CssBaseline />
          <Navbar onThemeToggle={onThemeToggle} isAuthenticated={true} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}