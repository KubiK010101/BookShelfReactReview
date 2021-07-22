import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Layout from './templates/layout';
import Counter from './components/counter';
import { AppForm } from './components/app-form';
import Navbar from './components/navbar';
import AddBook from './pages/addbook';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditBook from './pages/editbook';
import DeleteBook from './pages/delete';


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Counter />
            </Route>
            <Route exact path="/add">
              <AddBook />
            </Route>
            <Route exact path="/edit/:id">
              <EditBook />
            </Route>
            <Route exact path="/delete/:id">
              <DeleteBook />
            </Route>
            <Route path="/">
              <h1>Error 404. Not found</h1>
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );

}
export default App;
