import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import booksRepository from "../../repositories/books-repository";
import styles from './Counter.module.scss';

export default function Counter() {

    const [books, updateBooks] = useState(undefined);

    useEffect(() => {
        if (!books) {

            booksRepository.get().then(data => {
                console.log(data);
                updateBooks(data);
            })
        }
    })

    

    const [isModalOpened, updateModalOpened] = useState(false)
    return (
        <>
            <div className={styles.counter + ' ' + 'row'}>
                 {books?.map((x) =>
                
                <div className="col-sm-12 col-md-4 col-lg-2">
                    <div className={styles['counter__book-card']} key={x.id}>

                        <h3>{x.name}</h3>
                        <h4 className={styles['counter__book-card__info']}>{x.author}</h4>
                        <h4 className={styles['counter__book-card__info']}>{x.category}</h4>
                        <h4 className={styles['counter__book-card__info']}>{x.isbn}</h4>

                        <Link className={styles['counter__book-card__info'] + ' ' + styles['-edit']} to={"/edit/" + x.id}>Edit</Link>
                        <Link className={styles['counter__book-card__info'] + ' ' + styles['-delete']} to={"/delete/" + x.id}>Delete</Link>
                    </div>
                    </div>
                )}

               
                    

            </div>
            <Link to="/add" className={styles['counter__button-add']}>Add book
            </Link>
        
        </>
        );
    function addNewBook() {
        
        let name = prompt('enter book-title')
        let author = prompt('enter author')
        let category = prompt('enter category')
        let isbn = +prompt("enter isbn");
        booksRepository.add({
            name : name,
            author: author,
            category: category,
            isbn: isbn
        }) 
        .then(()=>{
            booksRepository.get().then(data => {
                updateBooks(data);
            })
        })
    
    }
    function updateBook(id){
        let name = prompt('enter book-title')
        let author = prompt('enter author')
        let category = prompt('enter category')
        let isbn = +prompt("enter isbn");
        booksRepository.update({
            name : name,
            author: author,
            category: category,
            isbn: isbn,
            id: id
        }) 
        .then(()=>{
            booksRepository.get().then(data => {
                updateBooks(data);
            })
        })
    }

    function deleteBook(id){
       booksRepository.delete(id)
       .then(()=>{
        booksRepository.get().then(data => {
            updateBooks(data);
        })
    })
    }
    // function getIsbn(){
    //     let isbn = +prompt("Enter isbn");
    //     console.log(isbn);
    //     if (isbn === Number.NaN)
    //         return getIsbn();
    //     return isbn
    // }
}