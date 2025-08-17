import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const FlavorTitle = () => {

    const isMobile = useMediaQuery({
      query: "(max-width: 600px)"
    })

    useGSAP(() => {
        const firstSplit = SplitText.create(".first",{
            type:"chars"
        });

        const secondSplit = SplitText.create(".second",{
            type:"chars"
        });

        gsap.from(firstSplit.chars,{
            yPercent:200,
            stagger: 0.03,
            ease: "power1.inOut",
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top 30%",
                markers:false
            }
        })

        gsap.from(secondSplit.chars,{
            yPercent:200,
            stagger: 0.03,
            ease: "power1.inOut",
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top 20%",
                markers:false
            }
        })


        if(!isMobile){

            const titleTl = gsap.timeline();

            titleTl.to(".first",{
            xPercent:-32,
            scrollTrigger:{
                trigger:".flavor-section",
                start: "2% top",
                end: "bottom 80%",
                scrub: true
            }
            }).to(".flavor-text-scroll",{
                xPercent:-25,
                scrollTrigger:{
                trigger:".flavor-section",
                start: "2% top",
                end: "bottom 80%",
                scrub: true
            }
            }).to(".second",{
                xPercent:-18,
                scrollTrigger:{
                trigger:".flavor-section",
                start: "2% top",
                end: "bottom 80%",
                scrub: true
            }
            })
        }
    })

  return (
    <div className='general-title col-center h-full 2xl:gap-32 gap-18'>
      <div className='py-3 lg:py-0'>
        <h1 className='first overflow-hidden '>We have 6</h1>
      </div>

      <div className='flavor-text-scroll'>
        <div className='bg-mid-brown pb-5 px-4 pt-3 2xl:pt-0'>
            <h2 className='text-milk'>Freaking</h2>
        </div>
      </div>

      <div className=' py-3 lg:py-0'>
        <h1 className='overflow-hidden second'>Delicious Flavours</h1>
      </div>
    </div>
  )
}

export default FlavorTitle
