
import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import Item from './componentes/Item'
import PiePagina from './componentes/PiePagina'
import './App.css'
function App() {
  const tareaEjemplo = {
        id : 1,
        texto : "Estudiar React",
        completada: false
      }
  return (
    <div className="app">
      <Encabezado
      titulo= "mis tareas"
      subtitulo= "organiza lo que tienes qu hacer hoy" />
      <Formulario />
      <Lista />
      
      <Item tarea={tareaEjemplo}/>
      <PiePagina />
    </div>
  )
}

export default App 

