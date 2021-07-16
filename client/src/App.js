import React from "react";
import Table from "./components/table";

var rowdata = 
[
  {
    dnum: 1,
    rowcontent: [
      {subject: "Subject 1", link:"google.com"},
      {subject: "Subject 2", link:"google.com"},
      {subject: "Subject 3", link:"google.com"},
      {subject: "Subject 4", link:"google.com"},
      {subject: "Subject 5", link:"google.com"},
      {subject: "Subject 6", link:"google.com"},
      {subject: "Subject 7", link:"google.com"},
      {subject: "Subject 8", link:"google.com"}
    ],
  },
  {
    dnum: 2,
    rowcontent: [
      {subject: "Subject 1", link:"google.com"},
      {subject: "Subject 2", link:"google.com"},
      {subject: "Subject 3", link:"google.com"},
      {subject: "Subject 4", link:"google.com"},
      {subject: "Subject 5", link:"google.com"},
      {subject: "Subject 6", link:"google.com"},
      {subject: "Subject 7", link:"google.com"},
      {subject: "Subject 8", link:"google.com"}
    ],
  },
  {
    dnum: 3,
    rowcontent: [
      {subject: "Subject 1", link:"google.com"},
      {subject: "Subject 2", link:"google.com"},
      {subject: "Subject 3", link:"google.com"},
      {subject: "Subject 4", link:"google.com"},
      {subject: "Subject 5", link:"google.com"},
      {subject: "Subject 6", link:"google.com"},
      {subject: "Subject 7", link:"google.com"},
      {subject: "Subject 8", link:"google.com"}
    ],
  },{
    dnum: 4,
    rowcontent: [
      {subject: "Subject 1", link:"google.com"},
      {subject: "Subject 2", link:"google.com"},
      {subject: "Subject 3", link:"google.com"},
      {subject: "Subject 4", link:"google.com"},
      {subject: "Subject 5", link:"google.com"},
      {subject: "Subject 6", link:"google.com"},
      {subject: "Subject 7", link:"google.com"},
      {subject: "Subject 8", link:"google.com"}
    ],
  },
]

function App() {
  return (
    <div>
      <Table pdnum = {8} rowdata = {rowdata}/>
    </div>
  );
}

export default App;