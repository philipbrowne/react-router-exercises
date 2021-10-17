import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const DogDetails = ({ dog }) => {
  return dog ? (
    <div>
      <h1>{dog.name}</h1>
      <h4>Age: {dog.age}</h4>
      <div>
        <img src={dog.src} alt="" className="img-fluid" />
      </div>
      <div>
        <h5>Facts about {dog.name}</h5>
        <ul className="d-flex flex-column text-center ">
          {dog.facts.map((fact) => (
            <li className="text-center">{fact}</li>
          ))}
        </ul>
      </div>

      <div>
        <Link to="/dogs">
          <button className="btn btn-primary mt-2">Return to Home Page</button>
        </Link>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default DogDetails;
