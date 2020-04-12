// Why do we need Async/Await. Explain a little about how and why we reached here, with relevant examples

/*
    - Async await is a wrapper for Promises.
    - Allows us to use Promises more easily and write synchronous looking asynchronous code.
    
    // Promise example
    const fetchUrl = function(){
        const result = fetch(url);
        result
            .then(()=>{
                console.log('Promise resolved');
            })
            .catch(()=>{
                console.log('Promise rejected');
        })
    }
    

    // Same code in Async/Await
    const fetchUrl = async function(){
        try{
            const result = await fetch(url);
        }
        catch{
            console.log("Error fetching url");
        }
    }


*/
