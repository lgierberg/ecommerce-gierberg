import React from 'react'


const styles = {
    cargImg: {
        maxWidth: "150px"
    }
}

const SingleItem = ({title, content, img}) => {
    return (
        <>
            <div className="card mx-2" style={{width: "18rem"}}>
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{content}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
           {/*
           <h1>{title}</h1>
           <p>{content}</p>
           <img style={styles.cargImg} src={img} alt="Imagen de muestra"/>
           */}
            
        </>
    )
}

export default SingleItem
