"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _Table = _interopRequireDefault(require("./lib/Table.jsx"));
var _sampleData = _interopRequireDefault(require("./data/sample-data.json"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var root = _reactDom.default.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.StrictMode, {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Table.default, {
      data: _sampleData.default
    })
  })
}));