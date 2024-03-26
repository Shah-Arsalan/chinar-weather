import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav } from './Components/Navbar';
import { MainContainer } from './Components/MainContainer';

function App() {

  return (
    <div className="App">
    <Nav/>
    <MainContainer/>

    </div>
  );
}

export default App;
