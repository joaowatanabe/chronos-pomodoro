import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault(); //não segue o link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    // document.documentElement.setAttribute('data-theme', theme) -> Efeito colateral, não deve ser feito, A não ser usando useEffect
  };

  // useEffect(() => {
  //   console.log('useEffect sem dependencia', Date.now());
  // }); // - Executado toda vez que o componente renderiza na tela.

  // useEffect(() => {
  //   console.log('useEffect com array depependencias vazio', Date.now());
  // }, []); // - Executa apenas quando o React monta o componente na tela pela primeira vez

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    // return () => {
    //   console.log('Este componente será atualizado');
    // }; // Clean UP
  }, [theme]); // - Executa apensa quando o valor da dependencia theme mudar

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a página inicial'
        title='Ir para a página inical'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para o histórico'
        title='Ir para o histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para as configurações'
        title='Ir para as configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar o tema'
        title='Mudar o tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
