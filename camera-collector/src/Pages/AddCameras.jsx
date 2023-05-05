import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCameraToAllCameras } from "../Redux/cameraSlice"
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import style from "../Pages/AddCameras.module.scss"

function AddCameras() {
    const [addBrand, setAddBrand] = useState();
    const [addModel, setAddModel] = useState();
    const [addDesc, setAddDesc] = useState();
    const [addImg, setAddImg] = useState();

    const dispatch = useDispatch()
    const brandRef = useRef()
    const modelRef = useRef()
    const descRef = useRef()
    const imgRef = useRef()

    const [newCameraId, setNewCameraId] = useState(0);

    const allCameras = useSelector(state => state.cameras.allCameras);

    useEffect(() => {
        setNewCameraId(allCameras.length + 1);
    }, [allCameras]);

    function handleAddCamera(e) {
        e.preventDefault()
        const newCamera = {
            id: newCameraId,
            brand: addBrand,
            model: addModel,
            desc: addDesc,
            img: addImg
        }
        dispatch(addCameraToAllCameras(newCamera))
        brandRef.current.value = "";
        modelRef.current.value = "";
        descRef.current.value = "";
        imgRef.current.value = "";
    }

    return (
        <article>
            <Navbar />
            <h2>ADD CAMERA</h2>
            <form className={style.addCameras__form}>
                <label htmlFor="brand">Brand</label>
                <input ref={brandRef} onChange={(e) => setAddBrand(e.target.value)} type="text" name="brand" id="brand" />
                <label htmlFor="model">Model</label>
                <input ref={modelRef} onChange={(e) => setAddModel(e.target.value)} type="text" name="model" id="model" />
                <label htmlFor="desc">Description</label>
                <input ref={descRef} onChange={(e) => setAddDesc(e.target.value)} type="text" name="desc" id="desc" />
                <label htmlFor="img">Image</label>
                <input ref={imgRef} onChange={(e) => setAddImg(e.target.value)} type="text" name="img" id="img" />
                <Button action={handleAddCamera} title="Add Camera" />
            </form>
        </article>
    );
}

export default AddCameras;