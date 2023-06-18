import './App.css';
import './normalize.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Stats from './component/Stats';
import Business from './component/Business';
import Billing from './component/Billing';
import CardDeal from './component/CardDeal';
import Testimonials from './component/Testimonials';
import FeeadBackCard from './component/FeeadBackCard';
import CTA from './component/CTA';
import Links from './component/Links';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="hero">
        <div className="container">
          <Hero />
        </div>
      </div>
      <div className="stats">
        <div className="container">
          <Stats />
        </div>
      </div>
      <div className="business">
        <div className="container">
          <Business />
        </div>
      </div>
      <div className="billing">
        <div className="container">
          <Billing />
        </div>
      </div>
      <div className="cardDeal">
        <div className="container">
          <CardDeal />
        </div>
      </div>
      <div className="testemonials">
        <div className="container">
          <Testimonials />
        </div>
      </div>
      <div className="feeadBackCard">
        <div className="container">
          <FeeadBackCard />
        </div>
      </div>
      <div className="cta">
        <div className="container">
          <CTA />
        </div>
      </div>
      <div className="links">
        <div className="container">
          <Links />
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
