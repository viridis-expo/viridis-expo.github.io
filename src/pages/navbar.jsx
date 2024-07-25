import '../styles/navbar.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import '../imgs/menu-icon-png-1.jpg'
function links(){

}
export default function NavBar(){
const [isHidden, setIsHidden]= useState(true);
function handleClick(){
    setIsHidden(!isHidden);
}

return (
    <>
        <img id='hidebtn' onClick={handleClick} src={require('../imgs/menu-icon-png-1.jpg')} style={{
            transition: 'transform 0.7s',
            transform: isHidden ? 'rotate(360deg)' : 'rotate(0deg)'

        }} />
        <div className='navbar' style={{
            transition: 'transform 0.8s',
            transform: isHidden ? 'translateX(-500%)' : 'translateX(0%)'
        }}>
            <div id = 'empty'></div>
            <Link to='/' className = 'navlink'>Home</Link>
            {/* <a href ='https:///about' className = 'navlink'>About</Link> */}
            <Link to='/find-local' className = 'navlink'>Find Events</Link>
            <Link to='/contact' className = 'navlink' id = 'contact'>Contact</Link>
        </div>
    </>
);
}