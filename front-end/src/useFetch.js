import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const aborCont = new AbortController(); 
            fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setData(data);
                setIsLoading(false);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }
            })
        return () => {
            aborCont.abort()
            console.log('clean up!')
        }
        
    }, [url]);

    return {data, isLoading}
}
export default useFetch