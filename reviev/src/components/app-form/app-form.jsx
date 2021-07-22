import { useEffect, useState } from "react";
import booksRepository from "../../repositories/books-repository";
import styles from './AppForm.module.scss';

function BottomButtons({ type, callback, book }) {
    switch (type) {
        case 'add':
            return (<>
                <div className="row justify-content-end">
                    <button className="col-sm-12 col-md-12 col-lg-3" onClick={() => callback(book)}>Submit</button>
                </div>
            </>)
        case 'delete':
            return (<>
                <div className="row justify-content-end">
                    <button className="col-sm-12 col-md-12 col-lg-3" onClick={() => callback(book)}>Delete</button>
                </div>
            </>)
        case 'edit':
            return (
                <>
                    <div className="row justify-content-end">
                        <button className="col-sm-12 col-md-12 col-lg-3" onClick={() => callback(book)}>Edit</button>
                    </div>
                </>
            )
        default:
            return null;
    }
}

export default function AppForm({ type, id, callback }) {
    const [book, updateBook] = useState({
        name: '',
        author: '',
        category: '',
        isbn: ''
    })
    useEffect(() => {
        if (id && !book.id) {
            booksRepository.get(id).then(data => {
                console.log(data);
                updateBook(data);
            })
        }
    })

    return (
        <>
            <form className={styles['form']} onSubmit={(e) => e.preventDefault()}>

                <div><input value={book.name} type="text" name="name" onChange={(e) => updateBook({
                    ...book,
                    name: e.target.value
                })} />
                </div>
                <div><input value={book.author} type="text" name="author" onChange={(e) => updateBook({
                    ...book,
                    author: e.target.value
                })} />
                </div>
                <div><input value={book.category} type="text" name="category" onChange={(e) => updateBook({
                    ...book,
                    category: e.target.value
                })} />

                </div>
                <div><input value={book.isbn} type="text" name="isbn" onChange={(e) => updateBook({
                    ...book,
                    isbn: e.target.value
                })} />
                </div>
                <BottomButtons type={type} callback={callback} book={book} />
            </form>
        </>
    )
}

