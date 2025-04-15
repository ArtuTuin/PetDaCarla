import React, { useState } from 'react';
import '../styles/perfil.css';
import { useNavigate } from 'react-router-dom';


function Perfil() {
  const [abaAtiva, setAbaAtiva] = useState('dados');
  const navigate = useNavigate();
  
  const voltarParaHome = () => {
    navigate('/home');
  };
  
  return (
    <div>
      <header className="header">
      <img 
        src="src/assets/setaVoltar.png"
         alt="Voltar"
         className="back-arrow"
        onClick={voltarParaHome}
/>

        <h1 className="titulo">PET DA CARLA</h1>
      </header>

      <main className="container">
        <section className="sidebar">
          <button
            className={`menu-button ${abaAtiva === 'dados' ? 'ativo' : ''}`}
            onClick={() => setAbaAtiva('dados')}
          >
            Seus Dados
          </button>
          <button
            className={`menu-button ${abaAtiva === 'pets' ? 'ativo' : ''}`}
            onClick={() => setAbaAtiva('pets')}
          >
            Pets
          </button>
        </section>

        <section className="form-section">
          {abaAtiva === 'dados' ? (
            <>
              <div className="alerta">
                <span className="icone">❗</span> Termine o cadastro
              </div>

              <form className="formulario">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" placeholder="Nome da Silva" />

                <label htmlFor="login">Login:</label>
                <input type="email" id="login" placeholder="usuario@exemplo.com" />

                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" placeholder="********" />

                <label htmlFor="cep">CEP:</label>
                <input type="text" id="cep" placeholder="00000-000" />

                <label htmlFor="telefone">Telefone:</label>
                <input type="text" id="telefone" placeholder="(11) 91111-1111" />
              </form>
            </>
          ) : (
            <>
              <h2 className="titulo-secundario">Seus Pets</h2>

              <div className="cartao-pet">
                <p><strong>Nome pet tal</strong></p>
                <p>3 anos</p>
                <p>Raça</p>
                <p>Alergias</p>
                <p>Cachorro</p>
                <p>Peso</p>
              </div>

              <form className="formulario formulario-pet">
                <div className="dupla">
                  <div>
                    <label>Nome:</label>
                    <input type="text" placeholder="Nome da Silva" />
                  </div>
                  <div>
                    <label>Espécie:</label>
                    <input type="text" placeholder="Selecionar" />
                  </div>
                </div>

                <div className="dupla">
                  <div>
                    <label>Raça:</label>
                    <input type="text" placeholder="Raça da Silva" />
                  </div>
                  <div>
                    <label>Alergias:</label>
                    <input type="text" placeholder="Perfumes... etc" />
                  </div>
                </div>

                <div className="dupla">
                  <div>
                    <label>Idade:</label>
                    <input type="text" placeholder="Selecionar" />
                  </div>
                  <div>
                    <label>Peso:</label>
                    <input type="text" placeholder="Selecionar" />
                  </div>
                </div>
              </form>
            </>
          )}

          <div className="avatar">
            <img
              src="https://www.svgrepo.com/show/382106/profile-avatar.svg"
              alt="Avatar"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Perfil;
