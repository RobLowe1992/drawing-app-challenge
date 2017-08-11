import React, { PropTypes } from "react";

export default function Clear(props) {
    const { action } = props;
    return (
        <input
            type="button"
            className="btn"
            defaultValue="Clear"
            onClick={ () => {
                action();
            }}
        />
    );
}

Clear.propTypes = {
    action: PropTypes.func.isRequired
};