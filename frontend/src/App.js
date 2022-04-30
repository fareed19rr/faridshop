import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/header'
import Footer from './components/Footer';
import Homescreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Homescreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
