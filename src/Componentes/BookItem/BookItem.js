
import "./BookItem.css";
import DateRead from "../DateRead/DateRead";
import BookCard from "../BookCard/BookCard";
import { useState } from React;         //sólo puede ser llamada dentro del componente.

const BookItem = ({ author, title, dateRead, pageCount }) => {

  const [newTitle, setNewTitle] = useState(title);

  const clickHandler = () => {   
    console.log("Clickeado!");          //State: el primer valor es nuestra nueva variable ya inicializada
    setNewTitle = ('Actualizado!');     //State:  el segundo es una función que nos servirá para setear el
    console.log(newTitle);              //valor de dicha variable(siempre lleva setxxxx)
  };

  return (

      <div className="book-item-container">
        <BookCard>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <DateRead dateRead={dateRead} />
        <p>{pageCount} paginas</p>
        <button onClick={clickHandler}>Cambiar Titulo</button> 
        </BookCard>
        </div>
  );
};

export default BookItem;


//Nota: se agrega el toString()[YA SE BORRO ESTO] a el objeto date porque el compilador no entiende como interpretarlo para mostrar.
//Nota: en el llamado a clickHandler el compilador interpreta que en el momento que la lee debe ejecutarla, y no cuando realiza click
//entonces, solo hacemos la referencia, y se ejecuta sólo cuando el usuario hace click.
//Nota: xxxxHandler para dar a entender que esta función está relacionada a eventos y no a otra cosa.
//en este caso clickHandler -> click es el evento.