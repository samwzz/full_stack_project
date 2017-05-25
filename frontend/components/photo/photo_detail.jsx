import React from 'react';
import { Link } from 'react-router-dom';
import PhotoShow from './photo_show';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  confirmDelete(e){
    e.preventDefault();
    var result = confirm("Are you sure you want to delete?");
    if (result) {
      this.props.deletePhoto(this.props.photo)
        .then(data => this.props.history.push(`/discover`));
    }
  }

  render () {
    const { photo, currentUser } = this.props;
    let editButton, deleteButton;
    if (currentUser) {
      if ( currentUser.id === photo.user_id ) {
        editButton = <UploadModal photo={this.props.photo}
          receivePhotoErrors={this.props.receivePhotoErrors}
          formType="edit"/>;
        deleteButton = <button className='delete-button'
          onClick={this.confirmDelete}>Delete Photo</button>;
        }
    }
    console.log(this.props);
    return (
      <div className="photo-detail-container">
        <Link to="/">Back to all photos</Link>
        <div className="photo-detail">
          <PhotoShow photo={this.props.photo} />
          {editButton}
          {deleteButton}
        </div>
        <div></div>
      </div>
    );
  }
}

export default PhotoDetail;
