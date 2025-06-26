import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Home () {
    const handleClick = () => {
        var name = document.getElementById('name').value;
        document.getElementById('nameis').innerHTML = name;
      };
    

  // };
  return (
    <>
    <input type='text' class='form-control form-md' id='name'></input> 
    <button class='btn btn-primary bg-dark mybtn' onClick={handleClick}>Submit </button>
    <h1 id='nameis'></h1>
    </>
  );
}

export default Home;
