import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../images/background.jpg';

const BackgroundContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(4),
}));

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
    },
}));

const Contest = () => {
    const pastContests = [
        { name: 'Contest 1', date: '2023-01-15', winner: 'Alice' },
        { name: 'Contest 2', date: '2023-02-20', winner: 'Bob' },
        { name: 'Contest 3', date: '2023-03-25', winner: 'Charlie' },
    ];

    return (
        <BackgroundContainer>
            <StyledContainer maxWidth="lg">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#2c3e50' }}>
                        No Live Contest
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#7f8c8d', mb: 4 }}>
                        Check back later for upcoming contests
                    </Typography>
                    <Chip label="Past Contests" color="primary" sx={{ fontSize: '1rem', py: 1, px: 2 }} />
                </Box>

                <Grid container spacing={4}>
                    {pastContests.map((contest, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <StyledCard>
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: '#34495e' }}>
                                        {contest.name}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" gutterBottom>
                                        Date: {contest.date}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 2, fontWeight: 500, color: '#16a085' }}>
                                        Winner: {contest.winner}
                                    </Typography>
                                </CardContent>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
            </StyledContainer>
        </BackgroundContainer>
    );
};

export default Contest;
