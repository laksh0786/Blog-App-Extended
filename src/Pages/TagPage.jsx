import React from 'react'
import Header from '../Components/Header';
import Content from '../Components/Content';
import Pagination from '../Components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom'

function TagPage() {

  const navigate = useNavigate();

  const location = useLocation();

  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">

      <Header />

      <div>

        <div className='mt-[90px] -mb-[55px] flex gap-x-3'>

          <button className='border-2 px-2 py-[1px] rounded-md' onClick={()=> navigate(-1)}>
            Back
          </button>

          <h2 className='py-[1px] text-lg font-bold'>Blogs Tagged <span className='text-blue-700 ml-[1px]'> #{tag}</span></h2>

        </div>

        <Content />

      </div>

      <Pagination />

    </div>
  )
}

export default TagPage