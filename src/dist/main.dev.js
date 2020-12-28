"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _secret = _interopRequireDefault(require("./utils/secret"));

var _store = _interopRequireDefault(require("./store"));

var _axios = _interopRequireDefault(require("axios"));

var _jsMd = _interopRequireDefault(require("js-md5"));

var _elementUi = _interopRequireDefault(require("element-ui"));

var _echarts = _interopRequireDefault(require("echarts"));

require("element-ui/lib/theme-chalk/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import './assets/element-variables.scss'
_vue["default"].prototype.$echarts = _echarts["default"];
_vue["default"].prototype.$aesUtils = _secret["default"];
_vue["default"].prototype.$axios = _axios["default"];
_vue["default"].prototype.$md5 = _jsMd["default"];
_vue["default"].config.productionTip = false;

_vue["default"].use(_elementUi["default"]); // const a = Vue.prototype.$aesUtils.Encrypt('11')
// console.log(Vue.prototype.$aesUtils.Decrypt(a))


new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');