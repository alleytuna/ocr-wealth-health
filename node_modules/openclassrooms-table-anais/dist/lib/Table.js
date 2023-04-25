"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./style.css");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Table = function Table(_ref) {
  var data = _ref.data;
  var _useState = (0, _react.useState)(data.length ? Object.keys(data[0]) : []),
    _useState2 = _slicedToArray(_useState, 2),
    tableHeaders = _useState2[0],
    setTableHeaders = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    sortOrder = _useState4[0],
    setSortOrder = _useState4[1];
  var _useState5 = (0, _react.useState)(2),
    _useState6 = _slicedToArray(_useState5, 2),
    numberOfRowsDisplayed = _useState6[0],
    setNumberOfRowsDisplayed = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    searchWord = _useState8[0],
    setSearchWord = _useState8[1];
  var _useState9 = (0, _react.useState)(1),
    _useState10 = _slicedToArray(_useState9, 2),
    currentPage = _useState10[0],
    setCurrentPage = _useState10[1];
  var _useState11 = (0, _react.useState)(data.length ? data.slice(0, numberOfRowsDisplayed) : []),
    _useState12 = _slicedToArray(_useState11, 2),
    sortedData = _useState12[0],
    setSortedData = _useState12[1];
  var totalPages = Math.ceil(data.length / numberOfRowsDisplayed);
  var handleSort = function handleSort(column) {
    var sortDirection = sortOrder[column] === "asc" ? "desc" : "asc";
    var sorted = data.sort(function (a, b) {
      if (a[column] < b[column]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });
    setSortOrder(_defineProperty({}, column, sortDirection));
    setSortedData(sorted.slice(0, numberOfRowsDisplayed));
  };
  var handleSearch = function handleSearch(event) {
    var searchedWord = event.target.value;
    setSearchWord(searchedWord);
    var filtered = data.filter(function (item) {
      return Object.values(item).some(function (value) {
        return value.toString().toLowerCase().includes(searchedWord.toLowerCase());
      });
    });
    setSortedData(filtered);
  };
  var handleNumberOfRowsDisplayed = function handleNumberOfRowsDisplayed(event) {
    var selectedValue = parseInt(event.target.value);
    var sliced = data.slice(0, selectedValue);
    setNumberOfRowsDisplayed(selectedValue);
    setSortedData(sliced);
    setCurrentPage(1);
  };
  var handlePrevPage = function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      var start = (currentPage - 2) * numberOfRowsDisplayed;
      var end = start + numberOfRowsDisplayed;
      setSortedData(data.slice(start, end));
    }
  };
  var handleNextPage = function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      var start = currentPage * numberOfRowsDisplayed;
      var end = start + numberOfRowsDisplayed;
      setSortedData(data.slice(start, end));
    }
  };
  var handleInputPage = function handleInputPage(event) {
    event.preventDefault();
    var inputValue = parseInt(event.target.value);
    if (inputValue > 0 && inputValue <= totalPages) {
      setCurrentPage(inputValue);
      var start = (inputValue - 1) * numberOfRowsDisplayed;
      var end = start + numberOfRowsDisplayed;
      setSortedData(data.slice(start, end));
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "allTable",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "accessoriesDisplay",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "numberOfPagesSelector",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Show"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
          value: numberOfRowsDisplayed,
          onChange: handleNumberOfRowsDisplayed,
          className: "selectEntriesAndSearchBarInput",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: "2",
            children: "2"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: "4",
            children: "4"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
            value: "6",
            children: "6"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "entries"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "searchBar",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Search:"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          value: searchWord,
          onChange: handleSearch,
          className: "selectEntriesAndSearchBarInput"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
          children: tableHeaders.map(function (column) {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)("th", {
              onClick: function onClick() {
                return handleSort(column);
              },
              children: [column, sortOrder[column] === "asc" ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "\u25B2"
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "\u25BC"
              })]
            }, column);
          })
        })
      }), sortedData && sortedData.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
        children: sortedData.map(function (item, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
            children: Object.keys(item).map(function (key) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                children: item[key]
              }, key);
            })
          }, index);
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
            colSpan: tableHeaders.length,
            children: "There is no data to display."
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "accessoriesDisplay",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "showingEntriesText",
        children: ["Showing ", currentPage, " to ", totalPages, " of ", totalPages, " entries"]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pagesChanger",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: function onClick() {
            return handlePrevPage();
          },
          children: "Previous"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: "text",
          placeholder: currentPage,
          value: currentPage,
          onChange: handleInputPage
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: function onClick() {
            return handleNextPage();
          },
          children: "Next"
        })]
      })]
    })]
  });
};
Table.defaultProps = {
  data: JSON
};
var _default = Table;
exports.default = _default;