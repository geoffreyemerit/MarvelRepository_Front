import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import IHero from '../interfaces/IHero';

// FRONT-END INTERFACE REQUIRED //
interface FiguresCardProps {
  id: number;
}

const FiguresCard = ({ id }: FiguresCardProps) => {
  // I CREATE A USESTATE TO STORE THE DATA FROM THE AXIOS CALL //
  const [figure, setFigure] = useState<IHero>();

  // CALL API AXIOS
  const getContent = async () => {
    // CALL ITEM AXIOS.GET FROM THE URL INTERFACE //
    const figuresPage = await axios.get<IHero>(`http://localhost:8000/api/heroes/${id}`);

    // I USE MY USESTATE AND ITS DATA WITH THE SET //
    setFigure(figuresPage.data);
  };

  // WHEN LOADING THE COMPONENT, I EXECUTE THE GETCONTENT FUNCTION //
  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      {/* We make && of the received data, if we have it we send, if not we continue */}
      {figure && (
        <Link to={`/heroes/${id}`} style={{ textDecoration: 'none' }}>
          <div className="card">
            <img className="card__img" src={figure.picture} alt={figure.identity} />

            <span className="card__name">{figure.identity}</span>
          </div>
        </Link>
      )}
    </>
  );
};

export default FiguresCard;
