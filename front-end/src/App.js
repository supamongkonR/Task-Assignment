import logo from './logo.svg';
import './CSS/App.css';
import Navbars from './Navbar';
import NavbarButton from './GroupButton';
import Slide from './Slide';
import CardSlide from './CardSlide';
import ButtonIcon from './ButtonIcon';
import NewItem from './NewItem';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbars/>
        <NavbarButton/>
        <Slide/>
        <ButtonIcon/>
        <CardSlide/>
        <NewItem/>
        <Footer/>
    
    </div>
  );
}

export default App;
