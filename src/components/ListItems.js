import React from 'react';
import ListItem from './ListItem';
class ListItems extends React.Component {
  render() {
    return (
      <div className='listItems'>
        {renderListItems()}
      </div>
    );
  }
}
function renderListItems() {
  return dataItems.map((post) => {
    return <ListItem key={post.id} data={post} />
  });
}

let dataItems = [
  {
    id: 1,
    title: 'Firefox 61.0 Released ',
    link: 'https://www.mozilla.org/en-US/firefox/61.0/releasenotes/',
    points: 10,
    user: 'l2dy',
    comments: ['a']
  },
  {
    id: 2,
    title: 'Show HN: Mimicking the Bloomberg menu widget without JavaScript ',
    link: 'https://dosyago-coder-0.github.io/mimic-bloomberg-menu-no-js',
    points: 5,
    user: 'dosy',
    comments: ['a']
  },
  {
    id: 3,
    title: 'Software-Defined Radio for Engineers [pdf]',
    link: 'http://www.analog.com/media/en/training-seminars/design-handbooks/Software-Defined-Radio-for-Engineers-2018/SDR4Engineers.pdf',
    points:6,
    user: ' app4soft',
    comments: ['a']
  },
  {
    id: 4,
    title: 'Why nobody ever wins the car at the mall',
    link: 'https://thehustle.co/why-nobody-ever-wins-the-mall-car-giveaway',
    points: 11,
    user: 'sxv',
    comments: ['a']
  }
]

export default ListItems;