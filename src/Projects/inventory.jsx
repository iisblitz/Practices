import './styles.css'
import Functional from './Functional'

function InvManagement() {
  const array = 
  [
  {n:1, SKU:"401ARR" ,nombre:"Orden individual",cantidad:1000, uom:"pz",precio:120},
  {n:2,SKU:"411ARR" ,nombre:"Orden chica",cantidad:750, uom:"pz",precio:180},
  {n:3,SKU:"421ARR" ,nombre:"Orden básica",cantidad:500, uom:"pz",precio:250},
  {n:4,SKU:"431ARR" ,nombre:"Orden doble",cantidad:250, uom:"pz",precio:360},
  {n:5,SKU:"441ARR" ,nombre:"Orden familiar",cantidad:175, uom:"pz",precio:600},
  ]

  const handleClick = (index) => {
    const newArray = [...array];
    newArray[index].cantidad -= 1;
  };


  return (
  <Functional inventory={{array, handleClick}}/>
  );
}

export default InvManagement;