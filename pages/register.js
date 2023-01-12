import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/layoutAuthentication";
import styles from "./register.module.css";

const Register = () => {
  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <h1>Register</h1>
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
          <button type="submit">Register</button>
        </div>
        <div className={styles.row}>
          Do you have account? <Link href={"/login"}>Login Here</Link>
        </div>
      </form>
    </Layout>
  );
};

export default Register;
