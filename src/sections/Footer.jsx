import React from 'react'
import TextPressure from '../components/TextPressure'
import { useMediaQuery } from 'react-responsive'

const Footer = () => {

    const isMobile = useMediaQuery({
        query:"(max-width: 768px)"
    })

    const isTablet = useMediaQuery({
        query:"(max-width: 1024px)"
    })

  return (
    <div className='footer-section'>
      <img src="/images/footer-dip.png" alt="" 
      className='w-full object-cover'/>

      <div className='pt-32 md:px-20 px-5' style={{position: 'relative', height: '800px'}}>
        <TextPressure
            text="#CHUGASPYLT"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
        />
      </div>
      {isMobile ? 
      <video
       src="/videos/splash.mp4"
       autoPlay
       playsInline
       muted
       className='object-contain absolute mix-blend-lighten bottom-35 scale-200'></video>
        :
        !isMobile && !isTablet && <video
       src="/videos/splash.mp4"
       autoPlay
       playsInline
       muted
       className='object-contain absolute mix-blend-lighten top-10'></video>}
       {isTablet && <video
       src="/videos/splash.mp4"
       autoPlay
       playsInline
       muted
       className='object-contain absolute mix-blend-lighten bottom-0'></video>}

       <div className='text-milk/40 w-full flex absolute md:bottom-5 
       items-center justify-between md:px-20
       md:text-3xl font-extralight bottom-140 px-3'>
        <h2>Follow us @spyltdrinks</h2>
        <h2>©Copyright. All rights reserved.</h2>
       </div>
    </div>    
  )
}

export default Footer
