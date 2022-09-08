import './style.css';
import profile from '../../Images/OIP.jpg';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ReactModal from 'react-modal'
import { useState } from 'react'
import Link from '../Links/links';

const Navbar = () => {
    const [open, isOpen] = useState(false);

    const OpenModal = (think) => {
        isOpen(true);

        console.log(think);
    }

    const ModalClose = () => {
        isOpen(false);
    }

    return(
        <nav className="nav">
            <ul className="listStyle">
                <li>
                    <DehazeIcon className='modalOpenButton' onClick={OpenModal}/>      
                </li>
                <ReactModal
                    isOpen={open}
                    onRequestClose={ModalClose}
                    className='remove'
                >
                    <div className='modalStyle'>
                        <h3 className='TITLE spacement'>TITLE</h3>
                        <Link>LINK 1</Link>
                        <Link>LINK 2</Link>
                        <Link>LINK 3</Link>
                        <Link>LINK 4</Link>
                        <button onClick={ModalClose} className='button'>CLOSE SETTINGS</button>
                    </div>
                </ReactModal>
                <li>
                    <img src={profile} className='img'/>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
