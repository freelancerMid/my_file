import React from 'react';
function useCustomCounter(){
    const [count,setCount] = React.useState(0);
    let handleincrement = ()=>{
        setCount(count + 1);
    
    return{count,handleincrement
    }}
}

export default useCustomCounter