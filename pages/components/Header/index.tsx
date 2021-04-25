import styles from './styles.module.scss';

export function Header () {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Logo"/>

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
    </header>
  )
}
