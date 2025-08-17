import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { cards } from '../constants'

const Testimonials = () => {

    useGSAP(() => {

        gsap.to(".t1",{
            xPercent:-20,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger: ".testimonials-section",
                start:"50% center",
                end:"250% center",
                scrub:true,
            }
        })
        gsap.to(".t2",{
            xPercent:20,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger: ".testimonials-section",
                start:"50% center",
                end:"250% center",
                scrub:true,
            }
        })
        gsap.to(".t3",{
            xPercent:-20,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger: ".testimonials-section",
                start:"50% center",
                end:"250% center",
                scrub:true,
            }
        })

        const vidTl = gsap.timeline({
          scrollTrigger:{
            trigger:".testimonials-section",
            start:"5% top",
            end:"200% top",
            pin:true,
            scrub:1.5,
          }
        })

        vidTl.from(".vd-card",{
          y:1500,
          duration:1.2,
          stagger: 1.5,
          ease:"power1.inOut"
        })
    })

    const vdRef = useRef([]);

    const handlePlay = (index) => {
      const video = vdRef.current[index];
      video.play();
    }

    const handlePause = (index) => {
      const video = vdRef.current[index];
      video.pause();
    }

  return (
    <div className='testimonials-section py-0'>
      <div className='lg:mt-0 md:mt-55 text-center'>
        <h1 className='text-black t1'>WHAT'S</h1>
        <h1 className='text-yellow-400 t2 md:relative md:-left-38 -left-47'>EVERYONE</h1>
        <h1 className='text-black t3'>TALKING</h1>
      </div>

      <div className='pin-box'>
        {
          cards.map((card,index) => (
            <div key={index} 
            className={`vd-card ${card.rotation} ${card.translation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
            >
              <video 
              ref={(el) => (vdRef.current[index] = el)} src={card.src}
              playsInline muted loop
              className='size-full object-cover'></video>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials
