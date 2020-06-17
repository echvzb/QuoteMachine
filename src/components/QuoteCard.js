import React from "react";
import FooterButton from "./FooterButton";
import QuoteBody from "./QuoteBody";

export default props => {
  let mediaText = props.estado.text + ". -" + props.estado.author;
  const regEx = /\S+/g;

  let phrases = mediaText.match(regEx);
  mediaText = "https://twitter.com/intent/tweet?text=";
  phrases.forEach(elem => {
    mediaText += elem + "%20";
  });
  return (
    <div className="card container" id="quote-box">
      <div className="card-body">
        <QuoteBody text={props.estado.text} author={props.estado.author} />
        <FooterButton onNewPhrase={props.newPhrase} mediaText={mediaText} />
      </div>
    </div>
  );
};
