import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {

    const { page, handlePageChange, totalPages } = useContext(AppContext);

    return (
        <footer className='w-full flex justify-center items-center border fixed bottom-0 bg-white'>
            <div className='w-11/12 max-w-[650px] flex justify-between py-2'>
                <div className='flex gap-x-3'>
                    {
                        page > 1 &&
                        <button className='rounded-md border-[1.25px] px-3 py-[3px] ' onClick={() => handlePageChange(page - 1)}>
                            Previous
                        </button>
                    }

                    {
                        page < totalPages &&
                        <button className='rounded-md border-[1.25px] px-3 py-[3px] ' onClick={() => handlePageChange(page + 1)}>
                            Next
                        </button>
                    }
                </div>

                <p className='font-[600] text-sm py-[3px]'>
                    Page <span className='font-bold'>{page}</span> of <span className='font-bold'>{totalPages}</span>
                </p>

            </div>
        </footer>
    )
}

export default Pagination