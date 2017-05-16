var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      totalSeconds: 0
    };
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      totalSeconds: seconds
    });
  },
  render: function () {
    var {totalSeconds} = this.state;
    return (
      <div>
        <h4 className='text-center page-title'> Countdown </h4>
        <Clock totalSeconds={totalSeconds}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
