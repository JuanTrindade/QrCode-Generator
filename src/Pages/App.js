import './style.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import { useState } from 'react';
import Navbar from '../Components/Navbar/nav';
import Footerbar from '../Components/Footer/footer';

const App = () => {
  const [qrValue, setQrValue] = useState('');
  const [link, setLink] = useState('');

  const generateLink = (link_url) => {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      height: 400
    }, function(err, url){
      setLink(url);
    })
  }

  const ValueQrcode = (e) => {
    setQrValue(e.target.value);
    generateLink(e.target.value);
  }

  return (
    <div className='container'>
      <Navbar />

      <div className='qrContainer'>
        <QRCode value={qrValue}/>

        <input 
          className='input' 
          placeholder='Digite o Link...' 
          value={qrValue}
          onChange={(e) => ValueQrcode(e)}
        />
        <a 
          className='link' 
          download={`qrcode.png`} 
          href={link}>Baixar QR CODE
        </a>
      </div>

      <Footerbar />
    </div>
  );
}

export default App;