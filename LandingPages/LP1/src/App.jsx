import './App.css'

function App() {

  return (
    <div className="App">
        <header>
          <h2 className='titleHold'>My Landing Page</h2>
          <nav className='navBar'>
            <ul  className='navBarHold'>
              <li className='navbarItem'><a className='noUnder-' href="#">Link 1</a></li>
              <li className='navbarItem'><a className='noUnder-' href="#">Link 2</a></li>
              <li className='navbarItem'><a className='noUnder-' href="#">Link 3</a></li>
              <li className='navbarItem'><a className='noUnder-' href="#">Link 4</a></li>
            </ul>
          </nav>
        </header>
        <section>
          <article className='productInventoryHold'>
            <div className='productHold'>
              <h2 className='productTitle'>Product</h2>
              <div className='productImage'>Image</div>
              <p className='productDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto dolorem ea nisi facere perspiciatis pariatur incidunt cupiditate suscipit saepe.</p>
              <div className='productFooter'>
                <h6 className="productPrice">$10.00</h6>
                <a href="#" className='productBuyButton'>Buy Now →</a>
              </div>
            </div>
            <div className='productHold'>
              <h2 className='productTitle'>Product</h2>
              <div className='productImage'>Image</div>
              <p className='productDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto dolorem ea nisi facere perspiciatis pariatur incidunt cupiditate suscipit saepe.</p>
              <div className='productFooter'>
                <h6 className="productPrice">$10.00</h6>
                <a href="#" className='productBuyButton'>Buy Now →</a>
              </div>
            </div>
            <div className='productHold'>
              <h2 className='productTitle'>Product</h2>
              <div className='productImage'>Image</div>
              <p className='productDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto dolorem ea nisi facere perspiciatis pariatur incidunt cupiditate suscipit saepe.</p>
              <div className='productFooter'>
                <h6 className="productPrice">$10.00</h6>
                <a href="#" className='productBuyButton'>Buy Now →</a>
              </div>
            </div>
            <div className='productHold'>
              <h2 className='productTitle'>Product</h2>
              <div className='productImage'>Image</div>
              <p className='productDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto dolorem ea nisi facere perspiciatis pariatur incidunt cupiditate suscipit saepe.</p>
              <div className='productFooter'>
                <h6 className="productPrice">$10.00</h6>
                <a href="#" className='productBuyButton'>Buy Now →</a>
              </div>
            </div>
            <div className='productHold'>
              <h2 className='productTitle'>Product</h2>
              <div className='productImage'>Image</div>
              <p className='productDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto dolorem ea nisi facere perspiciatis pariatur incidunt cupiditate suscipit saepe.</p>
              <div className='productFooter'>
                <h6 className="productPrice">$10.00</h6>
                <a href="#" className='productBuyButton'>Buy Now →</a>
              </div>
            </div>
          </article>
        </section>
        <footer className='footerCredits'>
          <h6>Created by <a className='noUnder-' href="#">GeneticalSky</a></h6>
        </footer>
    </div>
  )
}

export default App
