var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <h4 className='text-center'> Countdown Component </h4>
        <Clock/>
      </div>
    );
  }
});

module.exports = Countdown;
