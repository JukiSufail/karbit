import React from 'react'
import Lantern from '../assets/lantern.png'
export const About = (props) => {
  const { lang } = props
  const date = new Date()
  const year = date.getFullYear()
   const enTitle = (<p className='text-white text-2xl lg:text-5xl font-bold mt-3'>About <span className='text-black'>Me</span></p>) 
   const idTitle = (<p className='text-white text-2xl lg:text-5xl font-bold mt-3'>Tentang <span className='text-black'>Saya</span></p>) 

   const d = lang === 'id'?'Hanya Seorang Manusia Biasa'
   :'Just an Ordinary Person'
  return (
    <section className='lg:h-auto mb-20  grid lg:grid-cols-2 lg:p-8'
    style={{
      background: "linear-gradient(to right,#A8E063, #56AB2F, #004E1A)", 
  }}>
      <div className='flex justify-center items-center content-center pt-8 mt-16 h-full'>
        <div className='xl:w-3/5 xl:h-6/5 z-30 lg:h-4/5 h-600 bg-no-repeat bg-center bg-cover w-auto'
           style={{ backgroundImage: 'url("https://raw.githubusercontent.com/JukiSufail/png/main/yusufmansur2.png")' }}>
        </div>
      </div>
      <div className='h-fit lg:h-full grid'>
        <div className='justify-center justify-self-center self-end grid content-center w-4/5 lg:w-2/3'>
          {lang === 'id'? idTitle:enTitle}
          <p className='font-bold tracking-widest uppercase lg:mt-3 text-black text-xs my-2 lg:my-0 lg:text-md'>Juki Sufail</p>
          <p className='lg:my-2'>
          <span className='tracking-wide p-0.5 lg:p-1 text-xs lg:text-sm font-semibold rounded bg-sky-200/60 w-fit'>{year - 2003} {lang==='id'?'Tahun':'Years Old'}</span>
          <span className='tracking-wide p-0.5 lg:p-1 text-xs lg:text-sm font-semibold rounded bg-sky-200/60 ms-2 w-fit'>{lang==='id'?'Laki-Laki':'Male'}</span>
          </p>
          <p className='text-white tracking-wide text-sm lg:text-lg my-4 lg:my-0'>{d}</p>
        </div>
        <div className='h-full grid mb-8 lg:mb-0'>
          <div className='justify-self-center self-start mt-5 lg:mt-20 grid w-4/5 lg:w-2/3'>
            <div className='text-white tracking-wide text-lg'>
              <a href='https://www.facebook.com/profile.php?id=100017650604051&locale=id_ID' className='w-full flex items-center rounded border-2 border-blue-200 border-opacity-10 shadow-xl rounded-xl p-2  mb-3 bg-opacity-10 hover:bg-opacity-20' style={{ backgroundColor: '#1568C1' }}>
                <img width="24" height="24" src="https://img.icons8.com/fluency/96/facebook-new.png" alt="facebook-new" />
                <p className='align-middle ms-4'>Juki Sufail</p>
              </a>
              <a href='https://github.com/JukiSufail' className='border w-full flex items-center rounded border-2 border-slate-200 border-opacity-10 shadow-xl rounded-xl p-2 mb-3  bg-opacity-10 hover:bg-opacity-20' style={{ backgroundColor: '#8A2BE2' }}>
                <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/000000/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png" alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo" />
                <p className='align-middle ms-4 text-white'>Juki Sufail</p>
              </a>
              <a href='#' className='border w-full flex items-center rounded border-2 border-indigo-200 border-opacity-10 shadow-xl rounded-xl p-2  bg-opacity-10 hover:bg-opacity-20' style={{ backgroundColor: '#003366' }}>
                <img width="24" height="24" src="https://img.icons8.com/color/48/discord--v2.png" />
                <p className='align-middle ms-4 text-white'>Kazuki#3832</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
