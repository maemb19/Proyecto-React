import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='container-fluid fondo_navbar'>
      <Header/>
      <ItemListContainer gretting="hola"/>
    </div>
  );
}

export default App;
