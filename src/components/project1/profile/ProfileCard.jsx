import React from "react";

export const ProfileCard = ({ title, handle, image, discription }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle} </p>
        </div>
        <div className="content">{discription}</div>
      </div>
    </div>
  );
};
//props passing only parent class to child class don't pass to child to parent it throught the error
