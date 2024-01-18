import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";



import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";


function App() {
  return (

    <Router>
    <Header/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/services" element={<Services/>}></Route>
</Routes>

<Footer/>
    </Router>
  );
}

export default App;
