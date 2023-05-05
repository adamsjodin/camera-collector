import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../Components/Navbar.module.scss";


function Navbar() {

    const navigate = useNavigate()
    const [openOverlay, setOpenOverlay] = useState(false)

    function toggleOverLay() {
        setOpenOverlay(!openOverlay)
    }

    useEffect(() => {
        if (openOverlay) {
            document.body.classList.add(style.activePopup);
        } else {
            document.body.classList.remove(style.activePopup);
        }
    }, [openOverlay]);  

    function navigateToMyCameras() {
        navigate("/mycameras")
    }

        return (
        <>
            <header className={style.navbar}>
                <img onClick={toggleOverLay} src="/public/menu.svg" alt="Menu" />
                <h3>CAMERA COLLECTOR</h3>
                <img onClick={navigateToMyCameras} src="/public/coolicon.svg" alt="My Inventory" />
            </header>

            {
                openOverlay && (
                    <div className={style.popup}>
                        <div className={style.popup__content}>
                            <Link to='/'><p>All cameras</p></Link> 
                            <Link to='/addcameras'><p>Add camera</p></Link>
                            <Link to='/mycameras'><p>My cameras</p></Link>
                            <br />
                            <p>About</p>
                            <p>Log out</p>
                            {/* <section className={style.popup__flexBtn}>
                                <button className={style.popup__closebtn} onClick={toggleOverLay}>X</button>
                            </section> */}
                        </div>
                    </div>
                )
            }

        </>
    );
}

export default Navbar;