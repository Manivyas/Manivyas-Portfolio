import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { useConfig } from '../config';

const ProfileImage = styled(motion.img)({
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '4px solid #fff',
  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Hero: React.FC = () => {
  const { showProfilePicture, profilePicturePath } = useConfig();

  return (
    <Box
      id="home"
      sx={{
        minHeight: { xs: 'calc(100vh - 64px)', sm: '100vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 4, sm: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: { xs: 'center', md: 'flex-start' }, 
            gap: { xs: 6, md: 8 }, 
            flexDirection: { xs: 'column', md: 'row' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ flex: 1, width: '100%' }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #6f42c1 30%, #61dafb 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: { xs: 2, md: 3 },
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3rem',
                  lg: '4rem'
                },
                lineHeight: 1.2,
              }}
            >
              Manivyas Aedulapuram
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: 'secondary.main',
                mb: { xs: 2, md: 3 },
                fontSize: {
                  xs: '1.5rem',
                  sm: '1.8rem',
                  md: '2rem',
                  lg: '2.5rem'
                },
                lineHeight: 1.3,
              }}
            >
              Software Engineer
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: '800px',
                mb: { xs: 3, md: 4 },
                fontSize: {
                  xs: '0.9rem',
                  sm: '1rem',
                  md: '1.1rem',
                  lg: '1.2rem'
                },
                lineHeight: 1.6,
                mx: { xs: 'auto', md: 0 },
              }}
            >
              A passionate software engineer with expertise in Java, Spring Boot, and React.js.
              Currently driving innovation at YUBI, specializing in microservices architecture
              and cloud solutions. Committed to creating efficient, scalable, and elegant solutions
              to complex problems.
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 1.5, sm: 2 },
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              <Button
                variant="contained"
                color="primary"
                href="mailto:manivyasedu@gmail.com"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                  }
                }}
              >
                Contact Me
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="https://linkedin.com/in/manivyas-aedulapuram-33330b19a"
                target="_blank"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                  }
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                color="info"
                href="https://github.com/manivyas"
                target="_blank"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                  }
                }}
              >
                GitHub
              </Button>
            </Box>
          </motion.div>
          
          {showProfilePicture && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  maxWidth: { xs: '200px', sm: '250px' }
                }}
              >
                <ProfileImage
                  src={profilePicturePath}
                  alt="Profile Picture"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "tween", duration: 0.3 }}
                  sx={{
                    width: { xs: '200px', sm: '250px' },
                    height: { xs: '200px', sm: '250px' },
                  }}
                />
              </Box>
            </motion.div>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
