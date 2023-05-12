import './index.scss'
import LogoS from '../../../assets/images/Passport.png'


const logo = () => {

    return (
        <div className='logo-container'>
           <img className='solid-logo' src={LogoS} alt="C" />
        </div>
    )
}

export default logo