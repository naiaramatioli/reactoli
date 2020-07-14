import React from "react";
import { Reset } from "styled-reset";
import Notepaper from "./components/Notepaper";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Notepaper
        title="React.createElement (‘div’,null, “Oi Vida”);"
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
        <br />
        <p>
          Eu amo ver você sorrindo, dando risada, se sentindo orgulhoso de ter
          conquistado algo, amo ver você falando de programação (mesmo eu não entendendo
          muito as vezes rsrsrsr #reactoli), amo ver você com a Ivy, a maneira que você
          cuida de nós duas me enche de alegria, porque me da a certeza de que você vai
          ser o melhor pai do mundo pros nossos filhos.
        </p>
        <br />
        <p>Você me ama?</p>
        <p>(&nbsp;&nbsp;&nbsp;&nbsp;) se não – vai amar do mesmo jeito</p>
        <p>(&nbsp;&nbsp;&nbsp;&nbsp;) se sim – não faz mais que a sua obrigação</p>
        <br />
        <p>Te amo meu gatinho.</p>
      </Notepaper>
    </React.Fragment>
  );
}

export default App;
