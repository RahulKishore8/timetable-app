function RowElement(props){
    return (
      <tr>
        <th>{"Day" + props.dnum} </th>
          {
            props.rowcontent.map((el,i) => <td key = {i}> {el.subject} </td>)
          }
      </tr>
   )
  }

export default RowElement;