import '../../Pages/style.css'

const Title = (props) =>{
    return(
        <h3 className='TITLE spacement'>{props.children}</h3>
    );
}

export default Title;