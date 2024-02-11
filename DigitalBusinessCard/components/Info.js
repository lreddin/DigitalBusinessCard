import React from 'react'

export default function Info(){
    
   return( 
       <div className ='info'>
            <h1 className='info--name'>Lee Reddin</h1> 
            <h3 className = 'info--job'>Frontend Developer</h3>
            <div className='info--btns--container'>
                <a href="mailto:lee.reddin@gmail.com"><button className= 'info--btns info--email'><i className="fa-solid fa-envelope"></i> Email</button></a>
                <a href='https://www.linkedin.com/in/lee-reddin-cfa-46a4ba19/'><button className= 'info--btns info--linkedin'><i className="fa-brands fa-linkedin"></i> LinkedIn</button></a>
            </div>
       </div>
   )
}