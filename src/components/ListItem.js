import React from 'react';

class ListItem extends React.Component {
  state = {
    points: this.props.data.points
  }
  render() {
    return (
      <div className='listItem'>
        <div className='listItem__header'>
          <p>{this.props.data.id}.</p>
          <div className="arrow-up" onClick={this.upVote.bind(this)}></div>
          <a href={this.props.data.link}>{this.props.data.title}</a>
        </div>
        <div className='listItem__footer'>
          <p>{this.state.points} points by</p>
          <p>{this.props.data.user} |</p>
          <p>{this.props.data.comments.length} comments</p>
        </div>
      </div>
    )
  }
  upVote = () => {
    this.setState((prevState) => {
      return {points: prevState.points+1};
    });
  }
}
export default ListItem;