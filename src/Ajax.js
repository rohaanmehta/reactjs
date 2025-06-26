import axios from "axios";
import React, { useState, useEffect } from "react";

function Ajax() {      
    const [data, setData] = useState([]); // State to store API data

          useEffect(() => {
            fetch("https://api.restful-api.dev/objects") // API request
              .then((response) => response.json()) // Convert response to JSON
              .then((json) => {
                console.log("Parsed JSON Data:", json); // Log the parsed JSON data
                setData(json);
              })
              .catch((error) => console.error("Error fetching data:", error));
          }, []);

        // };
  return (
  <> 
    <button class='btn btn-primary bg-dark mybtn'>Get Data </button>
    <ul>
        {data.map((each) => (
          <li key={each.id}>
            <strong>{each.id}</strong>: {each.name}
          </li>
        ))}
      </ul>
  </>
  );
}

export default Ajax;
