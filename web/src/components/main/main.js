import React from 'react'
import data from './../api'

const Main = () => {
  return (
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">
            <strong>
              <img src="./assets/directions-green.svg" alt="logo" />
              <i className="fas fa-euro-sign"></i>commerce
            </strong>
          </h1>
          <p className="lead">Fretes grátis para todo Brasil a partir de 99,00</p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
              {
                data.products.map( product => {
                  return (
                    <div key={product.id} className="col-md-4">
                      <div className="card mb-4 shadow-sm">
                        <img className="card-img-top" src={ product.img } alt="Card" />
                        <div className="card-body">
                          <p className="card-text">{ product.name }</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-success">
                                R${ product.price }
                                <i className="fas fa-plus-circle"></i>
                              </button>
                            </div>
                            <small className="text-muted">{ product.rating } ({ product.reviews })Reviews</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main