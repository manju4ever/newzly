import Axios from "axios";

module.exports =  {
	getFeedFor: function(searchKey) {
		return Axios.get("https://webhose.io/search?token=c5e60f7d-d0f1-4072-94a3-6bc8f2808683&size=10&performance_score=5&q="+searchKey);
	}
};
