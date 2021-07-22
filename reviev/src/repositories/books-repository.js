

class BooksRepository {
     url = 'http://localhost:3000/books/';

     get(id) {
        console.log(this.url + id ?? '');
        return fetch(this.url + (id ?? ''), {
            method: 'GET',
        })
        .then((response) => {
            return response.json() 
        })
     } 
     add(book) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        })
     } 
     update(book){
         return fetch (this.url +(book.id ?? ''),{
             method: 'PUT',
             body: JSON.stringify(book),
             headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
         })
         
     }
     delete(id){
        return fetch (this.url +(id ?? ''),{
            method: 'DELETE',
        })
     }
}
let booksRepository = new BooksRepository();
export default booksRepository;

