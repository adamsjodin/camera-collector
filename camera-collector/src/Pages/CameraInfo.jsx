import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToMyCameras } from "../Redux/cameraSlice";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar"
import style from "../Pages/CameraInfo.module.scss"

function CameraInfo() {
    const [singleCamera, setSingleCamera] = useState()
    const params = useParams();
    const dispatch = useDispatch()

    const state = useSelector((state) => {
        return state
    })

    useEffect(() => {
        const cameraInfo = state.cameras.allCameras.find((camera) => camera.id == params.id)
        setSingleCamera(cameraInfo)
    }, [state])

    function handleAddToMyCameras() {
        dispatch(addToMyCameras(singleCamera))
    }

    return (
        <main>
            <Navbar />
            <article className={style.cameraInfo}>
                {
                    singleCamera &&
                    <>
                        <img className={style.cameraInfo__img} src={singleCamera.img} alt={`${singleCamera.brand} ${singleCamera.model}`} />
                        <section className={style.cameraInfo__info}>
                            <h3>{singleCamera.brand} {singleCamera.model}</h3>
                            <p>{singleCamera.desc}</p>
                        </section>
                    </>

                }
            </article>
            <section className={style.cameraInfo__btn}>
                <Button action={handleAddToMyCameras} title="Add to My Cameras" />
            </section>
        </main>
    );
}

export default CameraInfo;