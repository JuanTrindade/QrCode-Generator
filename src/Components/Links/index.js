import '../../Pages/style.css'

const Link = ( props ) =>{
    return (
        <a className='textDecor white spacement border'>{props.link}</a>
    );
}

export default Link