import React from 'react';
import ListItem from './ListItem';

class ListItems extends React.Component {
  state = {
    activeIndex : null, //index of listItem with comment section active
    hiddenIndex: [] //indices of hidden listItems
  }
  render() {
    return (
      <div className='listItems'>
        {this.renderListItems()}
      </div>
    );
  }
  renderListItems() {
    return dataItems.map((post) => {
      const active = this.state.activeIndex === post.id ? true : false; //active listItem
      const hidden = this.state.hiddenIndex.includes(post.id) ? true : false; //hidden listItem
      const hiddenIndex = this.state.hiddenIndex;
      
      return <ListItem key={post.id} data={post} active={active} setActive={() => this.setState({activeIndex: post.id})}  hidden={hidden} setHidden={() => this.setState({hiddenIndex: hiddenIndex.concat([post.id])})} unHide={()=>this.setState({hiddenIndex: hiddenIndex.filter((index) => {return index !== post.id})})} />
    });
  }
}
let dataItems = [ //Static data for testing
  {
    id: 1,
    title: 'Firefox 61.0 Released ',
    link: 'https://www.mozilla.org/en-US/firefox/61.0/releasenotes/',
    points: 10,
    user: 'l2dy',
    comments: ["Great release. I had issues with previous releases (58-60) on MBP, where quite a lot of pages would cause high CPU usage and in turn overheating of the machine but after this upgrade the problem (at least it seems so) went away. And it also feels snappier.","My personal test case will be with the UniFi 5.7/5.8 Controller web interface page. I've found consistently under the last few versions of Firefox that, while it's fine for at least an hour, if I leave it up constantly for ease of monitoring then after a day or two the Firefox process inevitably ends up pegging an entire core. There is no video whatsoever or any particularly fancy graphical usage, and while they may be doing something odd internally (I haven't had time to really dig into it) I'm not sure Firefox should end up in that state there over time. It's relatively easily repeatable though (will take a day but requires no interaction on my part) so I look forward to testing it. Although if it does resolve the problem I'll be mildly bummed whatever fix it was didn't make it into ESR, but so it goes."]
  },
  {
    id: 2,
    title: 'Show HN: Mimicking the Bloomberg menu widget without JavaScript ',
    link: 'https://dosyago-coder-0.github.io/mimic-bloomberg-menu-no-js',
    points: 5,
    user: 'dosy',
    comments: ["Context: I like the Bloomberg site and their drop-down menu is cool. Purely as a challenge, I set out to mimick the styles and behaviour of that menu without using JavaScript and trying to keep the HTML/CSS as minimal as possible. Their menu widget does not work if you switch of JS (but this was not a motivation for me to make this)."]
  },
  {
    id: 3,
    title: 'Software-Defined Radio for Engineers [pdf]',
    link: 'http://www.analog.com/media/en/training-seminars/design-handbooks/Software-Defined-Radio-for-Engineers-2018/SDR4Engineers.pdf',
    points:6,
    user: ' app4soft',
    comments: ["This is awesome, thank you for making this available. Having had to piece this together from multiple books, blog posts, tutorials, GNU Radio, etc. having a single reference is really helpful"]
  },
  {
    id: 4,
    title: 'Why nobody ever wins the car at the mall',
    link: 'https://thehustle.co/why-nobody-ever-wins-the-mall-car-giveaway',
    points: 11,
    user: 'sxv',
    comments: ["There's a furniture salesman here in Houston who makes heavy use of that sort of promotion. His latest if you spend $3,000 on a mattress and the Astros win the 2018 baseball final championship series you'll be refunded the purchase price."]
  }
]

export default ListItems;