import './App.css'
import Card from './componentes/Card'
import cajitas from './data/cajitas'

function App() {
  const cajitasLista = cajitas.map((v) => {
    return <Card titulo={v.titulo} descripcion={v.descripcion} />;
  });
  return (
    <div className='App'>
      <h1>La Tiendita del Recuerdo</h1>
      <div className='container'>
        {cajitasLista}
      </div>
    </div>
  )
}

export default App
