import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Benefits = () => {

    useGSAP(() => {
        gsap.to(".first-title",{
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".benefit-section",
                start: "top top",
                end: "7% top",
                scrub: 1,
            }
        })

        gsap.to(".second-title",{
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".benefit-section",
                start: "15% top",
                end: "25% top",
                scrub: 1,
            }
        })

        gsap.to(".third-title",{
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".benefit-section",
                start: "20% top",
                end: "30% top",
                scrub: 1,
            }
        })

        gsap.to(".fourth-title",{
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".benefit-section",
                start: "25% top",
                end: "35% top",
                scrub: 1,
            }
        })
    })

  return (
    <div className='benefit-section'>
      <div className='py-20'>
        <p className='general-title'>Unlock the advantages :</p>
        <div className='w-full col-center mt-10'>
            <div
                style={{
                    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                }} 
                className='first-title border-black border-[.75vw]'>
                <div className='bg-mid-brown md:pb-3 p-2 pb-3 text-center'>
                    <h1 className='text-milk-yellow general-title'>SHELF STABLE</h1>
                </div>
            </div>
            <div
                style={{
                    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                }} 
                className='second-title'>
                <div className='bg-milk md:pb-3 p-2 pb-3 text-center'>
                    <h1 className='text-black general-title'>PROTEIN + CAFFEINE</h1>
                </div>
            </div>
            <div
                style={{
                    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                }} 
                className='third-title border-black border-[.75vw]'>
                <div className='bg-dark-brown md:pb-3 p-2 pb-3 text-center'>
                    <h1 className='text-milk general-title'>INFINITELY RECYCLABLE</h1>
                </div>
            </div>
            <div
                style={{
                    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                }} 
                className='fourth-title'>
                <div className='bg-yellow-200 md:pb-3 p-2 pb-3 text-center'>
                    <h1 className='text-black general-title'>LACTOSE FREE</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
