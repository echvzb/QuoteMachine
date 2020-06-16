import React from "react";

export default props => {
  return (
    <blockquote className="blockquote mb-0 pt-4 text-center">
      <h4 id="text">{props.text}.</h4>
      <h5 id="author" className="font-weight-light">
        -{props.author}.
      </h5>
    </blockquote>
  );
};
