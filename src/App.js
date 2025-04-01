import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';

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
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
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
  max-width: 800px;
  margin: 24px;
  line-height: 1.6;
  font-size: 1.1rem;
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
  return (
    <Container>
      <h1>Privacy Policy</h1>
      <PrivacyText>
        This is a placeholder for the Quizzter privacy policy. In a real application, 
        this would contain detailed information about how user data is collected, 
        processed, and protected.
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
