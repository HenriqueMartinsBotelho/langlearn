// import React from "react";
import "./home_style.css";
import rust3 from "./../../assets/rust3.png";
import haskell2 from "./../../assets/haskell2.webp";
import golanguage from "./../../assets/golanguage.png";
import prolog from "./../../assets/prolog.png";
import lisp from "./../../assets/lisp.png";

export const Home = () => {
  return (
    <>
      <div className="page-head">
        <h1>
          LangLearn <span className="version">V0.0.1</span>
        </h1>
        <p className="lead">Aprenda várias linguagens de programação!</p>
        <a href="#" className="btn btn-primary btn-lg">
          Comece aqui
        </a>
      </div>
      <div className="cards">
        <div className="card hovertext" data-hover="Aprenda a linguagem Rust">
          <img src={rust3} alt="" />
        </div>
        <div
          className="card hovertext"
          data-hover="Aprenda a linguagem Haskell"
        >
          <img src={haskell2} alt="" />
        </div>
        <div className="card hovertext" data-hover="Aprenda a linguagem Go">
          <img src={golanguage} alt="" />
        </div>
        <div className="card hovertext" data-hover="Aprenda a linguagem Prolog">
          <img src={prolog} alt="" />
        </div>
        <div className="card hovertext" data-hover="Aprenda a linguagem Lisp">
          <img src={lisp} alt="" />
        </div>
      </div>
    </>
  );
};
