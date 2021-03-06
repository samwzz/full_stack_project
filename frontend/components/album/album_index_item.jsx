import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  albumThumbnail() {
    const { album } = this.props;
    if ( album.photos && album.photos.length > 0) {
      return album.photos[0].image_url;
    } else {
      return "http://res.cloudinary.com/db1ywnpgj/image/upload/v1495219123/aperture_logo.png";
    }
  }

  render () {
    const {currentUser, album } = this.props;
    return(
      <div className="album-item-container">
        <div className="back-layer"></div>
        <div className="mid-layer"></div>
        <div className="album-item">
          <Link to={`/users/${currentUser.id}/albums/${album.id}`} className="album-item gradient">
            <h1>{album.title}</h1>
          </Link>
          <div className="thumbnail">
            <img src={this.albumThumbnail()} />
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumIndexItem;
