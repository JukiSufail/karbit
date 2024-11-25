import React from 'react'

export const Footer = (props) => {
  const { lang } = props
  return (
    <footer className=' p-4 h-fit md:p-16 content-end grid'
    style={{
      background: "linear-gradient(to right,#A8E063, #56AB2F, #004E1A)", 
  }}>
      <p className="text-center text-xl mt-4">
    <span className="text-white">Copyright</span> 
    <span className="text-black"> 2024</span>
</p>

      </footer>
  )
}
