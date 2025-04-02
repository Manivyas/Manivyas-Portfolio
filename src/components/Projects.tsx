import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'PDF Management and Collaboration System',
    description: 'A MERN-stack based system for managing and collaborating on PDF documents. Features AWS S3 integration for secure file handling, with emphasis on modularity and reusability.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
  },
  {
    title: 'Virtual Assistant (Programming)',
    description: 'A desktop Virtual Assistant built using Python and Python GUI libraries. Integrated with Wikipedia and WolframAlpha APIs for enhanced functionality.',
    tech: ['Python', 'GUI', 'API Integration'],
  },
  {
    title: 'Airline Management System',
    description: 'A comprehensive DBMS project and airline management website featuring ticket booking, auto-correction algorithm, and OTP authentication.',
    tech: ['Python', 'Django', 'PostgreSQL'],
  }
];

const Projects: React.FC = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #6f42c1 30%, #61dafb 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Featured Projects
        </Typography>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, 1fr)'
          },
          gap: 4
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(15px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.tech.map((tech, i) => (
                      <Typography
                        key={i}
                        component="span"
                        sx={{
                          display: 'inline-block',
                          mr: 1,
                          mb: 1,
                          px: 2,
                          py: 1,
                          borderRadius: 2,
                          background: 'rgba(97, 218, 251, 0.1)',
                          backdropFilter: 'blur(5px)',
                          border: '1px solid rgba(97, 218, 251, 0.2)',
                          color: 'secondary.main',
                          fontSize: '0.875rem',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            background: 'rgba(97, 218, 251, 0.2)',
                            transform: 'translateY(-2px)',
                          }
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
