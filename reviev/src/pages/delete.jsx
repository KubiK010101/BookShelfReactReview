import { useParams } from "react-router";
import { AppForm } from "../components/app-form";
import booksRepository from "../repositories/books-repository";

import { useHistory } from "react-router-dom";



export default function DeleteBook(){
    const history = useHistory();
    let { id } = useParams();
    console.log(`ID: ${id}`);
    let onButtonDelete = (book)=>{
        console.log(book)
        booksRepository.delete(book.id).then(() => {

            history.push("/");
        })
    }
    return(
        <>
        <AppForm type="delete" id={id} callback={onButtonDelete}>

        </AppForm>
    
        </>
    )
} 