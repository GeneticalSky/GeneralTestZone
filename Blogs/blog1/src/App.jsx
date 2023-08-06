import './App.css'

function App() {


  return (
    <div id="App">
      {/* Blog´s Header */}
      <header className='headerHolder'>
        <h1>My Blog 1.0</h1>
        <nav className='headerNavbarHolder'>
          <ul className='headerNavbarItemHolder'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
      </header>
      {/* Blog´s Content */}
        <section className='blogContentHolder'>
          <section className='blogSectionHolder'>
            <article className='nosocialdistancing'>
              <header>
                <hgroup className='articleHeaderHolder'>
                  <h2 className='nosocialdistancing'>First Article Title</h2>
                  <h5 className='citedContent'>Published in: Put time here</h5>
                </hgroup>
              </header>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ipsum, ullam, alias vitae culpa aut quibusdam quisquam, nostrum laboriosam pariatur maxime ea consequuntur a! Assumenda at asperiores consequuntur sit velit ipsam totam a ratione vitae. Expedita debitis fuga ut ea illum ratione numquam veritatis asperiores. Fugit magnam numquam error expedita adipisci cupiditate ad doloribus quod sed laborum! Iusto numquam a ex eligendi minima incidunt cum sed hic! Enim eveniet, fuga expedita ea quos natus obcaecati aliquam fugit, nostrum harum nesciunt facilis aut debitis eius perspiciatis quasi odio ab, esse molestiae ex commodi maiores consequatur. Eaque aspernatur commodi quae possimus unde earum esse sapiente laboriosam ipsa, deleniti id, vero nihil voluptatem aliquam, cum placeat in rerum! Dolorum laborum ipsum iure recusandae?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatem quis, facilis aut nesciunt quasi nihil doloremque reprehenderit, quod, dolore hic vel sint perspiciatis aspernatur ipsam fuga tempore natus quae ullam saepe officiis ab consequatur nostrum. Eaque perferendis quam reiciendis earum consectetur laborum voluptates beatae. Fuga, fugiat non. Repellat neque sint veritatis maxime soluta labore consequatur in, ut cupiditate illum alias consectetur, ea expedita debitis dignissimos dolore animi optio adipisci maiores reiciendis assumenda error iste amet? Dolor pariatur expedita vero.</p>
              <footer>
                <h4 className='citedContent'>Article published by: Put name here</h4>
              </footer>
            </article>
            <div>
              <h1 className='adHolder verticalAd'>Theres an Ad Here</h1>
            </div>
          </section>
          <section  className='adHolder horizontalAd'>
            <div className='nosocialdistancing'>
              <h1 className='nosocialdistancing'>Theres an Ad Here</h1>
            </div>
          </section>
          <section className='blogSectionHolder'>
            <div>
              <h1 className='adHolder verticalAd'>
                Theres an Ad Here
              </h1>
            </div>
            <article>
              <header>
                <hgroup>
                  <h2>Second Article Title</h2>
                  <h5>Published in: Put time here</h5>
                </hgroup>
              </header>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ipsum, ullam, alias vitae culpa aut quibusdam quisquam, nostrum laboriosam pariatur maxime ea consequuntur a! Assumenda at asperiores consequuntur sit velit ipsam totam a ratione vitae. Expedita debitis fuga ut ea illum ratione numquam veritatis asperiores. Fugit magnam numquam error expedita adipisci cupiditate ad doloribus quod sed laborum! Iusto numquam a ex eligendi minima incidunt cum sed hic! Enim eveniet, fuga expedita ea quos natus obcaecati aliquam fugit, nostrum harum nesciunt facilis aut debitis eius perspiciatis quasi odio ab, esse molestiae ex commodi maiores consequatur. Eaque aspernatur commodi quae possimus unde earum esse sapiente laboriosam ipsa, deleniti id, vero nihil voluptatem aliquam, cum placeat in rerum! Dolorum laborum ipsum iure recusandae?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatem quis, facilis aut nesciunt quasi nihil doloremque reprehenderit, quod, dolore hic vel sint perspiciatis aspernatur ipsam fuga tempore natus quae ullam saepe officiis ab consequatur nostrum. Eaque perferendis quam reiciendis earum consectetur laborum voluptates beatae. Fuga, fugiat non. Repellat neque sint veritatis maxime soluta labore consequatur in, ut cupiditate illum alias consectetur, ea expedita debitis dignissimos dolore animi optio adipisci maiores reiciendis assumenda error iste amet? Dolor pariatur expedita vero.</p>
              <footer>
                <h4>Article published by: Put name here</h4>
              </footer>
            </article>
          </section>
          <footer className='blogContentFooter'>
            <h5 className='citedContent'>Created by <a href="#">GeneticalSky</a></h5>
          </footer>
        </section>  
    </div>
  )
}

export default App
