import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/layoutAuthentication";
import styles from "./login.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import { loginValidation } from "../lib/validate";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidation,
    onSubmit: onSubmitEvent,
  });

  async function onSubmitEvent(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    if (status.ok) {
      router.push(status.url);
    }
  }
  const handleGoogleSignIn = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <h1>Login</h1>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.row}>
          <div className={styles["form-item"]}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
            ></input>
            <div className={styles["form-item-error"]}>
              {formik.errors.email && formik.touched.email ? (
                <span>{formik.errors.email}</span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles["form-item"]}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            ></input>
            <div className={styles["form-item-error"]}>
              {formik.errors.password && formik.touched.password ? (
                <span>{formik.errors.password}</span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <button type="submit">Login</button>
        </div>
        <div className={styles.row}>
          <button type="button" onClick={handleGoogleSignIn}>
            Sign in with Google
          </button>
        </div>
        <div className={styles.row}>
          <button type="button">Sign in with Github</button>
        </div>
        <div className={styles.row}>
          Don't have account yet? <Link href={"/register"}>Register</Link>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
