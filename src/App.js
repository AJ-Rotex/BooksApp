import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';
import DisplayBooks from './components/DisplayBooks';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddBooks/>} />
      <Route path="/search" element={<SearchBooks/>} />
      <Route path="/display" element={<DisplayBooks/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
