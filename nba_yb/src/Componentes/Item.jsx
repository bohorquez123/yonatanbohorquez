// Item.jsx — representa un solo elemento de la lista 
function Item({tarea}) {
    return (
        <article className="item">
            <h3>{tarea.texto}</h3>
            <p>Estado: {tarea.completada ? 'complateada' : 'pendiente'}</p>
        </article>
    )
}
export default Item