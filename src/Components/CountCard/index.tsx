import styles from './styles.module.scss';

export function CountCard () {
  return (
    <section className={styles.countCard}>
    <div className={styles.ccBackground}></div>
    <div className={styles.countCardDiv}>
      <div>
        <img src="" alt=""/>
        <h2>20+</h2>
        <h4>Anos de excelência</h4>
      </div>
      <div>
        <img src="" alt=""/>
        <h2>12+</h2>
        <h4>Anos de experiência corporativa</h4>
      </div>
      <div>
        <img src="" alt=""/>
        <h2>50+</h2>
        <h4>Clientes satisfeitos</h4>
      </div>
      <div>
        <img src="" alt=""/>
        <h2>500+</h2>
        <h4>Serviços concluidos</h4>
      </div>
    </div>
  </section>
)
}
