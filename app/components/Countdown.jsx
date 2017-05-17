var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      if (this.state.count > 0) {
        var newCount = this.state.count - 1;
        this.setState({
          count: newCount
        });
      } else {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  },
  componentDidUpdate: function (prevProps, prevState) {
    if ( this.state.countdownStatus !== prevState.countdownStatus ) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  render: function () {
    var {count} = this.state;
    return (
      <div>
        <h4 className='text-center page-title'> Countdown </h4>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
