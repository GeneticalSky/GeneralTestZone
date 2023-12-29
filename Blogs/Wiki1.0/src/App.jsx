import './App.css'

function App() {

  return (
    <div>
      {/* 
      Narbar
      Make lateral collapsible Navbar with icons
       */}
      <nav>
        <ul>
          <li>
            <div></div>
            <a href="#"></a>
          </li>
        </ul>
      </nav>
      {/*
      Title of the Wiki
      Just make a normal title
      */}
      <section>
        <h1></h1>
      </section>
      {/*
      Content Page
      Normal content, with title of the article and
      subtitles detailing Publisher and date of publish,
      content + some images if you like and the footer could
      be a bio of the author
       */}
      <section>
        <article>
          <hgroup>
            <h2></h2>
            <h5></h5>
            <h5></h5>
          </hgroup>
          <p></p>
          <footer></footer>
        </article>
      </section>
      {/* 
      Table of content
      Just a table of content although i need to investigate how
      it can jump in certain parts of the text, probably with
      Javascript but let me investigate */}
      <section>
        <hgroup>
          <h6></h6>
        </hgroup>
      </section>
    </div>
  )
}

export default App
