import Image from "next/image"
import styles from "./contact.module.css"

export const metadata = {
    title: "Contact",
    description: "Contact description",
};

const Contact = () => {
    return (
        <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src={"/contact.png"} alt="contact" fill className={styles.img}/>
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <input type="text" placeholder="Name and Surname"/>
                <input type="text" placeholder="Email Address"/>
                <input type="text" placeholder="Phone Number (Optional)"/>
                <textarea cols={30} name="" id="" placeholder="Message"></textarea>
                <button>Send</button>
            </form>
        </div>
        </div>
    )
}

export default Contact
