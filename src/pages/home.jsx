import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Seja Bem vindo!</h1>
        <img src="src/assets/cachorropata.png" />
        <br />
        <button>CONHEÇA NOSSOS SERVIÇOS</button>
      </section>

      <section className="about">
        <h2>Serviços de qualidade e excelência sempre.</h2>
        <p className="highlight">Quem não gosta, bem: é questão de tempo.</p>
      </section>

      <section className="products">
        <h2 className="products-title">🐾 Produtos</h2>
        <div className="product-list">
          <div className="product-item"></div>
          <div className="product-item"></div>
          <div className="product-item"></div>
        </div>
        <button>CONHEÇA MAIS PRODUTOS</button>
      </section>

      <section className="location">
        <p className="qr-text">Aponte o celular para o QR code abaixo para ser direcionado para o endereço no Google Maps</p>
        <div className="qr-code">[QR CODE]</div>
      </section>
    </div>
  );
}

export default Home;