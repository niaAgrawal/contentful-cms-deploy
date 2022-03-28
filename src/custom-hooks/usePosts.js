import { useState, useEffect} from "react";
import { getPosts } from "../contentful";

export default function usePosts () {

    const [ posts, setPosts] = useState([])
    const [ isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getPosts()
        .then((posts) => {
            setPosts(posts)
            setIsLoading(false)
        })
        .catch((e) => {
            console.log('Error in fetching the content from CMS')
        })

    }, [])

    return [posts, isLoading];
}