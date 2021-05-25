import styles from './styles.module.scss';
import Burger from '@animated-burgers/burger-slide';
import '@animated-burgers/burger-slide/dist/styles.css';

import { useState } from 'react';

export function Header () {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

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

      <Burger className={styles.burgerMenu} isOpen={isBurgerOpen} onClick={() => setIsBurgerOpen(!isBurgerOpen)}/>
        <div className={!isBurgerOpen ? styles.menu : styles.menuOpen}>
          <div className={styles.bgMenu}></div>
          <ul className={styles.links}>
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

          <ul className={styles.socialMedia}>
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

        </div>
    </header>
  )
}
