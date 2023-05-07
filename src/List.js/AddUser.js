import React, {useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
export default function AddUser({handleAdd}) {

    const nameRef = useRef()
    const emailRef = useRef()

    async function handleSubmit(e){
        
        e.preventDefault()
        handleAdd(e);
 }

 

  return (
    <div>AddUser

<Form onSubmit={handleSubmit}>

          <Form.Group id="name" className="signup-input resp-signup-input">
            Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Form.Control type='string' className='resp-signup-input' placeholder="Ex- 8" id="" size="small" ref={nameRef} style={{paddingLeft:'10px', paddingTop:'-10px', width:'10%'}} required />
          </Form.Group>
          <br/>
          <Form.Group id="email" className="signup-input resp-signup-input">
            Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Form.Control type='string' className='resp-signup-input' placeholder="Ex- 8" id="" size="small" ref={emailRef} style={{paddingLeft:'10px', paddingTop:'-10px', width:'10%'}} required />
          </Form.Group>
      
          
          
          

          <br/><div className='text-center'>
          <Button className="w-100 button-5" type="submit" >
            Submit
          </Button></div>
        
        </Form>
    </div>
  )
}
