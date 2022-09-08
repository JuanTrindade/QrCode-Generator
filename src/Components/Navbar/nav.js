import './style.css';
import profile from '../../Images/OIP.jpg';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ReactModal from 'react-modal'
import { useState } from 'react'

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
                        <a className='textDecor white spacement border'>LINK 1</a>
                        <a className='textDecor white spacement border'>LINK 2</a>
                        <a className='textDecor white spacement border'>LINK 3</a>
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