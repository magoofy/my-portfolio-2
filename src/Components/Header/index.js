import { Link } from 'react-router-dom';

function Header() {
  return (
    <main>
      <div class="container">
        <header class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <Link to="/"><li class="nav-item"><a className="nav-link" aria-current="page">About</a></li></Link>
            <Link to="/projects"><li class="nav-item"><a className="nav-link">Projects</a></li></Link>
            <Link to="/contact"><li class="nav-item"><a className="nav-link">Contact</a></li></Link>
            <Link to="/resume"><li class="nav-item"><a className="nav-link">Resume</a></li></Link>
          </ul>
        </header>
      </div>

      <section className='hero'></section>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Afi Akau</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">My Portfolio</p>
        </div>
      </div>
    </main>
  )
}

export default Header;