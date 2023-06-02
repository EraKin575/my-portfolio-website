import React from 'react'
import Image from 'next/image'

export default function Navbar() {


    const navbarElements=[
        "Home",
        "About",
        "Tech Stack",
        "Projects",
    ]
  return (
    <div className='pt-[20px]'>
        <div className='flex justify-center'>
            <div className='flex gap-4'>
            {
                navbarElements.map((element,index)=>{
                    return(
                        <div key={index} className='p-4 '>
                            <a href={`#${element}`} className='text-grey-400 text-lg font-semibold  font-sans  hover:text-gray-500 transition-all duration-300'>{element}</a>
                        </div>
                    )
                }
                )
            }
            </div>
            <div className='flex gap-5 pl-4  '> 
            <Image src='/Github.svg' width={25} height={25} className='rounded-full' />
            <Image src='/Linkedin.svg' width={25} height={25} className='rounded-full' />
            <Image src='/Twitter.svg' width={25} height={25} className='rounded-full' />
            </div>

        </div>
    </div>
  )
}
