import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";
import BrushColor from "./BrushColor";
import Save from "./Save";
import Upload from "./Upload";
import Clear from "./Clear";

export default class Sidebar extends Component {
	render() {
		const { tools, actions, upload } = this.props;
		const { brush_size } = tools;
		const { brush_color } = tools;
		return (
			<div className="sidebar">
				<section className="section section--tool-selector pad-1em">
					<h3 className="section__heading">Tool</h3>
					<ToolSelector
						tool={ tools.tool }
						action={ actions.selectTool }
					/>
				</section>
				<hr className="slate-border"/>
				<section className="section section--brush-size pad-1em">
					<h3 className="section__heading">Brush Size</h3>
					<BrushSize
						brush_size={ brush_size }
						action={ actions.changeSize }
					/>
				</section>
				<hr className="slate-border"/>
				<section className="section section--brush-color pad-1em">
					<h3 className="section__heading">Brush Color</h3>
					<BrushColor
						brush_color={ brush_color }
						action={ actions.changeColor }
					/>
				</section>
				<hr className="slate-border"/>
				<section className="section section--save-image pad-1em">
					<h3 className="section__heading">Save</h3>
					<Save
						action={ actions.saveImage }
					/>
				</section>
				<hr className="slate-border"/>
				<section className="section section--upload-image pad-1em">
					<h3 className="section__heading">Upload</h3>
					<Upload
						action={ actions.uploadImage }
						upload={upload}
					/>
				</section>
				<hr className="slate-border"/>
				<section className="section section--clear-canvas pad-1em">
					<h3 className="section__heading">Clear</h3>
					<Clear
						action={ actions.clearCanvas }
					/>
				</section>
			</div>
		)
	}
}
