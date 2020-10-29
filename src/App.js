import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import Featured from "./components/Featured";
// import About from "./components/About";
// import Services from "./components/Services";
// import Portfolio from "./components/Portfolio";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import ACServices from "./components/ACServices";
import ACAbout from "./components/ACAbout";

function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={ACServices} />
          <Route exact path="/about" component={ACAbout} />
          {/* <Route exact path="/add-product" component={AddProduct} />
          <Route exact path="/products" component={ProductList} /> */}
        </Switch>
       </Router>
      {/* <Home></Home> */}
      {/* <ACServices></ACServices> */}
      {/* <Header></Header>
      <HeroSection></HeroSection>
      <main id="main">
        <Featured></Featured>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </main> */}
    </div>
  );
}

export default App;
