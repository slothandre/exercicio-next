import styled from "styled-components";
import serverApi from "./api/server";
import Personagens from "@/components/Personagens";
import Head from "next/head";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/character`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    return {
      props: { dados },
    };
  } catch (error) {
    console.error("Ops, deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ dados }) {
  if (!dados || !dados.results) {
    return <p>Carregando...</p>;
  }

  const { results } = dados;

  if (!results || !results.lenght === 0) {
    return <p>Personagens não encontrados</p>;
  }
  return (
    <>
      <Head>
        <title>Rico e Morto</title>
      </Head>
      <StyledHome>
        <h2>Personagens</h2>
        <Personagens results={results} />
      </StyledHome>
    </>
  );
}
const StyledHome = styled.section``;
