import React from 'react';
import { dogs } from './App';
import { useParams, Redirect } from 'react-router-dom';

const DogDetails = () => {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name === name);
  return dog ? (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt="" />
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default DogDetails;
