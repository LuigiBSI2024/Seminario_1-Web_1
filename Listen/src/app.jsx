import { useState, useEffect } from 'react';

export function BlogLocal() {
  const [texto, setTexto] = useState('');
  const [posts, setPosts] = useState([]);

  function publicarPost() {
    if (!texto.trim()) return; // evita postar vazio

    const novoPost = {
      id: Date.now(),
      conteudo: texto,
    };

    const novosPosts = [novoPost, ...posts];
    setPosts(novosPosts);  // atualiza o estado
    setTexto('');          // limpa textarea

    return novosPosts;     // retorna a nova lista
  }

  function salvarPosts() {
    const idioma_navegador = navigator.language || navigator.userLanguage;

    const posts_atualizados = publicarPost();

    // Gera um objeto com todos os dados relevantes
    const posts_salvos = {
      idioma: idioma_navegador,
      mensagens: posts_atualizados.map((post) => ({
        id: post.id,
        conteudo: post.conteudo
      }))
    };

    // Para simular o salvamento, usaremos localStorage com nome personalizado
    localStorage.setItem('post_salvo_blob', JSON.stringify(posts_salvos));
  }

  // Carrega posts salvos ao iniciar
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("meusPosts");
    if (dadosSalvos) {
      setPosts(JSON.parse(dadosSalvos));
    }
  }, []);

  // Atualiza localStorage quando posts mudam
  useEffect(() => {
    localStorage.setItem('meusPosts', JSON.stringify(posts));
  }, [posts]);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '1rem' }}>
      <h2>Mini Blog Local</h2>

      <textarea
        rows={5}
        style={{ width: '100%' }}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escreva algo..."
      />

      <button onClick={publicarPost} style={{ marginTop: '10px' }}>
        Publicar
      </button>

      <button onClick={salvarPosts} style={{ marginTop: '10px', marginLeft: '10px' }}>
        Salvar JSON
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
