import { useParams } from "react-router";
import { AppForm } from "../components/app-form";
import booksRepository from "../repositories/books-repository";


import { useHistory } from "react-router-dom";



export default function EditBook(){
    const history = useHistory();

    let { id } = useParams();
    console.log(`ID: ${id}`);
    let onButtonEdit = (book)=>{
        console.log(book)
        booksRepository.update(book).then(() => {

            history.push("/");
        })
    }
    return(
        <>
        <AppForm type="edit" id={id} callback={onButtonEdit}>

        </AppForm>
    
        </>
    )
} 