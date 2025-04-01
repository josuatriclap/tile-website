import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const TileContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Tile = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  transition: background-color 0.3s;
  
  &:first-of-type {
    background-color: #2196f3;
    &:hover {
      background-color: #1976d2;
    }
  }
  
  &:last-of-type {
    background-color: #4caf50;
    &:hover {
      background-color: #388e3c;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  overflow-y: auto;
  padding: 2rem 0;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #1976d2;
  }
`;

const PrivacyText = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  line-height: 1.6;
  font-size: 1.1rem;
  
  h1, h2, h3 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #333;
  }

  h1 {
    font-size: 2em;
    border-bottom: 2px solid #eee;
    padding-bottom: 0.3em;
  }

  h2 {
    font-size: 1.5em;
    margin-top: 2em;
  }

  h3 {
    font-size: 1.2em;
    color: #444;
  }
  
  p {
    margin-bottom: 1em;
  }
  
  ul, ol {
    margin-left: 1.5em;
    margin-bottom: 1em;
  }

  a {
    color: #2196f3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    color: #444;
  }

  code {
    background: #f5f5f5;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
  }
`;

function Home() {
  return (
    <TileContainer>
      <Tile to="https://incogny.com" target="_blank" rel="noopener noreferrer">
        Incogny
      </Tile>
      <Tile to="/quizzter">
        Quizzter
      </Tile>
    </TileContainer>
  );
}

function QuizzterPage() {
  return (
    <Container>
      <h1>Welcome to Quizzter</h1>
      <Link to="/quizzter/privacy">
        <Button>Privacy Policy</Button>
      </Link>
    </Container>
  );
}

function PrivacyPolicy() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/privacy-policy.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error loading privacy policy:', error));
  }, []);

  return (
    <Container>
      <PrivacyText>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </PrivacyText>
      <Link to="/quizzter">
        <Button>Back to Quizzter</Button>
      </Link>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzter" element={<QuizzterPage />} />
        <Route path="/quizzter/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
