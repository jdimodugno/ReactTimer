var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
  render: function () {
    return (
      <div>
        <h4 className='text-center'> Timer Component </h4>
        <Clock/>
      </div>
    );
  }
});

module.exports = Timer;
