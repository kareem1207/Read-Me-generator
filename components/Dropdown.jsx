/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../css/Dropdown.module.css";

export const Dropdown = ({ items , setMainMode })=>{
        const [isOpen, setIsOpen] = useState(false);
        const [mode, setMode]=useState("Choose an option");
        let view = "block";
        const toggleDropdown = () => {
            setIsOpen(!isOpen);
            view = isOpen ? "block" : "none";
        };
        const handleItemClick = (item)=>{
            setMode(item);
            setMainMode(item);
            setIsOpen(!isOpen);
        }
        return (
            <div className={styles["dropdown"]}>
                <button onClick={toggleDropdown} className={styles["dropdown-button"]}>
                    {mode}
                </button>
                {isOpen && (  <ul className={styles["dropdown-menu"]} style={{display:view}}   >
                        {items.map((item, index) => (
                            <li key={index} className={styles["dropdown-item"]}>
                                <button onClick={()=>handleItemClick(item)}>{item}</button>
                            </li>
                        ))}
                    </ul>)}
            </div>
        );
    };