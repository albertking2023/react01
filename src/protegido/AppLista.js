import React, { useEffect, useState } from 'react';
import AppForm from './AppForm';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../conexion/firebase';

const AppLista = (props) => {

    //// Lectura fnRead /////////
    const [docBD, setDocBD] = useState([]);
    const fnRead =() => {
        const xColeccionConQuery = query(collection(db, 'persona'));   //Dato de BD
        const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
         const xDoc = [];
         xDatosBD.forEach((doc) => {
            xDoc.push({id:doc.id, ...doc.data()});
         });
         setDocBD(xDoc);                
        });
    }
    
    //fnRead();
    useEffect(()=>{fnRead();}, [props.IdActual]);
    //console.log(docBD);

    //// Delete /////////
    const [IdActual, setIdActual] =useState("");      //Variable para id de c/coleccion
    const fnDelete = async (xId) => {                       //
        if(window.confirm("Confirme para eliminar")){ // Ventana para confirmar 
            await deleteDoc(doc(db, "persona", xId)); // Elimina en BD
        }                 
        alert("Se ELIMINO con exito...");
    }
    //style={{background:"greenyellow", padding:"10px"}}
    //{/* Pasa variable y funcion */} {...{IdActual, setIdActual}}
    return (
        <div style={{background:"greenyellow", padding:"10px"}}>
            <h1>AppList.js</h1>
            <AppForm {...{IdActual, setIdActual}}/>  {/* Envios de variables */}
            <h3>Lista de clientes</h3>
            {
                docBD.map((row, index) =>            // Extraer registro e index 
                    <p key={row.id}>
                    No. {index + 1}.{row.nombre}
                    .....
                    <span onClick={() => fnDelete(row.id)}>x</span>
                    .....
                    <span onClick={() => setIdActual(row.id)}>A</span>
                    </p>
                )
            }

        </div>
    )
}

export default AppLista;
