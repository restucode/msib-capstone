import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";


function Navbar(props) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [navToggle, setNavToggle] = useState(false)

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const handleOnClick = (e) => {
    navigate(`/search/${search}`)
    setNavToggle(false)
  }

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">Newsian App</NavLink>

        <div  className={navToggle === true ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list">
              <li className="nav__item">
                  <NavLink key="Indonesia" to="/" className="nav__link">
                    <span>Indonesia</span>
                  </NavLink>
              </li>

              <li className="nav__item">
                  <NavLink key="Programming" to="/programming" className="nav__link">
                    <span>Programming</span>
                  </NavLink>
              </li>

              <li className="nav__item">
                  <NavLink key="COVID-19" to="/covid-19" className="nav__link">
                    <span>COVID-19</span>
                  </NavLink>
              </li>

              <li className="nav__item">
                  <NavLink key="SAVED" to="/saved" className="nav__link">
                    <span>SAVED</span>
                  </NavLink>
              </li>

            </ul> 

            <div className="nav__close"
            >
            <div className="nav-button-close" onClick={() => setNavToggle(false)}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>

            </div>
            </div>

            <div className="nav__search">
            <div className="nav-search-box">
                  <input type="text" className='nav-search' placeholder='What are you looking for?' 
                    onChange={handleInputChange}
                  />
                  <button className="search-btn"
                   onClick={handleOnClick}
                  >
                    <i><svg className="text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg></i>
                  </button>
                </div>
            </div>
        </div>

        <div className="nav__toggle">
          <div className="nav-button-open" onClick={() => setNavToggle(true)}>
          <svg className="w-10 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6H6m12 4H6m12 4H6m12 4H6"/>
          </svg>

          </div>
        </div>
      </nav>
  </header>
  );
}

export { Navbar };
