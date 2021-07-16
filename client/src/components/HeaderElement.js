function HeaderElement(props){
    var pd = [];
    for(let i=1;i<=props.pdnum;i++){
      pd.push(i);
    }
    return (
      <thead><tr>
        <th>Day</th>
          {
            pd.map((el,i) => <th key={i}> {"Period" + el} </th>)
          }
      </tr>
      </thead>
   )
  }

export default HeaderElement;