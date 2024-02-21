import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="2xl:bg-hero-pattern bg-hero1-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* <div className="bg-secondpage-pattern"> */}
          <About />
        {/* </div> */}
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
