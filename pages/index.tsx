import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <h1>Faça seu serviço com a E2 Engenharia!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus? Ullam incidunt nemo deleniti! Et vitae ratione nesciunt aliquid quis laboriosam perferendis nisi, hic iusto perspiciatis sunt dolores suscipit distinctio.</p>
      </div>

      <section className={styles.countCard}>
        <div className={styles.ccBackground}></div>
        <div className={styles.countCardDiv}>
          <div>
            <h2>40+</h2>
            <h4>Clientes satisfeitos</h4>
          </div>
          <div>
            <h2>40+</h2>
            <h4>Projetos concluidos</h4>
          </div>
          <div>
            <h2>40+</h2>
            <h4>Horas satisfeitos</h4>
          </div>
          <div>
            <h2>40+</h2>
            <h4>Clientes satisfeitos</h4>
          </div>
        </div>
      </section>
    </main>
  )
}
