import {useEffect} from 'react';
import Navbar from '../components/navbar/navbar';
import styles from './Layout.module.scss';


export default function Layout({children}) {
   

    return (
        <>
        <div   className={styles['bg']}>
        <div className="container-fluid">
                <Navbar>
                 </Navbar>
                {children}
            </div>
        </div>
            
        </>
    )
}