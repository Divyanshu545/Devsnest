import  {useEffect}  from "react";

//Custom Hook.
const useTittleCount = (count) =>{
    useEffect(() => {
        console.log("I am first!!");
        if (count >= 1) {
            document.title = 'Divyanshu '+count;
        }
        else{
            document.title = 'Divyanshu'
        }
    }, [count]);
}

export default useTittleCount;