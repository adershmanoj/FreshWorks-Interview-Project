import React from 'react';

class ListItem extends React.Component {
  render() {
    return (
      <div className='listItem'>
        <div className='listItem__header'>
          <p>{this.props.data.id}.</p>
          <div class="arrow-up"></div>
          <a href={this.props.data.link}>{this.props.data.title}</a>
        </div>
        <div className='listItem__footer'>
          <p>{this.props.data.points} points by</p>
          <p>{this.props.data.user} |</p>
          <p>{this.props.data.comments.length} comments</p>
        </div>
      </div>
    )
  }
}
export default ListItem;