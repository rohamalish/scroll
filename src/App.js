
import './App.css';
import Header from './components/header';
import NavBar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <NavBar></NavBar>
    </BrowserRouter>
  );
}

export default App;
