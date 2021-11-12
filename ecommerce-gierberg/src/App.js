import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <>
      <NavBar titulo="DW Cursos" />
      <ItemListContainer greeting="Listado de cursos disponibles"/>
    </>
  );
}

export default App;
