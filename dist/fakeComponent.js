"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();var _react=require("react"),_react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return call&&("object"==typeof call||"function"==typeof call)?call:self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var a=function(_React$Component){function a(){return _classCallCheck(this,a),_possibleConstructorReturn(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return _inherits(a,_React$Component),_createClass(a,[{key:"render",value:function render(){var b=this.props.fake,c="fake "+b.type+" "+(b.className||""),d=void 0,e=void 0,f=void 0;switch(b.type){case"p":case"c":d=Array(b.line).fill(),f=Array(b.repeat||1).fill(),e=b.header||!1;default:}return _react2.default.createElement("div",{className:c,style:b.styleForComponent},f.map(function(g,h){return _react2.default.createElement("div",{key:h,className:"r"},"p"===b.type&&_react2.default.createElement("div",{className:"p"},e&&_react2.default.createElement("div",{style:b.styleForHeader,className:"h"}),d.map(function(j,k){return _react2.default.createElement("div",{style:b.styleForLine,key:k,className:"l"})}))||"c"===b.type&&_react2.default.createElement("div",{className:"c"},_react2.default.createElement("div",{className:"a",style:b.styleForAvatar}),_react2.default.createElement("div",{className:"d"},e&&_react2.default.createElement("div",{style:b.styleForHeader,className:"h"}),d.map(function(j,k){return _react2.default.createElement("div",{style:b.styleForLine,key:k,className:"l"})}))),_react2.default.createElement("div",{className:"dd",style:b.styleForDivider}))}))}}]),a}(_react2.default.Component);exports.default=a;
