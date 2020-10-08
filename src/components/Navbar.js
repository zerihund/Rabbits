import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

const Navbar=()=> {
    const [click,setClick]=useState(false)
    const [button,setButton]=useState(false)

    const handleClick=()=>setClick(!click)
    const closeMobileMenu=()=>setClick(false)

    const showButton =()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    window.addEventListener('resize',showButton)
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-log'>
                       Planteneer <i className="fab fa-pagelines"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                      <i className={click? 'fas fa-times':'fas fa-bars'}/>  
                    </div>
                    <ul className={click? 'nav-menu active':'nav-menu'}>
                        <li className='nav-item'>
                            <Link  to='/' className='navbar-links' onClick={closeMobileMenu}>
                            <i class="fas fa-home"></i> Home
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link  to='/MyGarden' className='navbar-links' onClick={closeMobileMenu}>
                            <i class="fab fa-canadian-maple-leaf"></i> My Grdens
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link  to='/MyPlants' className='navbar-links' onClick={closeMobileMenu}>
                            <i class="fas fa-seedling"></i> My Plants
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link  to='/Points' className='navbar-links' onClick={closeMobileMenu}>
                            <i class="fas fa-star"></i> Points
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link  to='/Stream' className='navbar-links' onClick={closeMobileMenu}>
                            <i class="far fa-file-video"></i> Stream
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link  to='/Diary' className='navbar-links' onClick={closeMobileMenu}>
                            <i class="fas fa-book-open"></i> Diary
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link  to='/Setting' className='navbar-links' onClick={closeMobileMenu}>
                            <i class="fas fa-cogs"></i> Setting
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link  to='/SignUp' className='navbar-links' onClick={closeMobileMenu}>
                            <i class="fas fa-sign-in-alt"></i> Sign Up
                            </Link>
                        </li>
                        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    
                    </ul>
                </div>
            </nav>  
        </>
    )
}

export default Navbar
