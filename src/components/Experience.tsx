import React from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'YUBI (formerly CredAvenue)',
    period: 'July 2023 - Present',
    highlights: [
      'Designed YubiDrive, a document management system with Kafka messaging and ClamAV',
      'Developed V2 APIs with enhanced security and backward compatibility',
      'Engineered Aadhaar Vault service achieving 40% faster response time',
      'Built Automation Bundle Jar with reusable modules',
      'Migrated 8 applications to JDK 21, reducing AWS costs by 28%',
      'Led migration to Apache Superset, saving $80,000 annually'
    ]
  },
  {
    title: 'Software Developer Engineer - Intern',
    company: 'YUBI (formerly CredAvenue)',
    period: 'February 2023 - June 2023',
    highlights: [
      'Enhanced UI performance, reducing loading times by 30%',
      'Deployed Forest Admin for streamlined database management',
      'Integrated Kafka and New Relic for improved monitoring',
      'Developed repayment calculation service with test automation'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <Box
      id="experience"
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
          Experience
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
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
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom color="primary">
                    {exp.title}
                  </Typography>
                  <Typography variant="h6" color="secondary" gutterBottom>
                    {exp.company}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {exp.period}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {exp.highlights.map((highlight, i) => (
                      <Typography
                        key={i}
                        component="li"
                        variant="body1"
                        color="text.primary"
                        sx={{ mb: 1 }}
                      >
                        {highlight}
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

export default Experience;
