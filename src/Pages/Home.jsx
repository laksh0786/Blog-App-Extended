import React from 'react'
import Header from '../Components/Header'
import Content from '../Components/Content'
import Pagination from '../Components/Pagination'

function Home() {
    return (
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">

            <Header />
            <Content />
            <Pagination />

        </div>
    )
}

export default Home