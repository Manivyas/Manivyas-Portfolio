import React, { useEffect } from 'react';
import { Box, CssBaseline, useTheme } from '@mui/material';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { init } from '@emailjs/browser';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Community from './components/Community';
import { ThemeProvider } from './components/ThemeProvider';

// Import type declarations
import './components/types.d';

const App: React.FC = () => {
  useEffect(() => {
    init("YOUR_USER_ID");
  }, []);

  const theme = useTheme();

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <ThemeProvider>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        position: 'relative', 
        background: theme => theme.palette.mode === 'light' 
          ? 'linear-gradient(to bottom, #F5F5F7 0%, #E5E5E7 50%, #D5D5D7 100%)'
          : 'linear-gradient(to bottom, #121212 0%, #1A1A1A 50%, #242424 100%)',
        overflow: 'hidden'
      }}>
        {/* Large glowing orbs with enhanced effects */}
        <Box
          className="glowing-orb"
          sx={{
            position: 'fixed',
            top: '10%',
            left: '5%',
            width: '400px',
            height: '400px',
            background: theme => theme.palette.mode === 'light'
              ? 'radial-gradient(circle at center, rgba(111, 66, 193, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(128, 128, 128, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '0s',
            zIndex: 0,
          }}
        />
        <Box
          className="glowing-orb"
          sx={{
            position: 'fixed',
            bottom: '15%',
            right: '10%',
            width: '500px',
            height: '500px',
            background: theme => theme.palette.mode === 'light'
              ? 'radial-gradient(circle at center, rgba(97, 218, 251, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(64, 64, 64, 0.4) 0%, transparent 70%)',
            filter: 'blur(70px)',
            borderRadius: '50%',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '-5s',
            zIndex: 0,
          }}
        />
        <Box
          className="glowing-orb"
          sx={{
            position: 'fixed',
            top: '40%',
            right: '30%',
            width: '300px',
            height: '300px',
            background: theme => theme.palette.mode === 'light'
              ? 'radial-gradient(circle at center, rgba(255, 255, 255, 0.6) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(96, 96, 96, 0.3) 0%, transparent 70%)',
            filter: 'blur(50px)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '-2.5s',
            zIndex: 0,
          }}
        />

        {/* Stars with increased visibility */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: true,
              zIndex: 1
            },
            particles: {
              number: {
                value: 250,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: theme.palette.mode === 'light' 
                  ? ["#6f42c1", "#61dafb", "#1D1D1F"]
                  : ["#808080", "#A0A0A0", "#606060"]
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: theme.palette.mode === 'light' ? 0.5 : 0.8,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.5,
                  opacity_min: theme.palette.mode === 'light' ? 0.2 : 0.3,
                  sync: false
                }
              },
              size: {
                value: 2.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  size_min: 0.5,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: theme.palette.mode === 'light' ? "#6f42c1" : "#808080",
                opacity: theme.palette.mode === 'light' ? 0.1 : 0.15,
                width: 1
              },
              move: {
                enable: true,
                speed: 0.3,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: ["grab", "bubble"]
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 150,
                  line_linked: {
                    opacity: 0.5
                  }
                },
                bubble: {
                  distance: 200,
                  size: 8,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3
                }
              }
            },
            retina_detect: true,
            background: {
              color: "transparent"
            }
          }}
        />

        {/* Enhanced nebula effect */}
        <Box
          className="shimmer"
          sx={{
            position: 'fixed',
            top: '30%',
            left: '20%',
            width: '60%',
            height: '60%',
            background: theme => theme.palette.mode === 'light'
              ? `
                radial-gradient(circle at 30% 50%, rgba(111, 66, 193, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 50%, rgba(97, 218, 251, 0.1) 0%, transparent 50%)
              `
              : `
                radial-gradient(circle at 30% 50%, rgba(128, 128, 128, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 70% 50%, rgba(96, 96, 96, 0.3) 0%, transparent 50%)
              `,
            filter: 'blur(50px)',
            animation: 'pulse 10s ease-in-out infinite',
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Navigation />
          <Box component="main">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Community />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
