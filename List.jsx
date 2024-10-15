export const List =(props) => {
    return(
        <li>
          <h3>{props.curElem.title}</h3>
          <h3>{props.curElem.year}</h3>
          <h3>{props.curElem.cast}</h3>
          <h3>{props.curElem.genres}</h3>
          <button href={props.curElem.href}>Go to Series</button>
          <h3>{props.curElem.extract}</h3>
          <img src={props.curElem.thumbnail} alt={props.curElem.title} />
        </li>



    );
};
