import styles from './styles.module.scss';

export function Professionals () {
  return (
    <section className={styles.professionals} id="professionals">
      <div className={styles.professional}>
        <div className={styles.circle}></div>
        <img src="/Person.png" alt=""/>
        <h3>Alessander  Mirapalheta</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur corrupti unde, porro expedita ipsum natus illum. Ex animi magni, veritatis blanditiis aliquam fuga. Ducimus quae rem culpa reprehenderit alias?</p>
      </div>

      <div className={styles.professional}>
        <div className={styles.circle}></div>
        <img src="/Person.png" alt=""/>
        <h3>Profissional</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et itaque veritatis id laudantium labore explicabo cupiditate praesentium, beatae nesciunt, tenetur, earum modi nobis ratione quam perferendis dolorem numquam sit culpa?</p>
      </div>
    </section>
  )
}
