import styles from './styles.module.scss';

export function Footer () {
  return (
    <footer className={styles.footer}>
      <section className={styles.up}>
          <img src="" alt=""/>

          <ul>
            <li>
              <a href="">Sobre nós</a>
            </li>
            <li>
              <a href="">Serviços</a>
            </li>
            <li>
              <a href="">Nosso trabalho</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
      </section>

      <section className={styles.down}>
        <span>© 2021 E2 Engenharia. All rights reserved</span>
        <ul>
          <li>
            <a href="">
              <img src="" alt=""/>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt=""/>
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt=""/>
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}
