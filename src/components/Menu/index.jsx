import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import styles from "./styles.module.css";

export default function Menu() {
    function handleNavigation(){
        window.location.href= "/";
    }
    return (
        <header className={styles.header}>
            <BsFillArrowLeftCircleFill size={40} color="#ffffff" className={styles.arrow} onClick={handleNavigation}/>
        </header>
    );
}