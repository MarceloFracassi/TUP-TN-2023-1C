import "./ReadDate.css";

const ReadDate = ({ dateRead }) => {
    
    const year = dateRead.getFullYear();
    const month = dateRead.toLocaleString("es-AR", { month: "long"});
    const day = dateRead.toLocaleString("es-Ar", { day: "2-digit"});
  
    return (
        <div className="date-container"> 
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
        </div>
    )
}


export default ReadDate;
//dateRead se exporta a BookItem por App