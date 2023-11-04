import React from "react"
import Header from "./components/Header/Header"
import HeroBanner from "./components/HeroBanner/HeroBanner";
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <HeroBanner />
      <About />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}

export default App;
