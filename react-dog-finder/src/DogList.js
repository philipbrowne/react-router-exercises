import React from 'react';
import { dogs } from './App';
import './DogList.css';
import { Link } from 'react-router-dom';

const DogList = () => {
  const dognames = dogs.map((dog) => dog.name);
  return (
    <div>
      <h1>Dog Finder</h1>
      <ul className="DogList">
        {dognames.map((name) => (
          <Link to={`/dogs/${name}`} key={name}>
            <li key={name}>{name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DogList;
