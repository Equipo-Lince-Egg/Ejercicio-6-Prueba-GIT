import React from "react";

const Card = ({ personaje }) => {
  return (
    <li className="col-2">
      <div className="card" style={{ width: "18rem" }}>
        <img src={personaje.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{personaje.name}</h5>
          <p className="card-text">
            {personaje.status} {personaje.species}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Card;
