import React, { Fragment, useState } from 'react'

const C02contador = () => {
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log("Se hizo clic...");
        setNumero(numero + 1);
    }
  return (
    <Fragment>
      <h3>Mi primer Componente {numero} </h3>
      <button onClick={aumentar}>aumentar</button>
    </Fragment>
  )
}

export default C02contador
