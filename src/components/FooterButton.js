import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => {
  return (
    <div className="pt-4 row">
      <div className="col-md-2 col-6 p-1">
        <a
          href={props.mediaText}
          className="btn btn-primary w-100"
          text={props.mediaText}
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
        </a>
      </div>

      <div className="col-md-2 col-6 p-1">
        <a href="#" className="btn btn-dark w-100">
          <FontAwesomeIcon icon={["fab", "tumblr"]} size="lg" />
        </a>
      </div>

      <div className="offset-md-3 col-md-4 p-1">
        <a href="#" className="btn btn-info w-100" onClick={props.onNewPhrase}>
          Nueva Frase
        </a>
      </div>
    </div>
  );
};
