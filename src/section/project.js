import React from 'react'
import Lantern from '../assets/lantern.png' 
import Mitsuki1 from "../assets/mitsuki1.jpg"
import { ProjectCard } from '../components/projectcard'
import { motion, inView } from 'framer-motion'
export const Project = (props) => {
  const { lang } = props

  const enTitle = (<>
    <p className='text-gray-800 text-2xl md:text-5xl mb-3 font-bold uppercase'>(Not) My <span className='text-white'>Projects</span></p>
    <p className='text-white text-lg md:text-2xl font-bold'>What are you looking at?</p>
    </>)
    const idTitle = (<>
      <p className='text-gray-800 text-2xl md:text-5xl mb-3 font-bold uppercase'><span className='text-white'>(Bukan) Projek </span>Saya</p>
      <p className='text-white text-lg md:text-2xl font-bold'>Apa lu liat liat?</p>
      </>)
  return (
    <section className='h-full md:p-8 pb-8 overflow-x-hidden'
    style={{
      background: "linear-gradient(to right,#A8E063, #56AB2F, #004E1A)", 
      }}>
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        className='p-8 pt-16 md:pt-8 h-1/5 grid content-center'>
          {lang === 'id'? idTitle : enTitle}
        </motion.div>
        <motion.div 
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        className='bg-opacity-30 relative h-3/4 sm:h-4/5 '>
          <div className='z-20 absolute h-full w-16 bg-gradient-to-r '></div>
          <div className='z-20 absolute h-full w-16 bg-gradient-to-l right-0 '></div>
           <div className=' h-full flex gap-10 p-10 overflow-y-hidden'>
                  <p className='text-8xl white'></p>
            <ProjectCard
            title='Tes Karbit'
            image={"https://raw.githubusercontent.com/JukiSufail/png/main/jumatan.png"}
            plg='javascript'
            pf='web'
            fw='react.js'
            repo='https://github.com/rizalalfadlil/bit'
            page='https://rizalalfadlil.github.io/bit/'
            desc='Seberapa karbit kamu'/>
           </div>
        </motion.div>
      </section>
  )
}
