import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Paper, IconButton, Grid, Link } from "@mui/material";
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Remove';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import backgroundImage from '../images/background.jpg';

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '15px',
  padding: theme.spacing(4),
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
}));

const TerminalWindow = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(145deg, #2D2D2D 0%, #1E1E1E 100%)',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  },
}));

const TerminalHeader = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(58, 58, 58, 0.8)',
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
}));

const TerminalButton = styled(IconButton)(({ theme, color }) => ({
  padding: 2,
  marginRight: 6,
  backgroundColor: color,
  '&:hover': {
    backgroundColor: color,
    boxShadow: `0 0 10px ${color}`,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 10,
    color: 'transparent',
  },
}));

const TerminalBody = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(30, 30, 30, 0.9)',
  color: '#FFFFFF',
  padding: theme.spacing(2),
  fontFamily: '"Fira Code", Menlo, Monaco, "Courier New", monospace',
  fontSize: '14px',
  height: '400px',
  overflowY: 'auto',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  position: 'relative',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '4px',
  },
}));

const Cursor = styled('span')(({ theme, blink }) => ({
  display: 'inline-block',
  width: '8px',
  height: '18px',
  backgroundColor: '#FFFFFF',
  marginLeft: '1px',
  animation: blink ? 'blink 1s step-end infinite' : 'none',
  '@keyframes blink': {
    '0%, 100%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0,
    },
  },
}));

const SocialLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  marginBottom: theme.spacing(3),
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateX(5px)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '28px',
    marginRight: theme.spacing(2),
  },
}));

const Contact = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['Welcome to Naman\'s terminal. Type "help" for available commands.']);
  const [cursorBlink, setCursorBlink] = useState(true);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      processCommand(input);
      setInput('');
    }
    setCursorBlink(false);
  };

  const handleKeyUp = () => {
    setCursorBlink(true);
  };

  const processCommand = (cmd) => {
    setOutput(prev => [...prev, `naman@macbook-pro ~ % ${cmd}`]);

    switch (cmd.toLowerCase()) {
      case 'whoami':
        setOutput(prev => [...prev, "Naman Sharma - Software Developer and Coding Enthusiast"]);
        break;
      case 'leetcode':
        setOutput(prev => [...prev, "LeetCode: https://leetcode.com/Naman_Sharma_/"]);
        break;
      case 'github':
        setOutput(prev => [...prev, "GitHub: https://github.com/NamanSharma1201"]);
        break;
      case 'linkedin':
        setOutput(prev => [...prev, "LinkedIn: https://www.linkedin.com/in/namansharma12/"]);
        break;
      case 'clear':
        setOutput([]);
        break;
      case 'help':
        setOutput(prev => [...prev,
          "Available commands:",
          "whoami - About me",
          "leetcode - My LeetCode profile",
          "github - My GitHub profile",
          "linkedin - My LinkedIn profile",
          "clear - Clear the terminal",
          "help - Show this help message"
        ]);
        break;
      default:
        setOutput(prev => [...prev, `zsh: command not found: ${cmd}`]);
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <PageContainer>
      <ContentContainer>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
              Connect with me
            </Typography>
            <SocialLink href="https://github.com/NamanSharma1201" target="_blank" rel="noopener">
              <GitHubIcon /> GitHub
            </SocialLink>
            <SocialLink href="https://leetcode.com/Naman_Sharma_/" target="_blank" rel="noopener">
              <CodeIcon /> LeetCode
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/namansharma12/" target="_blank" rel="noopener">
              <LinkedInIcon /> LinkedIn
            </SocialLink>
            <Typography variant="body1" sx={{ mt: 4, fontStyle: 'italic' }}>
              Feel free to connect with me on these platforms!
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <TerminalWindow elevation={3}>
              <TerminalHeader>
                <TerminalButton size="small" color="#FF5F56">
                  <CloseIcon />
                </TerminalButton>
                <TerminalButton size="small" color="#FFBD2E">
                  <MinimizeIcon />
                </TerminalButton>
                <TerminalButton size="small" color="#27C93F">
                  <CropSquareIcon />
                </TerminalButton>
                <Typography variant="body2" sx={{ color: '#FFFFFF', ml: 2 }}>
                  naman@macbook-pro ~ zsh
                </Typography>
              </TerminalHeader>
              <TerminalBody ref={terminalRef} onClick={focusInput}>
                {output.map((line, index) => (
                  <Typography key={index} variant="body2" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                    {line}
                  </Typography>
                ))}
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" component="span">
                    naman@macbook-pro ~ %&nbsp;
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      minHeight: '20px',
                    }}
                  >
                    {input}
                    <Cursor blink={cursorBlink} />
                  </Typography>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      opacity: 0,
                      pointerEvents: 'auto',
                    }}
                  />
                </Box>
              </TerminalBody>
            </TerminalWindow>
          </Grid>
        </Grid>
      </ContentContainer>
    </PageContainer>
  );
};

export default Contact;
