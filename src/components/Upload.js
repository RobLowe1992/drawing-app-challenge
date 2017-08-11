import React, { PropTypes } from "react";

export default function Upload(props) {
    const { action } = props;
    return (
        <input
            type="button"
            className="btn"
            defaultValue="Upload"
            onClick={ () => {
                action();
            }}
        />
    );
}

Upload.propTypes = {
    action: PropTypes.func.isRequired
};