import Fonts from "./components/Fonts";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Stats from "./components/Stats";
import Comments from "./components/Comments";
import How from "./components/How"; 
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";
import Footer from "./components/Footer";




export default function App() {
  
  

  return (
    <div className="bg-[#f6f3ee] text-[#1c1917] overflow-x-hidden" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <Fonts />
    <Nav />
<Hero />
    <Ticker />
      <Stats />
      <Comments />
      <How />
      <Pricing />
   <Cta />
      <Footer />
    </div>
  )
}