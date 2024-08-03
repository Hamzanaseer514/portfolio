
import About from './Components/About';
import Chatbox from './Components/Chatbox';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import MyServices from './Components/MyServices';
import Navbar from './Components/Navbar';
import Selector from './Components/Selector';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <HeroSection/>
      <About/>
      <Selector/>
      <MyServices/>
      {/* <Footer/> */}
      <Chatbox/>
    </div>
  );
}

export default App;
