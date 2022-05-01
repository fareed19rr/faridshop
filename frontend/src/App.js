import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './components/header'
import Footer from './components/Footer';
import Homescreen from './screens/HomeScreen';
import Productscreen from './screens/ProductScreen';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/product" element={<Productscreen />} >
              <Route path=":id" element={<Productscreen />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
