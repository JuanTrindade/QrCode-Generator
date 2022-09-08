import './style.css';

const Footerbar = () => {
    return(
        <footer className='footerStyle'>
            <ul className='footerListStyle'>
                <li className='footerList'>
                    <a href='https://github.com'>Github</a>
                </li>
                <li className='footerList'>
                    <a href='https://linkedin.com.br'>Linkedin</a>
                </li>
                <li className='footerList'>
                    <a href='https://facebook.com.br'>Facebook</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footerbar;