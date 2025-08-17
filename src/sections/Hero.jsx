import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const Hero = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create(".hero-title",{
            type: "chars"
        });

        const tl = gsap.timeline({
            delay: 1,
        });

        tl.to(".hero-content",{
            opacity: 1,
            y: 0,
            ease: "power1.inOut"
        }).to(".hero-text-scroll",{
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            ease: "power1.out",
            duration: 1
        }, "-=0.5").from(titleSplit.chars,{
            y: 300,
            stagger: 0.02,
            ease: "power2.out"
        }).to(".hero-text-scroll",{
            rotate:"-3deg",
            ease: "power1.out",
        },)

        const heroTl = gsap.timeline({
            delay:0.2,
        });

        heroTl.to(".hero-container",{
            rotate: "5deg",
            scale:0.95,
            y: 200,
            scrollTrigger:{
                trigger:".hero-container",
                start: "1% top",
                end: "bottom top",
                scrub: true,
            }
        })
    })

  return (
    <section>
        <div className='hero-container'>
            <video src="/videos/hero-bg.mp4"
            autoPlay muted playsInline
            className='absolute inset-0 w-full h-full object-cover'></video>

            <div className='hero-content opacity-0'>
                <div className='overflow-hidden'>
                    <h1 className='hero-title'>Freaking Delicious</h1>
                </div>
                <div className='hero-text-scroll pb-5 '
                style={{
                    clipPath: "polygon(50% 0,50% 0,50% 100%,50% 100%)",
                }}>
                    <div className='hero-subtitle'>
                        <h1>Protein + Caffeine</h1>
                    </div>
                </div>

                <h2>Live life to the fullest with SPYLT. Shatter boredom
                    and embrace your inner kid with every deliciously
                    smooth chug.
                </h2>

                <div className='hero-button'>
                    <p>Chug a SPYLT</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
