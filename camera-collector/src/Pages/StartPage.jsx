import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import CamerasContainer from "../Components/CamerasContainer";
import Navbar from "../Components/Navbar";
import style from "../Pages/StartPage.module.scss";


function StartPage() {
    const navigate = useNavigate()
    const cameras = useSelector((state) => state.cameras.allCameras)
    const [searchCamera, setSearchCamera] = useState(cameras);
    const [cameraNotFound, setCameraNotFound] = useState(false)


    function handleSearch(e) {
        let searchedCameras = cameras.filter((camera) =>
            camera.brand.toLowerCase().includes(e.toLowerCase()) ||
            camera.model.toLowerCase().includes(e.toLowerCase()));

        setSearchCamera(searchedCameras);

        if (searchedCameras.length > 0) {
            setCameraNotFound(false);
        } else {
            setCameraNotFound(true);
        }
    }

    function navigateToAddCameras(e) {
        e.preventDefault()
        navigate("/addcameras")
    }
    

    return (
        <>
            <Navbar />
            <main className={style.startPage}>
                <h2>ALL CAMERAS</h2>
                <form className={style.startPage__form}>
                    {
                        searchCamera &&
                        <>
                        <label htmlFor="search">SEARCH CAMERA:</label>
                        <input onChange={(e) => handleSearch(e.target.value)} className={style.startPage__input} type="text" id="search" />
                        </>
                    }
                    {cameraNotFound && (
                        <section className={style.startPage__noCamera}>
                            <h2>We couldn't find the camera you're looking for.</h2>
                            <p>Would you like to add it?</p>
                            <Button action={navigateToAddCameras} title="Add camera" />
                        </section>
                    )}
                </form>

                {
                    searchCamera &&
                    searchCamera.map((camera) => (
                        <CamerasContainer camera={camera} key={camera.id} />
                    ))
                }
            </main>
        </>
    );
}

export default StartPage;