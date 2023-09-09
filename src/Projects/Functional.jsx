import { useEffect, useState } from "react"

const Functional = ({inventory, handleClick}) => {
    const inv = inventory.array
    const [existencia, setExistencia] = useState(inv)

    const handleItemClick = (index) => {
        const newArray = [...existencia]; // Create a copy of the state array
        newArray[index].cantidad -= 1; // Reduce the quantity of the selected item
        setExistencia(newArray); // Update the state with the new array
      };


    console.log(inv)
    return ( 
        <div>
            <h1>Inventario</h1>
            <p>SKU - Nombre - Precio - Inventario - Unidad de medida</p>
            <ul>
            {existencia.map((e, index) => {return <li key={e.n}>{e.SKU} - {e.nombre} - {e.precio} - {e.cantidad} - {e.uom} <button onClick={() => handleItemClick(index)}>Consumir</button></li>})}
            </ul>
        </div>
     );
}
 
export default Functional;