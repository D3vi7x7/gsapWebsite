import React from 'react'
import FlavorTitle from '../components/FlavorTitle'
import FlavorScrl from '../components/FlavorScrl'

const Flavor = () => {
  return (
    <div className='flavor-section'>
      <div className='h-full flex flex-col lg:flex-row md:items-start md:px-25 
      lg:px-0 items-center relative'>
        <div className='lg:w-[57%] flex-none h-80 lg:h-full mt-20 xl:mt-0'>
            <FlavorTitle/>
        </div>
        <div className='h-full'>
            <FlavorScrl/>
        </div>
      </div>
    </div>
  )
}

export default Flavor
