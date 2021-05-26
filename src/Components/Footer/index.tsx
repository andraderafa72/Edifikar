import styles from './styles.module.scss';

export function Footer () {
  return (
    <footer className={styles.footer}>
      <section className={styles.up}>
          <img src="" alt=""/>

          <ul>
            <li>
              <a href="#professionals">Sobre nós</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="">Nosso trabalho</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
      </section>

      <section className={styles.down}>
        <span>© 2021 Edifikar. All rights reserved</span>
        <ul>
          <li>
            <a href="https://wa.me/5584996220052">
              <img src="/whatsapp.svg" alt=""/>
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
