import { useState, useEffect } from 'react';

function Greeting() {
  return <h2>Hi there</h2>;
}

export default function App() {
  return <Greeting />;
}

export function BlogLocal() {
  const [texto, setTexto] = useState('');
  const [posts, setPosts] = useState([]);

  // Carrega posts do localStorage ao iniciar
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("post_users_Listen");
    if (dadosSalvos) {
      setPosts(JSON.parse(dadosSalvos));
    }
  }, []);

  // Atualiza o localStorage sempre que posts mudar
  useEffect(() => { //O useEffect só é acionado quando a versão passada de algo declarado é diferente do valor atual.
    localStorage.setItem('meusPosts', JSON.stringify(posts));
  }, [posts]);

  function publicarPost() {
    if (!texto.trim()) return; // evita postar vazio

    const novoPost = {
      id: Date.now(),
      conteudo: texto,
    };

    setPosts([novoPost, ...posts]);
    setTexto(''); // limpa textarea
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '1rem' }}>
      <h2>Mini Blog Local</h2>
      <textarea
        rows={5}
        style={{ width: '100%' }}
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)} //O e é só o nome da variável que representa o evento passado automaticamente pelo React (e pelo DOM, no caso de JS puro).
        placeholder="Escreva algo..."
      />
      <button onClick={publicarPost} style={{ marginTop: '10px' }}>
        Publicar
      </button>

      <hr />

      <h3>Posts:</h3>
      {posts.length === 0 && <p>Nenhum post ainda.</p>}
      {posts.map((post) => (
        <div key={post.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
          <p>{post.conteudo}</p>
        </div>
      ))}
    </div>
  );
}
