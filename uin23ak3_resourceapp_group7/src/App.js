import logo from './logo.svg';
import './App.css';
import './css/main.css'

function App() {
  return (
    <div class="container">
        <header id="header">
            <a href="index.html" id="title">
                <h1>RESSURSARKIV</h1>
            </a>
        </header>
        <nav>
            <a class="navBox" id="CSS" onClick="renderCategory(event.target.id)">CSS</a>
            <a class="navBox" className="navObject" id="HTML" onClick="renderCategory(event.target.id)">HTML</a>
            <a class="navBox" className="navObject" id="JavaScript" onClick="renderCategory(event.target.id)">javascript</a>
            <a class="navBox" className="navObject" id="React" onClick="renderCategory(event.target.id)">React</a>
            <a class="navBox" id="Sanity and headless CMS" onClick="renderCategory(event.target.id)">Sanity and Headless CMS</a>
        </nav>
        <main>
            <section>
                <article id="Info">

                </article>
            </section>
        </main>
    </div>

  );
}

export default App;
