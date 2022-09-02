import './style.css';
import profile from '../Images/OIP.jpg';
import DehazeIcon from '@mui/icons-material/Dehaze';

function Navbar() {
    function tes(){
        alert('aaa')
    }

    return(
        <nav className="nav">
            <ul className="listStyle">
                <li>
                    <DehazeIcon className='button' onClick={tes}/>      
                </li>
                {/*<li>
                    <img src={profile} className='img'/>
                </li> */
                } 
            </ul>
        </nav>
    );
}

export default Navbar;