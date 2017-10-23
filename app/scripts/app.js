"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topic = function (_React$Component) {
  _inherits(Topic, _React$Component);

  function Topic() {
    _classCallCheck(this, Topic);

    return _possibleConstructorReturn(this, (Topic.__proto__ || Object.getPrototypeOf(Topic)).apply(this, arguments));
  }

  _createClass(Topic, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "section",
          { className: "section" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "article",
              { className: "message" },
              React.createElement(
                "div",
                { className: "message-header" },
                React.createElement(
                  "p",
                  { className: "message-header-text", id: this.props.topicHeader },
                  "Message"
                )
              ),
              React.createElement(
                "div",
                { className: "message-body" },
                React.createElement(
                  "p",
                  { className: "title", id: this.props.topicId },
                  "connecting.."
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Topic;
}(React.Component);

var main = React.createElement(
  "div",
  { className: "container" },
  React.createElement(
    "section",
    { className: "section" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h1",
        { className: "title" },
        "NETPIE.io"
      ),
      React.createElement(
        "h2",
        { className: "subtitle" },
        "React Dashboard"
      ),
      React.createElement(
        "div",
        { className: "notification" },
        React.createElement(
          "p",
          null,
          "appName: react dashboard netpie"
        ),
        React.createElement(
          "p",
          null,
          "appId: ",
          Config.appId
        ),
        React.createElement(
          "p",
          null,
          "appKey: ",
          Config.appKey
        ),
        React.createElement(
          "p",
          null,
          "appSecret: ",
          Config.appSecret
        )
      )
    )
  ),
  React.createElement(Topic, { topicHeader: "topic-header-ch1", topicId: "incoming-messages-ch1" }),
  React.createElement(Topic, { topicHeader: "topic-header-ch2", topicId: "incoming-messages-ch2" }),
  React.createElement(Topic, { topicHeader: "topic-header-ch3", topicId: "incoming-messages-ch3" })
);

var app = document.getElementById('app');

ReactDOM.render(main, app);
