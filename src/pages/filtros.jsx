import Head from "next/head";
import styled from "styled-components";

export default function Filtros() {
  return (
    <>
      <Head>
        <title>Rico e Morto - Filtros</title>
      </Head>
      <h2>Status</h2>
      <StyledFiltros>
        <button>Vivo</button>
        <button>Morto</button>
        <button>Desconhecido</button>
      </StyledFiltros>
    </>
  );
}
const StyledFiltros = styled.section`
  display: flex;
  justify-content: space-around;

  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: lightblue;
    border-radius: 5px;

    &:hover {
      background-color: #00f;
      cursor: pointer;
    }
  }
`;
