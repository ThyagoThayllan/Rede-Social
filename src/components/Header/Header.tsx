import styles from './Header.module.css'
import igniteLogo from '../../imgs/igniteLogo.svg'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="" />
        </header>
    )
} 
