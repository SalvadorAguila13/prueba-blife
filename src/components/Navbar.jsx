import { NavLink } from "react-router-dom"
import './styles/Navbar.css'
const dataNavbar = {
    pricing:'Pricing',
    feature: 'Feature',
    openSources:'Open sources',
    contact: 'contact'
}

const Navbar = () => {
  return (
    <header className="container">
        <article className="navbar__content">
            <section className="navbar__title">
                <h2>noon</h2>
            </section>
            <ul className="navbar__list">
                <NavLink className={({isActive}) => isActive ? 'active' : ''}>{dataNavbar.pricing}</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : ''}>{dataNavbar.feature}</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : ''}>{dataNavbar.openSources}</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : ''}>{dataNavbar.contact}</NavLink>
            </ul>
            <section className="navbar__btn">
                <button>Sign In</button>
            </section>
        </article>
    </header>
  )
}

export default Navbar