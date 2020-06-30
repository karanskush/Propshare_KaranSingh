import React, { Component } from 'react'
import ReactBnbGallery from 'react-bnb-gallery'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import 'react-bnb-gallery/dist/style.css'



const photos = [{
  photo: "https://images.pexels.com/photos/4039229/pexels-photo-4039229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  caption: "My and my Son part 1",
  subcaption: "Watch my son playwith candles. #mom_love,",
  thumbnail: "https://source.unsplash.https://images.pexels.com/photos/4039229/pexels-photo-4039229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940/aZjw7xI3QAA/100x67",
}, {
  photo: "https://images.pexels.com/photos/4039155/pexels-photo-4039155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  caption: "Me and my Son part 2",
  subcaption: "Teaching my son how to paint. #mom",
  thumbnail: "https://images.pexels.com/photos/4039155/pexels-photo-4039155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}, {
  photo: "https://images.pexels.com/photos/1378849/pexels-photo-1378849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  caption: "Our New Dog",
  subcaption: "My family bought a new shit zo for me this lockdown.#pet_love",
  thumbnail: "https://images.pexels.com/photos/1378849/pexels-photo-1378849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
},
{
  photo: "https://images.pexels.com/photos/4261261/pexels-photo-4261261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  caption: "My smart son",
  subcaption: "I told my son the importance of mask in Covid-19.",
  thumbnail: "https://images.pexels.com/photos/4261261/pexels-photo-4261261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}
];

class Example extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: true };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    const { user } = this.props.auth;

    return (
      <React.Fragment>
      <button onClick={this.toggleGallery}>Open photo gallery</button>
      <ReactBnbGallery
        show={this.state.galleryOpened}
        photos={photos}
        onClose={this.toggleGallery}
        
        />
        </React.Fragment>
    )
  }
}
Example.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Example);

