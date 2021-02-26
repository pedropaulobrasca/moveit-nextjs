import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.container}>
      <img src="https://github.com/pedropaulobrasca.png" alt="Pedro Paulo" />
      <div>
        <strong>Pedro Paulo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
