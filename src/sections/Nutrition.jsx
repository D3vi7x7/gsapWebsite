import React from 'react'
import { nutrientLists } from '../constants'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import CircularText from '../components/CircularText'

const Nutrition = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  useGSAP(() => {
    const textSplit = SplitText.create(".nutrient",{
      type: "chars"
    })

    const p1Split = SplitText.create(".p1",{
      type: "chars"
    })

    const p2Split = SplitText.create(".p2",{
      type: "chars"
    })

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".nutrition-section",
        start: "2% top",
      }
    });

    tl.to(".nutrition-text-scroll",{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.inOut",
    }).from(textSplit.chars,{
      y:200,
      stagger:0.02,
      ease:"power1.inOut",
    })

    gsap.to(".nutrition-title",{
      yPercent:-50,
      ease: "power1.inOut",
      scrollTrigger:{
        trigger:".nutrition-section",
        start: "5% top",
        end:"80% top",
        scrub:true,
      }
    })
    
    
    gsap.from(p1Split.chars,{
      y:20,
      stagger:0.02,
      ease:"power1.inOut",
      scrollTrigger:{
        trigger:".nutrition-section",
        start: "10% top",
      }
    })
    gsap.from(p2Split.chars,{
      y:-90,
      stagger:0.02,
      ease:"power1.inOut",
      scrollTrigger:{
        trigger:".nutrition-section",
        start: "10% top",
      }
    })

  })

  return (
    <div className='nutrition-section'>
      <img src="/images/slider-dip.png" alt=""
      className='w-full' />
      <img 
      src="/images/big-img.png"
      className='big-img' 
      alt="" />

      <div className='nutrition-title absolute left-27 md:mt-0 mt-20 md:left-8'>
        <div className='general-title lg:pb-20 md:pb-28 pb-22'>
          <h1 className='nutrient overflow-hidden'>It still does</h1>
        </div>

        <div
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        }} 
         className='nutrition-text-scroll'>
          <div className='bg-mid-brown md:pb-3 p-2 pb-3 text-center'>
            <h1 className='text-milk-yellow general-title'>Body Good</h1>
          </div>
        </div>
      </div>

      <div className='nutrition-box md:px-20 py-10'>
        <div className='list-wrapper'>
          {!isMobile && nutrientLists.map((item,index) => (
            <div key={index} className='relative flex-1 col-center'>
              <div>
                <p className='font-paragraph overflow-hidden p1'>{item.label}</p>
                <p className='font-paragraph mt-0.5'>up to</p>
                <p className='font-bold md:text-3xl overflow-hidden p2'>{item.amount}</p>
              </div>

              {index !== nutrientLists.length -1 && (
                <div className="spacer-border"/>
              )}
            </div>
          ))}
          {isMobile && nutrientLists.map((item,index) => (
            <div key={index} className='relative flex-1 col-center'>
              <div>
                <p className='text-sm'>{item.label}</p>
                <p className=''>up to</p>
                <p className='font-bold'>{item.amount}</p>
              </div>

              {index !== nutrientLists.length -1 && (
                <div className="spacer-border"/>
              )}
            </div>
          ))}
        </div>
      </div>

      <CircularText
        text="DRINK*SOMETHING*GOOD*"
        onHover="speedUp"
        spinDuration={20}
        className='absolute lg:left-129 lg:-top-25 md:left-75 md:top-40
        md:opacity-100 opacity-0'
      />

    </div>
  )
}

export default Nutrition
