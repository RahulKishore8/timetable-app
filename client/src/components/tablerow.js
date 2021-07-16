import RowElement from "./rowelement";

function TableRow(props){
    return(<tbody>
      {
        props.rowdata.map((el,i) => <RowElement dnum = {el.dnum} rowcontent = {el.rowcontent} key={i} />)
      }
    </tbody>  
    );
  }

export default TableRow;