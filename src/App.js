import React, { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import Home from './Pages/Home'
import BlogPage from './Pages/BlogPage'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
import Error404 from './Pages/Error404'


const App = () => {

  const {fetchPosts} = useContext(AppContext);

  //useParams is a hook from react-router-dom which is used to access the dynamic parameters from the url
  //For eg : /blog/:blogId , here blogId is a dynamic parameter. It can be anything.
  //const {blogId} = useParams();

  
  //to access the query paramteres like ?page=2&tag=react&category=webdev
  // we use use searchParams hook from react-router-dom
  //using serachParams we can access the query parameters and set them to the state
  //serachParams returns  an object which contains all the query parameters as key value pairs 

  //serachParams return two things :
  //1. get() method which is used to get the value of the query parameter
  //2. set() method which is used to set the value of the query parameter
  // const searchParams = useSearchParams();

  const [searchParams  , setSearchParams] = useSearchParams();

  //useLocation is a hook from react-router-dom which is used to access the current url and its parameters of the current page
  //It returns an object which contains the current url and its parameters

  const location = useLocation();



  useEffect(()=>{

    const page = searchParams.get("page") ?? 1 ;

    if(location.pathname.includes("tag")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchPosts(Number(page) , tag);
    }

    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchPosts(Number(page),null , category);
    }

    else{
      fetchPosts(Number(page));
    }

  } , [location.pathname , location.search])

  // :blogId means that it is a dynamic parameter. It can be anything.
  // :tag means that it is a dynamic parameter. It can be anything. They take the value from the url automatically and pass it to the component.

  return (

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogId" element={<BlogPage/>} />
      <Route path="/tags/:tag" element={<TagPage/>} />
      <Route path="/categories/:category" element={<CategoryPage/>} />
      <Route path="*" element={<Error404/>} />
    </Routes>
  )
}

export default App