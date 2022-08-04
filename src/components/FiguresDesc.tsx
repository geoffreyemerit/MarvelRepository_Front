import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import IHero from '../interfaces/IHero';
import IPower from '../interfaces/IPower';
import ITeam from '../interfaces/ITeam';

const FiguresDesc = () => {
  // WE GATHER PARAM idHero FROM URL
  const { idHero } = useParams<string>();
  // I CREATE A USESTATE TO STORE THE DATA FROM THE AXIOS CALL //
  const [hero, setHero] = useState<IHero>();
  const [team, setTeam] = useState<ITeam>();
  const [powers, setPowers] = useState<IPower[]>();

  // CALL API AXIOS
  const getContent = async () => {
    // CALL ITEM AXIOS.GET FROM THE URL INTERFACE //

    const heroInfos = await axios.get<IHero>(
      `http://localhost:8000/api/heroes/${idHero}`,
    );

    const teamName = await axios.get<ITeam>(
      `http://localhost:8000/api/teams/${heroInfos.data.team}`,
    );

    const powerType = await axios.get<IPower[]>(
      `http://localhost:8000/api/heroes/${idHero}/powers`,
    );

    // I USE MY USESTATE AND ITS DATA WITH THE SET //
    setHero(heroInfos.data);
    setTeam(teamName.data);
    setPowers(powerType.data);
  };

  // WHEN LOADING THE COMPONENT, I EXECUTE THE GETCONTENT FUNCTION //
  useEffect(() => {
    getContent();
  }, []);
  return (
    <>
      {hero && (
        <div className="figuresDesc">
          <div className="figuresDesc__title">
            <h1 className="figuresDesc__title--h1">{hero.identity}</h1>
            <Link to="/home" className="figuresDesc__title__return">
              <span className="figuresDesc__title__return--button">Retour</span>
            </Link>
          </div>
          <div className="figuresDesc__details">
            <img
              className="figuresDesc__details__picture"
              src={hero.picture}
              alt={hero.identity}
            />

            <div className="figuresDesc__details__description">
              <div className="figuresDesc__details__description--1">
                Firstname:
                <span className="figuresDesc__details__description--1--wh">
                  {hero.firstname}
                </span>
              </div>
              <div className="figuresDesc__details__description--1">
                Lastname:
                <span className="figuresDesc__details__description--1--wh">
                  {hero.lastname}
                </span>
              </div>
              <div className="figuresDesc__details__description--1">
                Team:
                <span className="figuresDesc__details__description--1--rd">
                  {team?.name}
                </span>
              </div>
              <div className="figuresDesc__details__description--1">
                Origin:
                <span className="figuresDesc__details__description--1--wh">
                  {hero.origin}
                </span>
              </div>
              <div className="figuresDesc__details__description--1">
                Powers:
                <span className="figuresDesc__details__description--1--wh">
                  {powers &&
                    powers
                      .map((power) => power.power)
                      .join(', ')
                      .toLowerCase()}
                </span>
              </div>
              <div className="figuresDesc__details__description--2">
                Description:
                <span className="figuresDesc__details__description--2--desc">
                  {hero.description}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FiguresDesc;
