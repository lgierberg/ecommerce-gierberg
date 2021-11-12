import React from 'react'
import SingleItem from '../SingleItem/SingleItem'
import aprendeainvertir from '../../Assets/img/aprendeainvertir.jpg'
import operatoriamercados from '../../Assets/img/operatoriamercados.jpg'
const ItemListContainer = ({greeting}) => {

    return (
        <>
            <div className="text-center py-5">
                <h3> {greeting}</h3>
                <div className="text-center product d-flex justify-content-center py-3">
                    <SingleItem title="Modulo I - Aprendé a Invertir" content="Aprende a invertir desde cero" img={aprendeainvertir}/>
                    <SingleItem title="Modulo II - Operatoria de los Mercados Financieros Globales" content="Aprende contenidos avanzados" img={operatoriamercados}/>
                </div>
            </div>            
        </>
    )
}

export default ItemListContainer
