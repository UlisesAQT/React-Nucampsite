import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
        <Header/>
        <CampsitesDirectoryPage />
        <Footer/>
    </div>
  );
}

export default App;
