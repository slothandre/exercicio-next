import Link from "next/link";
import styled from "styled-components";

export default function Locations({ results }) {
  return (
    <StyledLocal>
      {results.map((localizacao) => (
        <article key={localizacao.id}>
          <Link href={`/localizacoes/${localizacao.id}`}>
            <h3>{localizacao.name}</h3>
            <p>Tipo: {localizacao.type}</p>
          </Link>
        </article>
      ))}
    </StyledLocal>
  );
}

const StyledLocal = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;

  article {
    background-color: #303032;
    padding: 0.5rem 1rem;
  }

  article a {
    text-decoration: none;
    color: #70592d;

    &:hover {
      color: #9fded5;
    }
  }
`;
