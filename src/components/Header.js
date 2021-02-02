import React, { useState } from "react";

function Header (props) {

    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={props.onDarkModeClick}>
          Light Mode
        </button>
      </header>
    )
}



export default Header