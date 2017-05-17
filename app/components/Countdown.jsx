var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
  pauseTimer: function () {
    this.setState({
      countdownStatus: 'paused'
    });
  },
  stopTimer: function () {
    this.setState({
      countdownStatus: 'stopped'
    });
  },
  componentDidUpdate: function (prevProps, prevState) {
    if ( this.state.countdownStatus !== prevState.countdownStatus ) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
          break;
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
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
  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function () {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus === 'stopped') {
        return (
          <CountdownForm onSetCountdown={this.handleSetCountdown}/>
        );
      } else {
        return (
          <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
        );
      }
    };
    return (
      <div>
        <h4 className='text-center page-title'> Countdown </h4>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
