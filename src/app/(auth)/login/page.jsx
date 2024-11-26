import LoginForm from "@/components/loginForm/LoginForm"
import { handleGithubLogin } from "@/lib/action"
// import { auth, signIn } from "@/lib/auth"
import styles from "./login.module.css"


const Login = async () => {

    // const session = await auth()
    // console.log(session)
    
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <LoginForm />
                <h4 className={styles.or}>OR</h4>
                <form action={handleGithubLogin}>
                    <button className={styles.github}>Login with Github</button>
                </form>
            </div>
        </div>
    )
}

export default Login
