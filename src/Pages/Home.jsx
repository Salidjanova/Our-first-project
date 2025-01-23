import React from 'react'

const Home = () => {
  return (
    <div className='w-[1900px] h-[1080px] m-auto bg-[url(./Pages/images/res.png)]'>
      <div className='w-[1900px] h-[1080px] px-[330px] py-[57px]  '>
        <ul className='text-white flex justify-between items-center text-[16px]     '>
          <li><h1 className='text-[22px] text-white font-black mr-[91px]' >SWAY</h1></li>
          <li><select className='bg-transparent outline-none'><option value="">Demos</option></select></li>
          <li><select className='bg-transparent outline-none'><option value="">Pages</option></select></li>
          <li><select className='bg-transparent outline-none'><option value="">Portfolio</option></select></li>
          <li><select className='bg-transparent outline-none'><option value="">Blog</option></select></li>
          <li><select className='bg-transparent outline-none'><option value="">Shop</option></select></li>
          <li><select className='bg-transparent outline-none'><option value="">Blocks</option></select></li>
          <li><select className='bg-transparent outline-none'><option value="">Elements</option></select></li>
          <li><select className='bg-transparent outline-none'><option value="">Extra</option></select></li>
          <li><select  className='bg-transparent outline-none'>
            <option className='text-black' value="eng">Eng</option>
            <option className='text-black' value="ru">Ru</option>
            <option className='text-black' value="uz">Uz</option>
          </select></li>
          <button className='btn bg-[#00D664] border-none text-white text-[15px] rounded-full h-[50px] w-[180px] ml-[18px]'>Order Now</button>

        </ul>
        <h1 className='mt-[300px] text-white text-[58px] text-center font-[script]'>Catering should be an experience</h1>
        <h1 className='text-[60px] text-white w-[750px] text-center ml-[260px] font-medium'> We use only the finest and
        freshest ingredients </h1>
        <p className='text-center mt-[34px] text-white font-normal text-[18px] w-[541px] ml-[370px]'> At Sway catering we know that food is an important part of life.
        If the meal is not perfect, your event cannot be perfect. </p>
        <button className='btn bg-[#00D664] text-white text-[18px] rounded-full h-[60px] w-[190px] ml-[540px] mt-[40px]'>Request a Quote</button>
      </div>
    </div>
  )
}

export default Home