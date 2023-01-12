import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/layoutAuthentication";
import styles from "./login.module.css";

const Login = () => {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <h1>Login</h1>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles["form-item"]}>
            <label>Email:</label>
            <input type="email" name="email" placeholder="Email"></input>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles["form-item"]}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <div className={styles.row}>
          <button type="submit">Login</button>
        </div>
        <div className={styles.row}>
          <button type="submit">Sign in with Google</button>
        </div>
        <div className={styles.row}>
          <button type="submit">Sign in with Github</button>
        </div>
        <div className={styles.row}>
          Don't have account yet? <Link href={"/register"}>Register</Link>
        </div>
      </form>
    </Layout>
  );
};

export default Login;