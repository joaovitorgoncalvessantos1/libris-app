import { useEffect, useState } from "react";
import Nav from "./assets/Components/Nav/Nav";
import CardBook from "./assets/Components/CardBook/CardBook";
import ConteinerBook from "./assets/Components/ConteinerBook/ConteinerBook";

function Home() {
const [busca, setBusca] = useState("");
  const [livros, setLivros] = useState([]);

const url = `https://openlibrary.org/search.json?q=${busca}`;

useEffect(() => {
  const delay = setTimeout(() => {
    async function ChamarApi() {
      const response = await fetch(url);
      const data = await response.json();
      setLivros(data.docs || []);
    }

    if (busca) ChamarApi();
  }, 500);

  return () => clearTimeout(delay);
}, [busca]);

  return (
    <>
    
      <Nav setBusca={setBusca} />

<ConteinerBook>
  {livros.map((livro, index) => (
    <CardBook
      key={index}
      titulo={livro.title}
      author={livro.author_name?.[0]}
      ano={livro.first_publish_year}
      nota={"⭐"}
      imagem={
        livro.cover_i
          ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-L.jpg`
          : null
      }
    />
  ))}
</ConteinerBook>
    </>
  );
}

export default Home;