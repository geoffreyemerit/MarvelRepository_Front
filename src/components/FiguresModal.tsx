import React from 'react';
import IHero from '../interfaces/IHero';

// FRONT-END INTERFACE REQUIRED //
interface FiguresDescriptionProps {
  figure: IHero;
  setModalToOpen: React.Dispatch<React.SetStateAction<number>>;
}

const FiguresDescription = ({ figure, setModalToOpen }: FiguresDescriptionProps) => {
  return (
    <div className="figure">
      <span className="figure__identity">{figure?.identity}</span>
      <div className="figure__container">
        <img
          className="figure__container__img"
          src={figure?.picture}
          alt={figure?.identity}
        />
        <div className="figure__container__desc">
          <span className="figure__container__desc--aa">
            {figure?.lastname}
            {figure?.firstname}
            {figure?.team}
            {figure?.origin}
            {figure?.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FiguresDescription;
