import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {currentUser, comment } = this.props;
    return(
      <div className="comment-item-container">
        <div className="comment-item">
          <h2>{comment.user_id}</h2>
          <h3>{comment.created_at}</h3>
          <p>{comment.body}</p>
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;