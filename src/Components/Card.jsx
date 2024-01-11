import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({ post }) {
    return (
        <div>

            <NavLink to={"/blog/"+post.id}>
                <h3 className='font-bold text-[18px] mb-[2px]'>{post.title}</h3>
            </NavLink>

            <p className='text-[12px] mb-[0.25px]'>
                By <span className='italic'>{post.author}</span> on
                &nbsp;
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className='underline font-bold'>{post.category} </span>
                </NavLink>
            </p>

            <p className='text-[12px]'>
                Posted On <span>{post.date}</span>
            </p>

            <p className='text-sm mt-3 text-justify'>
                {post.content}
            </p>

            <div className='flex gap-x-3 mt-2'>
                {
                    post.tags.map((tag, index) => {
                        return (
                            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                                <span className='text-blue-700 text-xs underline font-bold'>{`#${tag}`}</span>
                            </NavLink>
                        )
                    })
                }
            </div>

            <hr className='my-8' />

        </div>
    )
}

export default Card