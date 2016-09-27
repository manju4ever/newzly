import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import Rebase from "re-base";


//Initialize connection to firebase
let base = Rebase.createClass ({
		apiKey: "AIzaSyBBDS1UkDz8x3keRFro6DYz1yF-IghAS8g",
	    authDomain: "unclumsy-33366.firebaseapp.com",
	    databaseURL: "https://unclumsy-33366.firebaseio.com",
	    storageBucket: "",
	    messagingSenderId: "583184494502"
});


//The Styling is totatlly dependent on Semantic-UI
export default class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.addSearchKeyWord = this.addSearchKeyWord.bind(this);
		this.removeSearchKeyword = this.removeSearchKeyword.bind(this);
		this.state ={
			keywords:[],
			selected_keyword_id:0
		}

	}

	componentDidMount() {
	  this.keyword_ref = base.syncState("/manju/keywords", {
	  	 context: this,
	  	 state:'keywords',
	  	 asArray: true,
	  	 then:function() {
	  	 	if(this.state.keywords[0]!==undefined) {
	  	 		this.fetchFeed(this.state.keywords[0], 0);
	  	 	}
	  	 }
	  }); 

	}

	componentWillUnmount() {
	    base.removeBinding(this.keyword_ref);  
	}


	addSearchKeyWord(ev) {
		//console.log("Add Search Keyword Triggered");
		this.setState({
			keywords:this.state.keywords.concat([this.refs.keyword.value])
		});
		ReactDOM.findDOMNode(this.refs.keyword).value = "";

	}
			
	removeSearchKeyword(ev) {
		this.state.keywords.splice(ev.target.id, 1);
		this.setState({
			keywords:this.state.keywords
		});	
	}

	fetchFeed(keyword, idx) {
		this.setState({
			selected_keyword_id: idx
		});
		this.props.fetchfeed(keyword);
	}


	isSelectionActive(idx) {
		if(idx == this.state.selected_keyword_id) return "teal active item";
		else return "teal item";
	}

	render() {

		//console.log("Rendered Search")

		let saved_list = this.state.keywords.map((eachKeyword, idx) => {
			return (
				<a key={idx} className={this.isSelectionActive(idx)} onClick={this.fetchFeed.bind(this, eachKeyword, idx)}>
					 {eachKeyword}
					 <div className="ui icon button label" onClick={this.removeSearchKeyword}><i id={idx} className="icon remove"></i></div>
				</a>	
			)
		});

		return(
			
				<div className="ui five wide column">
					<div className="ui fluid vertical menu history-area">

						<div className="item">
							<div className="ui transparent icon input">
								<i className="icon link add" onClick={this.addSearchKeyWord}></i>
								<input type="text" ref="add_key" placeholder="Add a New Keyword" ref="keyword"/>
							</div>
						</div>
							{saved_list}					
					</div>	
				</div>				
		)
	}

}