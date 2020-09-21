import React from 'react'
import PropTypes from 'prop-types';

const Navbar = (props) => {

    return (
        <div>
            <h3> {props.title} </h3>
        </div>
    )
}

// PropTypes gelen parametreleri ve parametrelerin zorunlulugunu, tipini belirler
// title icin propteypes yazdik, eger her olusturulan Navbarda title olmazsa hata verir.
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

// defaultprops adından da anlasilacagi gibi
// dısarıdan parametre gelmezse default deger atamak icin kullanılır
Navbar.defaultProps = {
    title: "Default Title"
}

export default Navbar;