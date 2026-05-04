
import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import Item from './componentes/Item'
import PiePagina from './componentes/PiePagina'
import './App.css'
function App() {
  const peliculas = [
    {id: 1, titulo: "Encanto", estrellas: 5, visto: true },
    {id: 2, titulo: "Coco", estrellas : 4, visto: true },
    {id: 3, titulo: "Soul", estrellas: 5, visto: false }
  ]
  const tareas = [
    {id: 1, texto: "Esudiar React", completada: false },
    {id: 2, texto: "Hacer Ejercicio", completada: true },
    {id: 3, texto: "leer 10 paginas", completada: false }
  ]
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
      <Lista tareas={peliculas} />
      
      
      <Item tarea={tareaEjemplo}/>
      <PiePagina />
    </div>
  )
}

export default App 

