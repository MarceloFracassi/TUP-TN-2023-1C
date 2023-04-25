import "./BookCard.css";

const BookCard = ({children}) => {
  return <div className="book-item-container">{children}</div>;
   //le paso el estilizado de className de Bookitem a BookCard
};

export default BookCard;