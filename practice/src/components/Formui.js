import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function Formui() {
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
    const [text,settext]= useState('')
  return (
    <div className='container'>
        
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Text Area</Form.Label>
                <Form.Control as="textarea" placeholder='Enter text here' rows={5} value={text} onChange={handlechange}/>
            </Form.Group>
        </Form>
        <Button variant="success" onClick={toupper} className='1st-btn '>UPPERCASE</Button>
        <Button variant="success" onClick={tolower} className='2nd-btn ms-2'>LOWERCASE</Button>
        <Button variant="success" onClick={copytext} className='2nd-btn ms-2'>COPY</Button>

    </div>
  )
}

export default Formui