var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();

    var formRef = this.refs.form;
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }

  },
  render: function () {
    return (
      <div>
        <form ref='form' onSubmit={this.onSubmit} className='countdown-form'>
          <input type='text' ref='seconds' placeholder='Enter time in seconds'/>
          <input type='submit' className='button expanded' value='Start'/>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;