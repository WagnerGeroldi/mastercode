import '../styles/header.scss';
import logoImgWhite from '../assets/images/logo-white.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    const [click, setClick] = useState(false);
    const controlarCliqueIconeToggle = () => setClick(!click);
    const fecharMenuMobile = () => setClick(false); //função esconder menu

    return (
        <header>
            <nav className='navbar'>
                <a href="/"><img src={logoImgWhite} alt="Logo" /></a>
                <div className="dicas-header">Dicas e informações sobre Programação | Front End</div>
                <div className='menu-icon' onClick={controlarCliqueIconeToggle}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                </div>
            </nav>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/'
                        className='nav-links'
                        onClick={fecharMenuMobile}>
                        Primeiros Passos
                    </Link>
                </li>
                <li>
                    <Link
                        to='/html'
                        className='nav-links'
                        onClick={fecharMenuMobile}
                    >
                        Conhecendo HTML
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/css'
                        className='nav-links'
                        onClick={fecharMenuMobile}
                    >
                        A castaca do CSS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/javascript'
                        className='nav-links'
                        onClick={fecharMenuMobile}
                    >
                        JavaScript
                    </Link>
                </li>
                <li>
                    <Link
                        to='/frameworks'
                        className='nav-links'
                        onClick={fecharMenuMobile}
                    >
                        FrameWorks
                    </Link>
                </li>
            </ul>
        </header>
    );
}
