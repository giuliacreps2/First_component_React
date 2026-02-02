import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt={this.props.description} />
      </div>
    );
  }
}
export default ImageComponent;
