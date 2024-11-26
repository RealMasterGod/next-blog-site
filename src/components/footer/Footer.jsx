import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                @RealMasterGod
            </div>
            <div className={styles.text}>
                MasterGod creative agency © All rights reserved.
            </div>
        </div>
    )
}

export default Footer
