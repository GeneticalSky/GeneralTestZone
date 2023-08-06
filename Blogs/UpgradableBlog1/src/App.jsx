import "./App.css";

function App() {
  return (
    <div>
      {/* NavBar */}
      <nav className="navbar">
        <ul className="navbar-nav">
          {/* Logo */}
          <li className="logo">
            <a href="#" className="nav-link">
              <span class="link-text logo-text">Hello</span>
              {/* Icon */}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          {/* First Nav Item */}
          <li className="nav-item">
            <a href="#" className="nav-link">
              {/* Icon */}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="cat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-cat fa-w-16 fa-9x"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Cats</span>
            </a>
          </li>
          {/* Second Nav Item */}
          <li className="nav-item">
            <a href="#" className="nav-link">
              {/* Icon */}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="cat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-cat fa-w-16 fa-9x"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Cats</span>
            </a>
          </li>
          {/* Third Nav Item */}
          <li className="nav-item">
            <a href="#" className="nav-link">
              {/* Icon */}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="cat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-cat fa-w-16 fa-9x"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Cats</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Main Content */}

      <main>
        {/* Title */}
        <hgroup className="blogTitleHolder">
          <h1 className="blogTitle">My Blog</h1>
          <h3 className="blogSupportUs"><cite><a href="#" className="noUnderline">Liked our content? Please support us!</a></cite></h3>
        </hgroup>
        {/* Decorative Article */}

        <section>
          <article>
            <hgroup>
              <h1>My Article Name</h1>
              <h4>Published in: Time</h4>
            </hgroup>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              reprehenderit minus provident suscipit magni, pariatur eos illo
              libero et nobis molestias iure dicta inventore ipsam quis. Iure
              nemo at asperiores sed repellat, nulla tenetur velit nam
              accusamus, eius dolores assumenda. Ex, quasi sed architecto aut
              odio consectetur illum laborum officia dolores enim eum reiciendis
              nemo quidem magni libero voluptatem at quod aliquid itaque dolore
              quisquam!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              magnam eveniet at ea, voluptatem repellat molestiae omnis hic
              officiis ab quae veritatis quaerat architecto quos ipsa sunt
              debitis consequuntur quis explicabo eius repellendus possimus
              dolorem doloremque vero! Eos labore nam consequuntur voluptatem
              totam ipsum, in similique eveniet! Provident molestias perferendis
              impedit debitis eius vitae autem qui veniam. Debitis consequatur
              reiciendis voluptate harum. Ipsam cumque a atque similique modi
              quibusdam eos qui adipisci, quisquam hic explicabo ducimus dolore
              laudantium unde expedita culpa ab laboriosam iure nulla labore
              reiciendis dolores iusto. Excepturi eum amet perferendis eius
              unde, incidunt ut. Tempore aliquid aut perferendis libero unde ut
              quae eaque nemo dolorem ipsam, laborum molestias non illum? Sed
              ullam inventore ipsa qui. Recusandae eveniet velit expedita optio
              animi. Numquam, optio corporis, minima, officia error hic
              blanditiis molestias officiis impedit qui fugiat pariatur illo
              omnis a corrupti nisi inventore. Rem vitae nisi quae architecto
              corporis, numquam quaerat odio ducimus quia placeat porro voluptas
              saepe nulla rerum voluptatibus eaque aliquam commodi at illum
              dolorem. Eum assumenda eos obcaecati beatae fugiat ab similique
              voluptate amet ex neque rem porro cum laudantium inventore nam
              debitis modi, alias incidunt dolor vel odit officiis nesciunt!
              Quisquam harum natus in magnam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              voluptatibus adipisci saepe amet libero quas esse atque eligendi,
              eum error corporis vero, eius beatae dolores quia officiis alias
              aliquid quos debitis sunt earum? Porro, animi.
            </p>
            <footer>
              <h4>Published by: Name</h4>
            </footer>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
