import Head from "next/head";
import styled from "styled-components";
import serverApi from "./api/server";
import Locations from "@/components/Locations";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/location`);
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

export default function Localizacoes({ dados }) {
  if (!dados || !dados.results) {
    return <p>Carregando...</p>;
  }

  const { results } = dados;

  if (!results || !results.lenght === 0) {
    return <p>Localizações não encontradas</p>;
  }
  return (
    <>
      <Head>
        <title>Rico e Morto - Localizacoes</title>
      </Head>
      <h2>Localizações</h2>
      <StyledLocalizacoes>
        <Locations results={results} />
      </StyledLocalizacoes>
    </>
  );
}
const StyledLocalizacoes = styled.section``;
