import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import {useNavigate } from "react-router-dom";


//Step 1: Create the context
export const AppContext = createContext();


export default function AppContextProvider({ children }) {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState();
    const [totalPages, setTotalPages] = useState(null);

    //Data Filling
    async function fetchPosts(page = 1 , tag=null , category = null) {

        let url = baseUrl + `?page=${page}`;

        if(tag){
            url += `&tag=${tag}`;
        }

        if(category){
            url += `&category=${category}`;
        }

        setLoading(true);

        try {
            const response = await fetch(url);
            const result = await response.json();
            // console.log(result);

            setPage(result.page);
            setPosts(result.posts);
            setTotalPages(result.totalPages);

        }

        catch (error) {
            console.log("Error fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }

        finally {
            setLoading(false);
        }
    }

    function handlePageChange(page){
        navigate({search : `?page=${page}`})
        setPage(page);
    }

    const data = {
        loading, setLoading, posts, setPosts, page, setPage, totalPages, setTotalPages , fetchPosts, handlePageChange
    }



    //Step 2: Create a provider
    // value prop is used to pass the data to the children
    //Always wrap the children with the provider
    // value prop can be an object or an array or a string or a number
    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )

}


//Step 3 : Consume the context
// using useContext hook we can consume the context