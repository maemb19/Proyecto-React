import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className='container-fluid fondo_navbar'>
      <Header/>
      <hr/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
