var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <h4 className='text-center'> Countdown </h4>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});

module.exports = Countdown;
