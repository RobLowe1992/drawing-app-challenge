import React, {Component} from 'react'

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
    }
    uploadImage(e) {
        const fileReader = new FileReader();
        let toUpload = e.target.files[0];

        fileReader.onload = () => {
            this.setState({
                image: fileReader.result
            });
        }
        fileReader.readAsDataURL(toUpload)
    }

    render() {
        let image = null;
        if (this.state.image) {
          image = <img className="logo" id="upload" src={this.state.image} alt="Uploaded" />;
        } else {
          image = <img className="logo" src="./img/st-icon.png" alt="Logo"/>;
        }

        return (
            <div>
                <form>
                    <input
                        type="file"
                        onChange={(e)=>
                            this.uploadImage(e)
                        }
                    />
                </form>
                <div>
                    {image}
                </div>
            </div>
        )
    }
}