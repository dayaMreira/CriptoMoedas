import { Link } from 'react-router-dom'
import style from './header.module.css'

import logoimg from '../../assets/logo.svg'

export function Header(){
    return(
        <header className={style.container}>
           
           <div>
           <Link to='/'> 
                <img src={logoimg} alt="Logo Cripto" />
            </Link>
           </div>
        </header>
    )
}