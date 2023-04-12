import React from 'react'
import Books from './Componentes/Books/books';


const App = () => {
  const books = [
    {
      title: "100 anios de soledad",
      author: "Gabriel Garcia Marquez",
      dateRead: new Date(2021, 8, 12),
      pageCount: 410,
    },
    {
      title: "Todos los fuegos el fuego",
      author: "Julio Cortazar",
      dateRead: new Date(2020, 6, 11),
      pageCount: 197,
    },
    {
      title: "Asesinato en el Oriente Express",
      author: "Agatha Christie",
      dateRead: new Date(2021, 5, 9),
      pageCount: 256,
    },
    {
      title: "Las dos Torres",
      author: "J.R.R Tolkien",
      dateRead: new Date(2020, 3, 22),
      pageCount: 352,
    }
  ]
  
  return (
    <div className="App">
      <Books books={books} />
    </div>
  );
};

export default App;
