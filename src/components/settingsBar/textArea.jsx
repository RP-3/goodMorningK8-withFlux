//where I will make a bar for the user to put their name so it can go in the good morning part

var React = require('react');


var rightSideBar = React.createClass({
  getInitialState: function() {
        return {
            isSelected: false
        };
    },

 /* _onChange: function(){
  //set the new state of the component when triggered by the event listener in the store
    this.setState(getAppState());
    //set state will always trigger the render method
  },
*/
  /*componentDidMount: function(){
    //add event change listener to app store. tell the store to invoke the onChange function when change occurs
    AppStore.addChangeListener(this._onChange);
  },*/

  /*componentWillUnmount: function(){
    //removes event listener from the app store when the component removed from the page
    AppStore.removeChangeListener(this._onChange);
  },
*/
/*  handleClick: function(args){

    if(args === 'nameButton') {
      this.setState({
        //set the state of the button to show a text area to put your name
    });
    } 

  },*/
  
  render: function(){
    //put button on the screen again with the new state
    return (
      
      <div className="settingsBar">
        <header>Settings</header>
        <section>
          <h3>Your Name</h3>
          <textarea className="nameInput"></textarea>
        </section>
      </div>

      );
  }
});

module.exports = rightSideBar;