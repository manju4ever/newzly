import React, { Component, PropTypes } from 'react';

class App extends Component {
    
   constructor(props) {
        super(props);

        let someData = [{
        	id:1,	
        	user:"Manju",
        	avatar_url:"https://avatars1.githubusercontent.com/u/9355984?v=3&s=466",
        	primary_phone:"7259769413"
        },{
        	id:2,
        	user:"Vinutha",
        	avatar_url:"https://avatars1.githubusercontent.com/u/9355984?v=3&s=466",
        	primary_phone:"7259769413"
        },{
        	id:3,
        	user:"Shekhar",
        	avatar_url:"https://avatars1.githubusercontent.com/u/9355984?v=3&s=466",
        	primary_phone:"7259769413"
        }];

        this.state = { data: someData };

        this.redraw = this.redraw.bind(this);
    }

    redraw() {

    	let temp = this.state.data;			
    	temp[0].user = "Kunju";
    	this.setState({
    		data: temp
    	});
    	this.render();
    }

    render() {

    	let allContacts = this.state.data.map((eachContact, idx) => {
    		return (
    			<ContactCard key={idx} user={eachContact.user} avatar_url={eachContact.avatar_url} primary_phone={eachContact.primary_phone} />
    		);
    	})

        return (
          	<div className="ui container">

          		<Header action={this.redraw}/>
          		<div className="ui cards">
          			{allContacts}
          		</div>
          	</div>
         )
    }
}

const Header = (props) => { return (<div className="ui segment inverted orange">
								<div className ="ui header inverted center aligned inverted big">Advanced Contacts </div>
								<div className = " ui basic button bottom attached inverted" onClick={props.action}> Make Changes </div>
						  </div> )}


class ContactCard extends Component {

	constructor() {
		super()
	}

	componentWillReceiveProps(nextProps) {
	    console.log(nextProps);
	}

	render() {
		return(

			<div className="ui card">

				<img src={this.props.avatar_url} />

				<div className="header">
					{this.props.name}
				</div>

				<div className="meta">
					{this.props.description}
				</div>

				<div className = "content">				
					Mobile <h3 className="ui header blue">{this.props.primary_phone}</h3>
					<div className="ui divider"></div>
				</div>

				<div className = "ui buttons attached"> 

						
						<div className = "ui button icon basic olive">	

						<i className="icon phone" />

						 <a className="link" href={"tel:"+this.props.primary_phone}>
						 	Call {this.props.user} 
						 </a>


						</div>

						<div className = "ui button icon basic red"> 

						<i className = "icon remove" />

						 Delete Contact 

						</div>

					</div>

				</div>
		)
	}
}


export default App;
