import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='contact' element={<ContactPage/>} />
            <Route path='directory' element={<CampsitesDirectoryPage/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
