import { extendTheme } from '@mui/joy/styles';

const lightTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#007FFF' },
        danger: { main: '#d32f2f'  },
        success: {main: '#2e7d32' },
        info: { main: '#0288d1' },
        background: { body: '#FFFFFF', mainContent: '#F5F5F5' },
        text: { primary: '#000000' },
        action: {
          hover: '#E3F2FD', // Example hover color for actions
        },
      },
      shadows: [
        'none', // 0
        '0px 1px 3px rgba(0, 0, 0, 0.1)', // 1
        '0px 2px 6px rgba(0, 0, 0, 0.1)', // 2
        '0px 4px 12px rgba(0, 0, 0, 0.1)', // 3
        '0px 8px 24px rgba(0, 0, 0, 0.1)', // 4
        '0px 16px 48px rgba(0, 0, 0, 0.1)', // 5
      ],
    },
  },
});

const darkTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: '#90CAF9' },
        danger: { main: '#ef9a9a'},
        success: { main: '#81c784' },
        info: { main: '#4fc3f7' },
        background: { body: '#121212', mainContent: '#1E1E1E' },
        text: { primary: '#FFFFFF' },
        action: {
          hover: '#90CAF9', // Example hover color for actions in dark theme
        },
      },
      shadows: [
        'none',
        '0px 1px 3px rgba(0, 0, 0, 0.5)',
        '0px 2px 6px rgba(0, 0, 0, 0.5)',
        '0px 4px 12px rgba(0, 0, 0, 0.5)',
        '0px 8px 24px rgba(0, 0, 0, 0.5)',
        '0px 16px 48px rgba(0, 0, 0, 0.5)',
      ],
    },
  },
});

export { lightTheme, darkTheme };
