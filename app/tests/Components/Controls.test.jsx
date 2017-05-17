var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  })

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('.button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    })

    it('should render start when stopped', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='stopped'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('.button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    })

    it('should not render start when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('.button:contains(Start)');

      expect($pauseButton.length).toBe(0);
    })

    it('should not render pause when stopped', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='stopped'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('.button:contains(Pause)');

      expect($pauseButton.length).toBe(0);
    })

  });
});
