import React from "react";
import { Reset } from "styled-reset";
import Notepaper from "./components/Notepaper";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Notepaper
        title="React.createElement(‘div’,null, “Oi Vida”);"
        author="Naiara Santanta Matioli"
      >
        <p>
          Antes de tudo quero te dizer que eu te amo muito e que o meu amor por você
          cresce cada vez mais.&nbsp;&nbsp;Sinto que somos incrivelmente invencíveis
          juntos.
        </p>
        <br />
        <p>
          Várias vezes eu já te disse que você não me completa, mais que soma na minha
          vida, você é um marido dedicado, companheiro e o mais importante de tudo, meu
          melhor amigo.
        </p>
      </Notepaper>
    </React.Fragment>
  );
}

export default App;
