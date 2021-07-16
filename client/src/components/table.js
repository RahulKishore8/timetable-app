import HeaderElement from "./HeaderElement";
import TableRow from "./tablerow";

function Table(props){
    return(<table>
      <HeaderElement pdnum = {8} />
      <TableRow rowdata = {props.rowdata}/>
    </table>)
  }

export default Table;