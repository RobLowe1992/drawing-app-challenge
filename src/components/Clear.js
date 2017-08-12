import React, { PropTypes } from "react";

export default function Clear(props) {
    const { action } = props;
    function clear(){
        const canvas = document.getElementById("canvas");
        const clear = canvas.getContext("2d");
        clear.clearRect(0, 0, canvas.width, canvas.height);
    }
    return (
        <input
            type="button"
            className="btn"
            defaultValue="Clear"
            onClick={ () => {
                action();
                clear();
            }}
        />
    );
}

Clear.propTypes = {
    action: PropTypes.func.isRequired
};