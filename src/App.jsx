import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Message from './sections/Message'
import Flavor from './sections/Flavor'
import { ScrollSmoother } from 'gsap/all'
import Lenis from 'lenis'
import { useGSAP } from '@gsap/react'
import Nutrition from './sections/Nutrition'
import Benefits from './sections/Benefits'
import Testimonials from './sections/Testimonials'
import { useMediaQuery } from 'react-responsive'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const App = () => {

  const isMobile = useMediaQuery({
    query:"(max-width: 768px)"
  })

  useGSAP(() => {
    const lenis = new Lenis({
      duration: 1.2, // Scroll speed
      smooth: true,
    });

    // 2. Update GSAP on scroll
    lenis.on("scroll", ScrollTrigger.update);

    // 3. RAF loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // 4. Optional cleanup
    return () => {
      lenis.destroy();
    };
  })

  return (
    <main className='bg-milk'>
      <Navbar/>
      <Hero/>
      <Message/>
      <Flavor/>
      <Nutrition/>
      <Benefits/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}

export default App
