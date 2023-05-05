import style from "../Components/CamerasContainer.module.scss"
import { Link } from "react-router-dom";

function CamerasContainer({ camera }) {
    return (
        <article className={style.camerasContainer}>
            <Link to={`/camerainfo/${camera.id}`}>
                <img className={style.camerasContainer__img} src={camera.img} alt="Cameras" />
                <h2 className={style.camerasContainer__name}>{camera.brand} {camera.model}</h2>
            </Link>
        </article>
    );
}

export default CamerasContainer;