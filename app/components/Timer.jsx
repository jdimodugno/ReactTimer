var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
  render: function () {
    return (
      <div>
        <h4 className='text-center page-title'> Timer </h4>
        <Clock/>
      </div>
    );
  }
});

module.exports = Timer;
