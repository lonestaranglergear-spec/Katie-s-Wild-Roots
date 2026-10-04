import Hero from './components/Hero';
import PlantCollection from './components/PlantCollection';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedPlants from './components/FeaturedPlants';
import Social from './components/Social';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="w-full overflow-x-hidden bg-[#010101]">
      <Hero />
      <PlantCollection />
      <About />
      <WhyChooseUs />
      <FeaturedPlants />
      <Social />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}
