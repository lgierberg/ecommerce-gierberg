import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";

const styles = {
    span: {
        display: "inline-block",
        backgroundColor: "#008eff",
        fontSize: "18px",
        color: "white",
        padding: "12px",
        borderRadius: "54px",
        paddingTop: "5px",
        width: "34px",
        height: "34px"
        
    }
}

const NavCart = () => {
    return (
        <a style={{textDecoration: "none"}}href="#"><h3><AiOutlineShoppingCart /> <span style={styles.span}>1</span></h3></a>
    )
}

export default NavCart
