import React from 'react';

export default class CommentSection extends React.Component {
  state = {
    comments: this.props.comments,
    textInput: ''
  }
  render() {
    const comments = this.state.comments;
    const textInput = this.state.textInput;
    return (
      <div>
        <textarea rows="4" cols="50" placeholder="add comment" onChange={(e)=>this.setState({textInput: e.target.value})} value={textInput}>
        </textarea>
        <button type="submit" onClick={this.addComment}>add comment</button>
        <div>{comments.map((comment)=>{return <p key={comment}>{comment}</p>})}</div>
      </div>
    )
  }
  addComment = (e) => {
    this.setState((prevState) => {
      return {comments: prevState.comments.concat([prevState.textInput])};
    });
  }
}
