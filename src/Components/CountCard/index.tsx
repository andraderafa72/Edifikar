import styles from './styles.module.scss';

export function CountCard () {
  return (
    <section className={styles.countCard}>
    <div className={styles.ccBackground}></div>
    <div className={styles.countCardDiv}>
      <div>
        <img src="" alt=""/>
        <h2>40+</h2>
        <h4>Clientes satisfeitos</h4>
      </div>
      <div>
        <img src="" alt=""/>
        <h2>100+</h2>
        <h4>Projetos concluidos</h4>
      </div>
      <div>
        <img src="" alt=""/>
        <h2>2100+</h2>
        <h4>Horas de trabalho</h4>
      </div>
      <div>
        <img src="" alt=""/>
        <h2>12+</h2>
        <h4>Anos de excelência</h4>
      </div>
    </div>
  </section>
)
}
