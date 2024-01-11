import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';


function Content() {

    //Consume the data from the Context API
    const { posts, loading } = useContext(AppContext);

    return (
        <div className='w-11/12 max-w-[650px] flex flex-col gap-y-1 mt-[78px] mb-[17px]'>
            {
                loading ? (<Spinner />) :
                    (
                        posts.length === 0 ?
                            (
                                <div>
                                    <p>No Posts Exists</p>
                                </div>
                            ) :
                            (
                                posts.map((post) => {
                                   return <Card key={post.id} post={post}/>
                                })
                            )
                    )
            }
        </div>
    )
}

export default Content