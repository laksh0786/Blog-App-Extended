import React, { useContext, useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom';
// import { baseUrl } from '../baseUrl';
import { AppContext } from '../context/AppContext';
import Header from '../Components/Header';
import Card from '../Components/Card';
import Spinner from '../Components/Spinner';

function BlogPage() {

    const { loading, setLoading } = useContext(AppContext);

    //The base url for the blog page is different and all the other pages have the same base url
    const newbaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";

    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setrelatedBlogs] = useState([]);
    const location = useLocation();
    // const navigate = useNavigate();

    const blogId = location.pathname.split("/").at(-1);

    async function fetchBlog() {

        setLoading(true);

        let url = newbaseUrl + "?blogId=" + blogId;

        try {

            let response = await fetch(url);
            let result = await response.json();

            setBlog(result.blog);
            setrelatedBlogs(result.relatedBlogs);

        }
        catch (error) {
            console.log("Error : ", error);
            setBlog(null);
            setrelatedBlogs([]);
        }

        setLoading(false);

    }

    useEffect(() => {
        if (blogId) {
            fetchBlog();
        }
    }, [location.pathname])

    return (
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
            <Header />

            <div>

                <button>Back</button>

                {
                    loading ? (<Spinner />) :
                        (
                            blog ? (

                                <div>

                                    <div className='w-11/12 max-w-[650px] flex flex-col gap-y-1 mt-[78px]'> 
                                        <Card post={blog} />
                                    </div>

                                    <h2 className='text-2xl font-semibold mb-[20px] -mt-1'>Related Blogs </h2>

                                    <div className='w-11/12 max-w-[650px] flex flex-col gap-y-1 mt-[20px]'>
                                        {
                                            relatedBlogs.map((blog) => {
                                                return (
                                                    <Card post={blog} key={blog.id} />
                                                )
                                            })
                                        }
                                    </div>

                                </div>


                            ) :

                                (<p>No Blog Found</p>)


                        )
                }

            </div>

        </div >
    )
}

export default BlogPage