import style from "../Components/Button.module.scss"

function Button({ title, action }) {
    return ( 
        <button className={style.button} onClick={action}>{title}</button>
     );
}

export default Button;