import React, { Component, PropTypes } from 'react';

class NewsFeed extends Component {
   
    constructor(props) {
        super(props);
        
    }

    componentWillReceiveProps(nextProps) {
        //console.log("Will Recieve Props - Feed");
        let loaded_class = "ui segment raised news-feed",
            loading_class = "ui loading segment raised news-feed";

        if(!nextProps.loading) {
              this.refs.feeds_view_ref.className =  loaded_class;
        }else {
                this.refs.feeds_view_ref.className = loading_class;
        }
    }

    render() {
            
            let feeds_view = this.props.feeds.map((eachFeed, idx) => {
                return (
                    <div key={idx} className="item">
                        <div className="ui small image">
                            <img src={(eachFeed.thread.main_image==null || eachFeed.thread.main_image=="" || eachFeed.thread.main_image==undefined) ? "https://placeholdit.imgix.net/~text?txtsize=33&txt=No%20image&w=150&h=150": eachFeed.thread.main_image} />
                        </div>
                        <div className="content">
                            <div className="header">
                                {eachFeed.thread.title}
                            </div>
                            <div className="description">
                                {eachFeed.thread.title}
                                {eachFeed.thread.text}
                            </div>

                            <div className="extra">
                                <a className="ui button basic red" href={eachFeed.thread.url} target="_blank"> 
                                    Read More
                                </a>
                            </div>
                        </div>  
                    </div>                
                )
            });
            


        return (
            <div className="ten wide column">
            	<div ref="feeds_view_ref" className="ui loading segment raised news-feed">
                    <div className="ui divided items">
                            {feeds_view}
                    </div>
                </div>
            </div>
        );
    }
}

NewsFeed.defaultProps = {
    feeds: [],
    loading:true
};



export default NewsFeed;
