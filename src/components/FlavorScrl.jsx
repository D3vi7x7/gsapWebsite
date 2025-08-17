import React, { useRef } from 'react'
import { flavorlists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'

const FlavorScrl = () => {

    const scrollRef = useRef();
    const isTablet = useMediaQuery({
      query:"(max-width: 1024px)"
    });
    const isMobile = useMediaQuery({
      query: "max-width: 700px"
    })

    useGSAP(() => {

        const scrollamt = scrollRef.current.scrollWidth - window.innerWidth;

        if(!isTablet){
          const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".flavor-section",
                start:"3% top",
                end:`+=${scrollamt + 1200}px`,
                scrub: 1.5,
                pin:true,
                markers: false
            }
          })

          tl.to(".flavor-section",{
              x:`-${scrollamt + 1200}px`
          })
        }else if(isTablet && !isMobile){
          const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".flavor-section",
                start:"18% top",
                end:`+=${scrollamt}px`,
                scrub: 1.5,
                pin:true,
                markers: false
            }
          })

          tl.to(".flavor-section",{
              x:`-${scrollamt}px`
          })
        }
        
    })

  return (
    <div ref={scrollRef} className='slider-wrapper'>
      <div className='flavors'>
        {flavorlists.map((flavor) => (
            <div key={flavor.name}
            className={`relative z-30 flex-none lg:w-[50vw] md:w-[60vw] md:h-[70vh] w-96 lg:h-[70vh]
            h-80 ${flavor.rotation}`}>
                <img src={`/images/${flavor.color}-bg.svg`} alt="" 
                className='absolute bottom-0'/>

                <img className='drinks' src={`/images/${flavor.color}-drink.webp`} alt="" />

                <img src={`/images/${flavor.color}-elements.webp`} alt="" 
                className='elements'/>

                <h1>{flavor.name}</h1>

            </div>
        ))}
      </div>
    </div>
  )
}

export default FlavorScrl
