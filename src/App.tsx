import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import TextArea from './TextArea';
import Header from './Header';

function App() {
  return (
    <div className="container">
      <Header />
      <ToastContainer />
      <TextArea />
      <Footer />
    </div>
  );
}

export default App;
