import React from 'react'

const Footer = () => {
  return (
    <footer className="text-muted">
      <div className="container">
        <div className="row">
          <div className="col-md-3 cols">
            <h4>Links rapidos</h4>
            <ul>
              <li><a href="/">Sobre nós </a></li>
              <li><a href="/">Area de entrega</a></li>
              <li><a href="/">blog</a></li>
              <li><a href="/">Minha conta</a></li>
              <li><a href="/">Contato</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Categorias</h4>
            <ul>
              <li><a href="/">Moda Masculina</a></li>
              <li><a href="/">Moda feminina</a></li>
              <li><a href="/">Infantil</a></li>
              <li><a href="/">Perfumaria</a></li>
              <li><a href="/">Calçados</a></li>
            </ul>
          </div>
          <div className="col-md-3 contact">
            <h4>Contatos</h4>
            <ul>
              <li><a href="/"><i className="fas fa-home"></i> 21 - 2222 - 2222</a></li>
              <li><a href="/"><i className="fas fa-mobile-alt"></i> 21 - 9999 - 12345</a></li>
              <li><a href="/"><i className="fas fa-envelope-open-text"></i> ecommerce@gggmail.com</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Mostre que você esteve aqui <i className="far fa-smile-beam"></i></h4>
            <form action="" method="POST">
              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Seu email" />
                <button type="submit">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer