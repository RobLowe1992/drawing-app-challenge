import React, { PropTypes } from "react";

export default function Save(props) {
    const { action } = props;
    function saveImage(){
        const canvas = document.getElementById('canvas');
        const source = canvas.toDataURL('canvas');
        window.open(source).document.write(`<img src="${source}" alt="Canvas Image"/>`);
    }
    return (
        <input
            type="button"
            className="btn"
            defaultValue="Save"
            onClick={ () => {
                action();
                saveImage();
            }}
        />
    );
}

Save.propTypes = {
    action: PropTypes.func.isRequired
};