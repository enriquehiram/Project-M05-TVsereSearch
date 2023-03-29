import { NavLink } from 'react-router-dom'

const Navbar = () => {
  // Espacio para funciones
  return (
    <div className='App'>
      <header className='p-3 text-bg-dark'>
        <div className='container'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
              <li><NavLink className='nav-link px-2 text-secondary' to='/'>TV serie Searcher</NavLink></li>
              <li><NavLink className='nav-link px-2 text-white' to='/About'>Acerca de</NavLink></li> {/* importante agregar "to"  */}
            </ul>

            <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3' role='search'>
              <input type='search' className='form-control form-control-dark text-bg-dark' placeholder='¿que serie buscas?' aria-label='Search' />
            </form>

            <div className='text-end'>
              <button type='button' className='btn btn-outline-light me-2'>buscar</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
