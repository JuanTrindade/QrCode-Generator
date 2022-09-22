import './style.css';
import profile from '../../Images/OIP.jpg';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ReactModal from 'react-modal'
import { useState } from 'react'
import Link from '../Links';
import Title from '../Title';

const Navbar = () => {
    const [open, isOpen] = useState(false);

    const OpenModal = () => {
        isOpen(true);
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
                        <Title>QRCODE-GEN</Title>
                        <Link link="HISTÓRICO DE QRCODE"/>
                        <Link link="PLANOS MENSAIS"/>
                        <Link link="SAIR"/>
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