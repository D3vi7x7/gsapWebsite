import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const Message = () => {

    useGSAP(() => {
        const firstMsg = SplitText.create(".first-message",{
            type:"words"
        });
        const secondMsg = SplitText.create(".second-message",{
            type:"words"
        });

        gsap.to(firstMsg.words,{
            color: "#faeade",
            ease: "power1.inOut",
            stagger: 1,
            scrollTrigger:{
                trigger:".message-content",
                start: "top center",
                end: "30% center",
                scrub:true
            }
        })

        gsap.to(secondMsg.words,{
            color: "#faeade",
            ease: "power1.inOut",
            stagger: 1,
            scrollTrigger:{
                trigger:".message-content",
                start: "40% center",
                end: "85% center",
                scrub:true
            }
        })

        gsap.to(".msg-text-scroll",{
            duration: 1,
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            scrollTrigger:{
                trigger:".message-content",
                start: "30% center",
            },
            ease: "bounce.inOut"
        })
    })

  return (
    <section className='message-content'>
      <div className='container mx-auto flex-center py-38'>
        <div className='w-full h-full'>
            <div className='msg-wrapper'>
                <h1 className='first-message'>
                    Stir up your <br />fearless past and
                </h1>

                <div
                 style={{
                    clipPath: "polygon(0 0,0 0,0% 100%,0% 100%)"
                 }}
                 className='msg-text-scroll'>
                    <div className='bg-light-brown md:pb-5 pb-3 px-5'>
                        <h2 className='text-red-brown'>Fuel up</h2>
                    </div>
                </div>

                <h1 className='second-message'>
                    Your future with every gulp of perfect protein.
                </h1>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Message
