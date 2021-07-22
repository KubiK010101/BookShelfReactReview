import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>

               
                    <div className="row">
                        <h1 className={styles['navbar__title']}>Books library</h1>
                    </div>
        
            </div>
        </>
    )
}