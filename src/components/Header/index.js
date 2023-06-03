import Popup from 'react-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from "react-icons/ai" 
import {BsInfoCircleFill} from "react-icons/bs" 
import "./index.css" 

const Header = () => (
    <div>
        <div>
            <Link to="/" >
                <img src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png" alt="website logo" className="logo-website" />
                <Popup modal trigger={<button className="ham-icon-button" type="button" data-testid="hamburgerIconButton"> <GiHamburgerMenu size=30 /> </button>} className="popup-content" >
                {close => (<div className="modal-container")> 
                <button className="close-btn" type="button" data-testid="closeButton" onClick={() => close()}}> <IoMdClose size="30" color="#616e7c" /> </button>
                <ul className="nav-link-list">
                    <li className="nav-link-item">
                    <Link to="/" onClick={() => close()}>
                        <BsInfoCircleFill size="32" />
                        <p className="nav-link-content"> About </p>
                    </Link>
                    </li>
                </ul>
                </div>
                )}
                </Popup>
            </Link>
        </div>
    </div>
)

export default withRouter(Header)