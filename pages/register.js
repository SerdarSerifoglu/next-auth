import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import Layout from "../layout/layoutAuthentication";
import styles from "./register.module.css";
import { registerValidation } from "../lib/validate";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidation,
    onSubmit: onSubmitEvent,
  });

  async function onSubmitEvent(values) {
    console.log(values);
  }
  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <h1>Register</h1>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.row}>
          <div className={styles["form-item"]}>
            <label>Username:</label>
            <input
              type="username"
              name="username"
              placeholder="Username"
              {...formik.getFieldProps("username")}
            ></input>
            <div className={styles["form-item-error"]}>
              {formik.errors.username && formik.touched.username ? (
                <span>{formik.errors.username}</span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
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
          <div className={styles["form-item"]}>
            <label>Confirm password:</label>
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              {...formik.getFieldProps("cpassword")}
            ></input>
            <div className={styles["form-item-error"]}>
              {formik.errors.cpassword && formik.touched.cpassword ? (
                <span>{formik.errors.cpassword}</span>
              ) : (
                <></>
              )}
            </div>
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
