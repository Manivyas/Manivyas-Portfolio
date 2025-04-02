import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C', 'SQL', 'NoSQL', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Frameworks',
    skills: [
      'Spring Boot',
      'Spring Core',
      'Spring MVC',
      'Spring AOP',
      'Spring WebFlux',
      'Node.js',
      'React.js',
      'Redis',
      'Angular',
      'JUnit',
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      'AWS',
      'Linux',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Git',
      'Docker',
      'Jacoco',
      'JMeter',
      'Jenkins',
      'JIRA',
      'Kafka',
      'MongoDB',
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Leadership',
      'Writing',
      'Public Speaking',
      'Time Optimization',
      'Adaptability',
      'Teamwork',
      'Self Learning',
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <Box
      id="skills"
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
          Skills & Expertise
        </Typography>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)'
          },
          gap: 4
        }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
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
                <Typography
                  variant="h5"
                  color="primary"
                  gutterBottom
                  sx={{ mb: 3 }}
                >
                  {category.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {category.skills.map((skill, i) => (
                    <Typography
                      key={i}
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        background: 'rgba(97, 218, 251, 0.1)',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(97, 218, 251, 0.2)',
                        color: 'secondary.main',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          background: 'rgba(97, 218, 251, 0.2)',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
