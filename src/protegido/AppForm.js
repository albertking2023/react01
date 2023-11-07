import React from 'react'

const AppForm = (props) => {

    //style={{background:"orange", padding: "10px"}}
  return (
    <div style={{background:"orange", padding: "10px"}}>
        <form>
            <button>Cerrar Aplicacion</button>

            <h2>Registrar (AppForm.js)</h2>

            <input name='nonbre' type='text' placeholder='Nombre...' /> <br/>
            <input name= 'edad' type='text' placeholder='Edad...' /> <br/>

            <select>
                <option value="">Seleccione género...</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select> 
            <br/>
            <button>Guardar / Actualizar</button>
            </form>
    </div>
  )
}

export default AppForm;