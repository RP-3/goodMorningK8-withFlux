var React = require('react');


var Name = React.createClass({
  
  getInitialState: function(){//default state for comonent (from store)
    return {
      currentInput : "_________"
    };
  },

/*  _onChange: function(){
  //set the new state of the component when triggered by the event listener in the store
    this.setState(getAppState());
    //set state will always trigger the render method
  },*/

/*  componentDidMount: function(){
    //add event change listener to app store. tell the store to invoke the onChange function when change occurs
    AppStore.addChangeListener(this._onChange);
  },*/

/*  componentWillUnmount: function(){
    //removes event listener from the app store when the component removed from the page
    AppStore.removeChangeListener(this._onChange);
  },*/
/*
  handleClick: function(args){

    if(args === 'buttonLeft') {
      AppActions.leftSide(); //trigger action
    } else if(args === 'buttonMiddle') {
      AppActions.middle();
    } else if(args === 'buttonRight') {
      AppActions.rightSide();
    }

  },*/
  
  render: function(){
    //put button on the screen again with the new state
    return (
      
      <div style={{
          fontFamily:'arial',
          fontSize:'50px',
          color:'white',
          fontWeight:'bold'
        } }>{this.state.currentInput}</div>
      
      );
  },
});

module.exports = Name;