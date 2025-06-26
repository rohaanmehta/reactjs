import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Form () {
  const [name, setName] = useState ('');
  const [rollno, setRoll] = useState ('');

  const handleSubmit = e => {
    e.preventDefault ();
    alert (`Hello,  ${name}`);
    alert (`Rollno is ,  ${rollno}`);
  };

  // };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName (e.target.value)}
      />
        <input
        type="text"
        value={rollno}
        onChange={e => setRoll (e.target.value)}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
