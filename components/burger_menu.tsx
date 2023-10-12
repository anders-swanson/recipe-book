import Link from "next/link";
import styles from "./burger_menu.module.css";

export default function BurgerMenu() {
  return (
    <>
      <div>
        <input id="toggle" className={styles.menu__toggle} type="checkbox" />
        <label className={styles.menu__btn} htmlFor="toggle">
          <span></span>
        </label>

        <ul className={styles.menu__box}>
          <li>
            <Link href="/" className={styles.menu__item}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/archive" className={styles.menu__item}>
              All Posts
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
