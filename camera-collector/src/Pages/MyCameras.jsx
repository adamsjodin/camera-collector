import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removedFromMyCameras } from "../Redux/cameraSlice";
import { FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import style from "../Pages/MyCameras.module.scss";
import Button from "../Components/Button";

function MyCameras() {
    const dispatch = useDispatch()
    const myCameraCollection = useSelector((state) => state.cameras.myCameras);

    const [addSerial, setAddSerial] = useState()
    const [displaySerial, setDisplaySerial] = useState();
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const cameraRef = useRef()
    const navigate = useNavigate()

    function addSerialNumber(e) {
        e.preventDefault()
        setDisplaySerial(addSerial);
        cameraRef.current.value = "";
    }

    function handleRemoveCamera(camera) {
        dispatch(removedFromMyCameras(camera))
    }

    function addCamera() {
        navigate("/")
    }

    return (
        <>
            <Navbar />
            <h2>My camera collection</h2>
            
{                myCameraCollection.length === 0 ?
                    <section className={style.noCameras}>
                        <h2>You have no cameras in your collection.</h2>
                        <p>Would you like to add one?</p>
                        <Button title="Add camera" action={addCamera} />
                    </section> : 
            
                myCameraCollection &&
                myCameraCollection.map((camera, i) => (
                    <section key={i} className={style.myCameraCollection}>
                        <img className={style.myCameraCollection__img} src={camera.img} alt={camera.brand} />
                        <section className={style.myCameraCollection__heading}>
                            <h2 key={camera.id}>{camera.brand} {camera.model}</h2>
                            <section className={style.myCameraCollection__stars}>
                                {
                                    [...Array(5)].map((star, index) => {
                                        const currentRating = index + 1;
                                        return (
                                            <>
                                                <label>
                                                    <input
                                                        className={style.myCameraCollection__starInput}
                                                        type="radio"
                                                        name="rating"
                                                        value={currentRating}
                                                        onClick={() => setRating(currentRating)} />
                                                    <FaStar
                                                        className={style.myCameraCollection__star}
                                                        size={20}
                                                        color={currentRating <= (hover || rating) ? "#02836E" : "#e4e5e9"}
                                                        onMouseEnter={() => setHover(currentRating)}
                                                        onMouseLeave={() => setHover(null)}
                                                    />
                                                </label>
                                            </>
                                        )
                                    })
                                }
                            </section>
                        </section>
                        <h3>{displaySerial}</h3>
                        <p>{camera.desc}</p>
                        <form className={style.myCameraCollection__form}>
                            <label htmlFor="serial">SERIAL NUMBER:</label>
                            <input ref={cameraRef} onChange={(e) => setAddSerial(e.target.value)} type="text" name="serial" id="serial" />
                            <Button action={addSerialNumber} title="Add serial" />
                        </form>
                        <Button action={handleRemoveCamera} title="Remove from my camera collection" />
                    </section>
                ))
            }

        </>

    );
}

export default MyCameras;