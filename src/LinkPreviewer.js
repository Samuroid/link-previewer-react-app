// LinkPreviewer kindly provided by Ilona Codes @ https://dev.to/ilonacodes/frontend-shorts-how-to-create-link-content-previewer-with-react-vue-and-vanilla-javascript-1pm1
import React, { useState } from "react";
import "./styles.css";

export const LinkPreviewer = props => {
  const [isShown, setIsShown] = useState(false);

  return (
    <a
      href={props.href}
      className="link-with-preview"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <span> {props.children} </span>
      {isShown && (
        <Card image={props.image} title={props.title} text={props.text} />
      ) && console.log("show card should work") }
    </a>
  );
};

const Card = props => {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
};