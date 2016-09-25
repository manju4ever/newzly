import Axios from "axios";

module.exports =  {
	getFeedFor: function(searchKey) {
		return Axios.get("https://webhose.io/search?token=5a846987-752c-4529-8762-ac63e7b99ffb&size=10&q="+searchKey);
	}
};