import { createTheme, PaletteMode, ThemeOptions } from '@mui/material/styles';

const sfPro = ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'].join(',');

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: '#6f42c1',
      light: '#845acd',
      dark: '#5a2ea6',
    },
    secondary: {
      main: mode === 'light' ? '#000000' : '#61dafb',
      light: mode === 'light' ? '#333333' : '#7de2fc',
      dark: mode === 'light' ? '#000000' : '#45b4d2',
    },
    background: {
      default: mode === 'light' ? '#F5F5F7' : '#121212',
      paper: mode === 'light' 
        ? 'rgba(255, 255, 255, 0.8)' 
        : 'rgba(32, 32, 32, 0.8)',
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#E5E5E5',
      secondary: mode === 'light' ? '#333333' : '#A0A0A0',
    },
    divider: mode === 'light' 
      ? 'rgba(0, 0, 0, 0.1)' 
      : 'rgba(255, 255, 255, 0.1)',
    action: {
      hover: mode === 'light'
        ? 'rgba(0, 0, 0, 0.05)'
        : 'rgba(255, 255, 255, 0.05)',
      selected: mode === 'light'
        ? 'rgba(0, 0, 0, 0.1)'
        : 'rgba(255, 255, 255, 0.1)',
    },
  },
  typography: {
    fontFamily: sfPro,
    h1: {
      fontFamily: sfPro,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: mode === 'light' ? '#000000' : undefined,
      background: mode === 'light' 
        ? 'none'
        : 'linear-gradient(45deg, #6f42c1 30%, #61dafb 90%)',
      WebkitBackgroundClip: mode === 'light' ? undefined : 'text',
      WebkitTextFillColor: mode === 'light' ? undefined : 'transparent',
    },
    h2: {
      fontFamily: sfPro,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: mode === 'light' ? '#000000' : undefined,
    },
    h3: {
      fontFamily: sfPro,
      fontWeight: 600,
      letterSpacing: '-0.015em',
      color: mode === 'light' ? '#000000' : undefined,
    },
    h4: {
      fontFamily: sfPro,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: mode === 'light' ? '#000000' : undefined,
    },
    h5: {
      fontFamily: sfPro,
      fontWeight: 500,
      letterSpacing: '-0.01em',
      color: mode === 'light' ? '#000000' : undefined,
    },
    h6: {
      fontFamily: sfPro,
      fontWeight: 500,
      letterSpacing: '-0.005em',
      color: mode === 'light' ? '#000000' : undefined,
    },
    subtitle1: {
      fontFamily: sfPro,
      fontWeight: 400,
      color: mode === 'light' ? '#333333' : undefined,
    },
    subtitle2: {
      fontFamily: sfPro,
      fontWeight: 500,
      color: mode === 'light' ? '#333333' : undefined,
    },
    body1: {
      fontFamily: sfPro,
      fontWeight: 400,
      color: mode === 'light' ? '#333333' : undefined,
    },
    body2: {
      fontFamily: sfPro,
      fontWeight: 400,
      color: mode === 'light' ? '#333333' : undefined,
    },
    button: {
      fontFamily: sfPro,
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' as const,
        },
        containedPrimary: {
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#845acd',
            boxShadow: '0 6px 20px rgba(111, 66, 193, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: mode === 'light'
            ? 'rgba(255, 255, 255, 0.8)'
            : 'rgba(32, 32, 32, 0.8)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light'
            ? 'rgba(255, 255, 255, 0.8)'
            : 'rgba(32, 32, 32, 0.8)',
          backdropFilter: 'blur(10px)',
          borderColor: mode === 'light'
            ? 'rgba(0, 0, 0, 0.1)'
            : 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
});

export const createAppTheme = (mode: PaletteMode) => createTheme(getDesignTokens(mode));
