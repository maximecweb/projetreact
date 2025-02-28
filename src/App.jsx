import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import './App.css';
import AppartmentGrid from "./components/AppartmentGrid.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <AppartmentGrid />
      </Main>
      <Footer></Footer>
    </div>
  )
}

export default App