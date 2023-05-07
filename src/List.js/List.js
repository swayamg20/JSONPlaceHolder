import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function List(){
  const [profiles, setProfiles] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const nameRef = useRef()
  const emailRef = useRef()

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = () => {
    
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=10`)
      .then(response => {
        setProfiles(prevProfiles => [...prevProfiles, ...response.data]);
        setPage(prevPage => prevPage + 1);
        if(page===10)
        setHasMore(false)
      })
      .catch(error => {
        console.log('Error fetching profiles:', error);
      });
  };

  const  handleAdd = (e) => {
        
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
            name: nameRef.current.value,
            email: emailRef.current.value,
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data)=>{
                setProfiles((profiles)=> [...profiles,data])
                console.log(profiles)
            })
    }

  const renderProfiles = (e) => {
    return profiles.map((profile, index) => (
      <div className="profile" key={index}>
        <img src={`https://avatars.dicebear.com/api/bottts/${index}.svg`} height='50px' alt="Avatar" />
        <h3><b>Name</b> : {profile.name}</h3>
        <p><b>Email</b>: {profile.email}</p>
        <h3>{index++}</h3>
      </div>
    ));
  };

  return (
    <>
    <div className='form-JSON'>
    <Form onSubmit={handleAdd} inline>
        <Form.Group id="name" className="signup-input resp-signup-input" style={{width:'40%', display:'inline-block'}}>
            <Form.Label style={{marginRight:'1%'}}>Name </Form.Label>
        <Form.Control type='string' className='resp-signup-input' placeholder="Dummy Name" id="name" size="small" style={{width:'40%', display:'inline-block'}} ref={nameRef} required />
        </Form.Group>
        <Form.Group id="email" className="signup-input resp-signup-input" style={{width:'40%', display:'inline-block'}}>
            <Form.Label style={{marginRight:'1%'}}>Email </Form.Label>
        <Form.Control type='string' className='resp-signup-input' placeholder="Dummy Email" id="email" size="small" style={{width:'40%', display:'inline-block'}} ref={emailRef} required />
        </Form.Group>
        <div className='text-center' style={{ display:'inline-block'}}>
        <Button className="w-100 button-5" type="submit" style={{width:'40%', display:'inline-block'}}>
        Submit
        </Button></div>
    </Form>
    <i>After submitting, check the bottom of the page for the new entry</i>
    </div>
    <InfiniteScroll
      dataLength={profiles.length}
      next={fetchProfiles}
      hasMore={hasMore}
      loader={<center><h1>Loading...</h1></center>}
      endMessage={<center><p>No more profiles to load</p></center>}
    >
      <div>
        {renderProfiles()}
      </div>
    </InfiniteScroll>
    </>
  );
};

