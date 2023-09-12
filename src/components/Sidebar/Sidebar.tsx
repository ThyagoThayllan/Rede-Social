import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""
            />

            <div className={styles.profile}>
                <Avatar avatar="https://github.com/diego3g.png" />
                <strong>Thyago Thayllan</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
