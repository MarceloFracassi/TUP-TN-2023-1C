
import "./BookItem.css";


const BookItem = ({ title, author, dateRead, pageCount }) => {
  return (
    <div className="book-item-container">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <div>{dateRead.toString()}</div>   
      <p>{pageCount} paginas</p>
    </div>
  );
};

export default BookItem;


//Nota: se agrega el toString() a el objeto date porque el compilador no entiende como interpretarlo para mostrar.