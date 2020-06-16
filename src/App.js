import React from "react";
import QuoteCard from "./components/QuoteCard.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

library.add(fab);

//Redux

const CHANGE = "CHANGE";
const defaultState = {
  quotes: [],
  text: "",
  author: ""
};
let quotes = [
  [
    "Ley de Alzheimer de la programación: si lees un código que escribiste hace más de dos semanas es como si lo vieras por primera vez",
    "Dan Hurvitz"
  ],
  [
    "Si el código y los comentarios no coinciden, posiblemente ambos sean erróneos",
    "Norm Schryer"
  ],
  [
    "Está bien celebrar el éxito pero es más importante prestar atención a las lecciones del fracaso",
    "Bill Gates"
  ],
  [
    "El fracaso es sólo la oportunidad de comenzar de nuevo de forma más inteligente… Un negocio absolutamente dedicado al servicio sólo tendrá una preocupación sobre las ganancias: serán demasiado grandes",
    "Henry Ford"
  ],
  [
    "Tu tiempo es limitado, así que no lo desperdicies viviendo la vida de alguien más. No te dejes atrapar por el dogma, que es vivir con los resultados de los pensamientos de otras personas. No dejes que el ruido de las opiniones de otros ahogue tu voz interior. Y lo más importante: ten el coraje de seguir a tu corazón e intuición. De algún modo ellos ya saben lo que realmente quieres ser. Todo lo demás es secundario",
    "Steve Jobs"
  ],
  [
    "No necesitas tener una empresa de 100 personas para desarrollar Esa idea",
    "Larry Page"
  ],
  [
    "Uno de los grandes errores que comete la gente es tratar de forzar su interés. Tú no eliges tus pasiones; tus pasiones te eligen a ti",
    "Jeff Bezos"
  ]
];
quotes.forEach(elem => {
  defaultState.quotes.push({ text: elem[0], author: elem[1] });
});

const changeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE: {
      return Object.assign({}, state, {
        text: state.quotes[action.index].text,
        author: state.quotes[action.index].author
      });
    }
    default: {
      return state;
    }
  }
};
const randomIntFromInterval = max => {
  return Math.floor(Math.random() * max);
};
const changePhrase = index => {
  return {
    type: CHANGE,
    index
  };
};

const store = createStore(changeReducer);

store.dispatch(changePhrase(randomIntFromInterval(defaultState.quotes.length)));

const mapStateToProps = state => {
  return {
    estado: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changePhrase: () =>
      dispatch(changePhrase(randomIntFromInterval(defaultState.quotes.length)))
  };
};

//React

let App = props => {
  return (
    <div className="container">
      <div style={styles} />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <QuoteCard estado={props.estado} newPhrase={props.changePhrase} />
        </div>
      </div>
    </div>
  );
};
const AppRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default () => {
  return (
    <Provider store={store}>
      <AppRedux />
    </Provider>
  );
};

const styles = {
  height: "150px",
  width: "100%"
};
