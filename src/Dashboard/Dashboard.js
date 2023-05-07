import * as React from 'react';
import LazyLoadedProfiles from '../List.js/List';
import AddUser from '../List.js/AddUser';
import NavBar from '../Nav';

export default function Dashboard() {
 

  return (
    <>
    <div>
    <NavBar/>
    <LazyLoadedProfiles/>
 
   
 
</div>
</>
  );
}