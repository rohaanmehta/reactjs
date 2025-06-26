import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function List({ name }) {

  var items = ['rohaan','pm','saif']

  return (
  <> 
  <h1>This is a dynamic name { name }</h1>
    {items.map((item, index) => (
          <li key={index}>{item}</li> // Always use a unique key
        ))}
  </>
  );
}

export default List;
