import styles from "../styles/Main.module.css";

export default function Main() {
  const dashboardDetails = [
    ["lorem", 20],
    ["lorem", 20],
    ["lorem", 20],
    ["lorem", 20],
  ];

  return (
    <div class={styles.MainContainer}>
      <div>
        <div class={styles.MainHeadingContainer}>
          <h2>Dashboard</h2>
        </div>
        <div class={styles.MainDetailsContainer}>
          <For each={dashboardDetails}>
            {(data) => (
              <div class={styles.InnerDetailsContainer}>
                <div>{data[0]}</div>
                <div>:</div>
                <div>{data[1]}</div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
