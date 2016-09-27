import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar.js";
import NewsFeed from "./NewsFeed.js";
import NewsSearchApi from "./helpers/NewsSearchApi.js";


const BrandHeader = (props) => {
	return (
		<div className="ui inverted big teal vertical segment">
			<h1 className="ui header brand-heading">
				<div className="content">
						<i className="newspaper icon"></i>
				Newzly.io 
				<div className="sub header">Uncluterred News.</div>
				</div>
			</h1>

		</div>
	)
}

class Main extends Component {

	constructor(props) {
		super(props);
		this.state={
			search_result:[],
			loading_state: true
		}
	}

	getNewsFor(keyword) {
		let that = this;
		this.setState({
			search_result:[],
			loading_state: true
		})
		NewsSearchApi.getFeedFor(keyword).then(function(response) {
			that.setState({
				search_result: response.data.posts,
				loading_state: false
			});
		});	
		
	}

	render(){

	  return(
	  	<div className = "ui fluid container">
				
			<div className="ui doubling relaxed grid">
				
				<div className = "row remove-padding">
			        <div className = "ui sixteen wide column">
			        	<BrandHeader />
			        </div>
			    </div>

			    <div className="row remove-padding">
				 		<SearchBar fetchfeed={this.getNewsFor.bind(this)}/>
				 		<NewsFeed feeds={this.state.search_result} loading={this.state.loading_state}/>
				</div>

			</div>
	    </div>
	  );
	}
}



ReactDOM.render(<Main />, document.getElementById("main"));