import React from 'react'
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function Formui(props) {
    const handlechange = (e) =>{
        settext(e.target.value);
        console.log('onchangeg')
    }
    const toupper = () =>{
        let s=text.toUpperCase();
        settext(s);
    }
    const tolower = () =>{
        let s=text.toLowerCase();
        settext(s);
    }
    const copytext=()=>{
        navigator.clipboard.writeText(text)
    }
    const cleartext=()=>{
        settext('')
    }
    const [text,settext]= useState('')
  return (
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        
        <div className="mb-3 mt-3" >
            <label htmlFor="exampleFormControlTextarea1"  className="form-label mb-2" style={{color : props.mode==='light'?'black':'white'}}>TEXT AREA</label>
            <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey' , color:props.mode==='light'?'black':'white'}} onChange={handlechange} id="exampleFormControlTextarea1"   rows="5" placeholder='Enter Text Here' value={text}></textarea>
        </div>
        NO. OF WORDS = {text.split(' ').length}                 
        TIME TAKEN TO READ = {text.length*0.008} min<br/><br/>
        <Button variant="success" onClick={toupper} className='1st-btn '>UPPERCASE</Button>
        <Button variant="success" onClick={tolower} className='2nd-btn ms-2'>LOWERCASE</Button>
        <Button variant="success" onClick={copytext} className='2nd-btn ms-2'>COPY</Button>
        <Button variant="success" onClick={cleartext} className='2nd-btn ms-2'>CLEAR</Button>

    </div>
  )
}

export default Formui