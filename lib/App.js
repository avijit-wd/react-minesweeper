"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(Header, {
    logo: _logo.default
  }, /*#__PURE__*/_react.default.createElement("p", null, "Edit ", /*#__PURE__*/_react.default.createElement("code", null, "src/App.tsx"), " and save to reload."), /*#__PURE__*/_react.default.createElement(Link, {
    href: "https://reactjs.org",
    target: "_blank"
  }, "Learn React")));
}

var Header = function Header(_ref) {
  var children = _ref.children,
      logo = _ref.logo;
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    className: "App-logo",
    alt: "logo"
  }), children);
};

var Link = function Link(_ref2) {
  var _ref2$href = _ref2.href,
      href = _ref2$href === void 0 ? "https://reactjs.org" : _ref2$href,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? "_blank" : _ref2$target,
      _ref2$rel = _ref2.rel,
      rel = _ref2$rel === void 0 ? "noopener noreferrer" : _ref2$rel,
      children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement("a", {
    className: "App-link",
    href: href,
    target: target,
    rel: rel
  }, children);
};

var _default = App;
exports.default = _default;