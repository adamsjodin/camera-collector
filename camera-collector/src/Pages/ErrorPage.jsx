import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import style from "../Pages/Errorpage.module.scss"

function ErrorPage() {
    const navigate = useNavigate()
    function goToStartPage() {
        navigate("/")
    }
    return (
        <article className={style.errorPage}>
            <h1>Sorry, the page you're looking for does not exist</h1>
            <Button title="Go to start page" action={goToStartPage} />
        </article>
    );
}

export default ErrorPage;