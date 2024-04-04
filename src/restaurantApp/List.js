import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap"; 
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
export default function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
  }, []);
  const getData=()=>{
    fetch("http://localhost:3000/Restaurant").then((response) => {
      response.json().then((result) => {
        setData(result);
      });
    });
   }
  const deleteUser=(id)=>{
    fetch('http://localhost:3000/Restaurant/'+id, 
    {
      method: "DELETE",
      
    
    })
    .then((result) =>{ result.json()
    .then((resp) => {
      alert("Restaurant added been Delete");
      getData()
    })
  })
  }
  return (
    <>
      <h1 style={{color:"gray"}}>List Of Restaurant</h1>   
        <Table  bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>email</th>
              <th>rating</th>
              <th>address</th>
            </tr>
          </thead>
       <tbody>
       {data.map((item, i) => (
          <tr key={i}> 
               <td >{item.id}</td>
            {""}
            <td >{item.name}</td>
            {""}           
            <td>{item.email}</td>
            {""}
            <td>{item.rating}</td>
            {""}
            <td>{item.address}</td>
            {""}
            <td><Link to={"/update/"+item.id} style={{textDecoration:"none"}} > <FontAwesomeIcon icon={faEdit} color="orange" /> </Link>
            <span onClick={()=>deleteUser(item.id)} style={{textDecoration:"none"}} > <FontAwesomeIcon icon={faTrash} color="orange" /> </span>
            </td>
          </tr>
        ))}
       </tbody>
        </Table>
    </>
  );
}
// import React, { useEffect, useState } from 'react';

// export default function List() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/Restaurant")
//       .then((response) => {
//         response.json().then((result) => {
//           setData(result); // Set the fetched data to the state
//         });
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <>
//       <div>This Is List Page</div>

//       <ul>
//         {data.map((item, i) => (
//           <li key={i}>{item.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
