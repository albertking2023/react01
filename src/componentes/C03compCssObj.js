import React from "react";
import "./C03compCss.css"
import style from './C03compCssObj.js'

const C03componenteConCss = () => {
    return (
        <div className="marcoComponente">
            <button style={{backgroundColor:'green', color:'blue', padding:'red'}}>
                Boton 1 con estilos en linea de atributos (Definido como objetos)
            </button>
            <hr/>

            <button>
                Boton 2 con estilos en archivo css (normal)
            </button>
            <br/>

            <button style={style.estilo1}>
                Boton 3 con estilo en archivo js (Definido como objeto)
            </button>
            </div>
    )
}

export default 03componenteConCss; 