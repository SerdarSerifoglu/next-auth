import styles from "./layoutAuthentication.module.css";

const Layout = ({ children }) => {
  return (
    <main className={`${styles.main} ${styles.row}`}>
      <div className={`${styles.container} ${styles.row}`}>
        <div>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
