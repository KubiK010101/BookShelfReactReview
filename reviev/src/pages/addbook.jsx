import { AppForm } from "../components/app-form";
import booksRepository from "../repositories/books-repository";

import { useHistory } from "react-router-dom";



export default function AddBook(){
    const history = useHistory();

    let onButtonAdd = (book)=>{
        console.log(book)
        booksRepository.add(book).then(() => {
            history.push("/");
        })

    }
    return(
        <>
        <AppForm type="add" callback={onButtonAdd} >

        </AppForm>
    
        </>
    )
} 