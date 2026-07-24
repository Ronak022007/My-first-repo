// const myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Promise is completed");
//     } else {
//         reject("Promise is not completed");
//     }
// });

// myPromise
//     .then((result) => {
//         console.log("Fulfilled case:", result);
//     })
//     .catch((error) => {
//         console.log("Rejected case:", error);
//     });

        //  promise chaining     
        // const login = new Promise ((res,rej) =>{
        //     let success = true;
        //     const getProfile =()=>{
        //         console.log("your profile")
        //     }
        //     const



        //     let promise = async() =>{
        //         try{
        //             await
                    
        //         }
        //     }





        fetch("https://dummyjson.com/user")
        .then(response)=> response.json())
        .then((data) =>{
            console.log(data);
        })
        .catch(error)

        }




        const getUsers = async() =>{
            try {
                const res = await fetch("https://dummyjson.com/user");
            const data = await res.json()
        console.log(data)
                }
    catch(error)
    }console.log("error occured during fetch data",error)
}getUsers();
Const getQuotes = async() =>{
    try{
        const res = await fetch("https://dummyjson.com/quotes");
        const 
    }
}
}











            

        }

