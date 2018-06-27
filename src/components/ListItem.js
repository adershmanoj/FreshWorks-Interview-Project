import React from 'react';
import CommentSection from './CommentSection';

class ListItem extends React.Component {
  state = {
    points: this.props.data.points, //post points
    comments: this.props.data.comments, //array of post comments
  }

  render() {
    const {id, link, title, user} = this.props.data;
    const active = this.props.active;
    const comments = this.state.comments;
    const hidden = this.props.hidden;
    
    if(hidden) //hidden post
      return (
        <div className='listItem listItem--hidden'>
          <p>post hidden</p>
          <a onClick={this.props.unHide}>(Unhide)</a>
        </div>
      )
    else
      return (
        <div className='listItem'>
          <div className='listItem__header'>
            <p>{id}.</p>
            <div className="arrow-up" onClick={this.upVote}></div>
            <a href={link}>{title}</a>
          </div>
          <div className='listItem__footer'>
            <p>{this.state.points} points by</p>
            <p>{user} |</p>
            <a onClick={this.props.setHidden}>hide&nbsp;</a>
            <a onClick={this.props.setActive}>{comments.length} <span>{comments.length === 1 ? 'comment' : 'comments'}</span></a>
          </div>
          <div className='listItem__comments'>
            {active ? <CommentSection comments={comments}/> : undefined}
          </div>
        </div>
      )
  }
  upVote = () => {
    this.setState((prevState) => {
      return {points: prevState.points+1};
    });
  };
}
export default ListItem;