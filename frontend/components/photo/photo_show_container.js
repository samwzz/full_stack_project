import { connect } from 'react-redux';
import { fetchUserAlbums } from '../../actions/album_actions';
import { updatePhoto } from '../../actions/photo_actions';
import { selectAlbums } from '../../reducers/selectors';

import PhotoShow from './photo_show';

const mapStateToProps = state => ({
  albums: selectAlbums(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  fetchUserAlbums: (userId) => dispatch(fetchUserAlbums(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);