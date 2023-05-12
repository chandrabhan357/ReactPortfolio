import './index.scss'
import LogoS from '../../assets/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
  } from '@fortawesome/free-solid-svg-icons'




const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            
            
        </Link>
        <nav>
            <NavLink exact="true" activeclasssname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />

            </NavLink>

            <NavLink exact="true" activeclasssname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />

            </NavLink>

            <NavLink exact="true" activeclasssname="active" className="contact-link"  to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />

            </NavLink>
        </nav>
        <ul>
            <li>
        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/chandrabhan-b40a39249/'>
        <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
            
        </a>
            </li>
            <li>
        <a target="_blank" rel='noreferrer' href='https://github.com/chandrabhan357'>
        <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
            
        </a>
            </li>
            <li>
        <a target="_blank" rel='noreferrer' href='https://twitter.com/Chandra80311745'>
        <FontAwesomeIcon
              icon={faTwitter}
              color="#4d4d4e"
              className="anchor-icon"
            />
            
        </a>
            </li>
        </ul>

    </div>
  )
}

export default Sidebar