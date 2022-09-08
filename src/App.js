import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className='container-fluid fondo_navbar'>
      <Header/>
      <hr/>
      <ItemListContainer/>
      <ItemCount stock={5} initial={1} onAdd={0}/>
    </div>
  );
}

export default App;
