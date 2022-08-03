import axios from 'axios';
import React, { useEffect, useState } from 'react';

import IHero from '../interfaces/IHero';
import FiguresCard from './FiguresCard';

const FiguresList = () => {
  // I CREATE A USESTATE TO STORE THE DATA FROM THE AXIOS CALL //
  const [figures, setFigures] = useState<IHero[]>();

  // CALL API AXIOS //
  const getContent = async () => {
    // CALL ITEM AXIOS.GET FROM THE URL INTERFACE //
    const figures = await axios.get<IHero[]>(`http://localhost:8000/api/heroes`);

    // I USE MY USESTATE AND ITS DATA WITH THE SET //
    setFigures(figures.data);
  };

  // WHEN LOADING THE COMPONENT, I EXECUTE THE GETCONTENT FUNCTION //
  useEffect(() => {
    getContent();
  }, []);

  //I get all the products (route get api/items) and for each product of my list //
  //I will map the shoppingCard component and pass it the product to display //
  return (
    <div className="heroesListContainer">
      <div className="heroesListContainer--1">
        <h2 className="heroesListContainer--1--title">Team #1 Avengers</h2>
        <div className="heroesListContainer--1__list">
          <div className="heroesListContainer--1__list--card">
            {figures &&
              figures
                .filter((figure) => figure.team === 1)
                .sort(() => Math.random() - 0.5)
                .map((figure) => <FiguresCard id={figure.id} key={figure.id} />)}
          </div>
        </div>
      </div>

      <div className="heroesListContainer--1">
        <h2 className="heroesListContainer--1--title">Team #2 Guardians of the Galaxy</h2>
        <div className="heroesListContainer--1__list">
          <div className="heroesListContainer--1__list--card">
            {figures &&
              figures
                .filter((figure) => figure.team === 2)
                .sort(() => Math.random() - 0.5)
                .map((figure) => <FiguresCard id={figure.id} key={figure.id} />)}
          </div>
        </div>
      </div>

      <div className="heroesListContainer--1">
        <h2 className="heroesListContainer--1--title">Team #3 X-Men</h2>
        <div className="heroesListContainer--1__list">
          <div className="heroesListContainer--1__list--card">
            {figures &&
              figures
                .filter((figure) => figure.team === 3)
                .sort(() => Math.random() - 0.5)
                .map((figure) => <FiguresCard id={figure.id} key={figure.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiguresList;
