webpackHotUpdate("static\\development\\pages\\update.js",{

/***/ "./components/UpdateMember.js":
/*!************************************!*\
  !*** ./components/UpdateMember.js ***!
  \************************************/
/*! exports provided: default, UPDATE_MEMBER_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MEMBER_MUTATION", function() { return UPDATE_MEMBER_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _ViewMembers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ViewMembers */ "./components/ViewMembers.js");

var _jsxFileName = "C:\\Users\\Acer valued customer\\Documents\\programming\\masons\\frontend\\components\\UpdateMember.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_MEMBER_MUTATION($id: ID!) {\n    deleteMember(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation UPDATE_ITEM_MUTATION(\n    $id: ID!\n    $firstName: String\n    $lastName: String\n    $middleName: String\n    $birthDate: DateTime\n    $streetAddress: String\n    $city: String\n    $state: String\n    $zip: String\n    $landPhone: String\n    $cellPhone: String\n    $email: String\n  ) {\n    updateMember(\n      id: $id\n      firstName: $firstName\n      lastName: $lastName\n      middleName: $middleName\n      birthDate: $birthDate\n      streetAddress: $streetAddress\n      city: $city\n      state: $state\n      zip: $zip\n      landPhone: $landPhone\n      cellPhone: $cellPhone\n      email: $email\n    ) {\n      id\n      firstName\n      lastName\n      middleName\n      birthDate\n      streetAddress\n      city\n      state\n      zip\n      landPhone\n      cellPhone\n      email\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_MEMBER_QUERY($id: ID!) {\n    member(where: { id: $id }) {\n      id\n      firstName\n      lastName\n      middleName\n      birthDate\n      streetAddress\n      city\n      state\n      zip\n      landPhone\n      cellPhone\n      email\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var SINGLE_MEMBER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var UPDATE_MEMBER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var DELETE_MEMBER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject3());

var UpdateMember =
/*#__PURE__*/
function (_Component) {
  _inherits(UpdateMember, _Component);

  function UpdateMember() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UpdateMember);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UpdateMember)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "update", function (cache, payload) {
      // manually update the cache on the client, so it matches the server
      // 1. Read the cache for the items we want
      var data = cache.readQuery({
        query: _ViewMembers__WEBPACK_IMPORTED_MODULE_6__["default"]
      });
      console.log(data, payload); // 2. Filter the deleted itemout of the page

      data.members = data.members.filter(function (member) {
        return member.id !== payload.data.deleteMember.id;
      }); // 3. Put the items back!

      cache.writeQuery({
        query: _ViewMembers__WEBPACK_IMPORTED_MODULE_6__["default"],
        data: data
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === "number" ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_this), "updateMember",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, updateMemberMutation) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log(_this.state);
                _context.next = 4;
                return updateMemberMutation({
                  variables: _objectSpread({
                    id: _this.props.id
                  }, _this.state)
                });

              case 4:
                res = _context.sent;
                console.log("Updated!");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(UpdateMember, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: SINGLE_MEMBER_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, function (_ref2) {
        var data = _ref2.data,
            loading = _ref2.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, "Loading...");
        if (!data.member) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, "No member found for ID ", _this2.props.id);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
          mutation: UPDATE_MEMBER_MUTATION,
          variables: _this2.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, function (updateMember, _ref3) {
          var loading = _ref3.loading,
              error = _ref3.error;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
            onSubmit: function onSubmit(e) {
              if (confirm('Are you sure you want to update?')) {
                _this2.updateMember(e, updateMember);
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "firstName",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          }, "First Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "firstName",
            name: "firstName",
            placeholder: "First Name",
            required: true,
            defaultValue: data.member.firstName,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "middleName",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, "Middle Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "middleName",
            name: "middleName",
            placeholder: "Middle Name",
            defaultValue: data.member.middleName,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "lastName",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, "Last Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "lastName",
            name: "lastName",
            placeholder: "Last Name",
            required: true,
            defaultValue: data.member.lastName,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "birthDate",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, "Date of Birth", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "date",
            id: "birthDate",
            name: "birthDate",
            placeholder: "Birth Date",
            defaultValue: data.member.birthDate.slice(0, 10),
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "streetAddress",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, "Street Address", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "streetAddress",
            name: "streetAddress",
            placeholder: "Street Address",
            defaultValue: data.member.streetAddress,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "city",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            },
            __self: this
          }, "City", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "city",
            name: "city",
            placeholder: "City",
            defaultValue: data.member.city,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "state",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 198
            },
            __self: this
          }, "State", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "state",
            name: "state",
            placeholder: "State",
            defaultValue: data.member.state,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "zip",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }, "Zip", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "number",
            id: "zip",
            name: "zip",
            placeholder: "Zip",
            defaultValue: data.member.zip,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 211
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "landPhone",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 221
            },
            __self: this
          }, "Landline (Format: 123-456-7890)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "tel",
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            id: "landPhone",
            name: "landPhone",
            placeholder: "Land Phone",
            defaultValue: data.member.landPhone,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "cellPhone",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          }, "Cell Phone (Format: 123-456-7890)", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "tel",
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            id: "cellPhone",
            name: "cellPhone",
            placeholder: "Cell Phone",
            defaultValue: data.member.cellPhone,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 235
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "email",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            },
            __self: this
          }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "email",
            id: "email",
            name: "email",
            placeholder: "Email",
            defaultValue: data.member.email,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 247
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 257
            },
            __self: this
          }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
            mutation: DELETE_MEMBER_MUTATION,
            variables: {
              id: _this2.props.id
            },
            update: _this2.update,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 259
            },
            __self: this
          }, function (deleteMember, _ref4) {
            var error = _ref4.error;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
              onClick: function onClick() {
                if (confirm("Are you sure you want to delete this member?")) {
                  deleteMember().catch(function (err) {
                    alert(err.message);
                  });
                }
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 265
              },
              __self: this
            }, "Delete Member");
          })));
        });
      });
    }
  }]);

  return UpdateMember;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UpdateMember);


/***/ })

})
//# sourceMappingURL=update.js.81a255ac10f3bad9a355.hot-update.js.map