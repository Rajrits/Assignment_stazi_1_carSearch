import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';

   
const numbers = [...Array(11).keys()].slice(1);

export default function Footer(props) {
    
    const [page,setPage] = useState(1);
    const handleOnChange = (n) =>{
        if(n>1){
            setPage(n)
        }
        else if(n==1){
            setPage("/")
        }
    }
const handleOnPrevClick = () =>{
    if(page >= 2){
        const a = page-1;
      setPage(a);
    }
    else if(page === 1){
        setPage("/")
    }
    
}
const handleOnNextClick = () =>{
    if(page==="/"){
        setPage(2);
    }
    else if(page <= 9){
    const a = page+1;
    setPage(a);
    }
    
}


      
    
    return (
            
            <div className="footer_container">
                <div className="footerbar">
                    <div className="currPage">
                        <span>{`${page==="/"?1:page} from 10`}</span>
                    </div>
                    <div className="pagination">
                        
                        <NavLink  to={`${page===2 || page === 1|| page === NaN?"/":page-1}`} className ="arrow" onClick={handleOnPrevClick}>&larr;</NavLink>
                        {
                           numbers.map((n,i)=>{
                            return(
                            <li className="page" key={i}> 
                               <NavLink activeclassname="active" to={`${n===1?"/":n}`} onClick={()=>handleOnChange(n)}>{n}</NavLink>
                            </li>
                           )
                           })

                        }
                         <NavLink  className ="arrow" to={`${page==="/"?2:page===10?page:page+1}`} onClick={handleOnNextClick}>&rarr;</NavLink>

                        
                    </div>
                </div>
            </div>
       
    )
}
