// Module ID: 1909
// Function ID: 1910
// Name: FrameCallbackRegistryJS
// Dependencies: [41, 42, 1910, 1708]

// Module 1909 (FrameCallbackRegistryJS)
import _createClassDefault from "_createClass" /* 42 */;
import _mod1708 from "module_1708" /* 1708 */;
import FrameCallbackRegistryUI from "FrameCallbackRegistryUI" /* 1910 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const require = globalThis.__r;
let _require;

let closure_4 = { code: "(function pnpm_FrameCallbackRegistryJSTs1(){let[callback,callbackId]=this.__closure;global._frameCallbackRegistry.registerFrameCallback(callback,callbackId);})" };
let closure_5 = { code: "(function pnpm_FrameCallbackRegistryJSTs2(){let[callbackId]=this.__closure;global._frameCallbackRegistry.unregisterFrameCallback(callbackId);})" };
let closure_6 = { code: "(function pnpm_FrameCallbackRegistryJSTs3(){let[callbackId,state]=this.__closure;global._frameCallbackRegistry.manageStateFrameCallback(callbackId,state);})" };
class FrameCallbackRegistryJS {
  constructor() {
    _classCallCheck(this, FrameCallbackRegistryJS);
    this.nextCallbackId = 0;
    const obj = FrameCallbackRegistryUI;
    obj.prepareUIRegistry();
  }
}
const entry = {
  key: "registerFrameCallback",
  value: function registerFrameCallback(arg0) {
    let c1;
    let tmp6;
    let tmp7;
    let tmp8;
    const tmp = arg0;
    if (tmp) {
      const self = this;
      this.nextCallbackId = this.nextCallbackId + 1;
      const items = [closure_4, arg0, this.nextCallbackId];
      let c0;
      const obj = require("module_1708");
      _require = undefined;
      [tmp6, tmp7, tmp8] = items;
      function pnpm_FrameCallbackRegistryJSTs1() {
        const _frameCallbackRegistry = global._frameCallbackRegistry;
        const result = _frameCallbackRegistry.registerFrameCallback(c0, c1);
      }
      const items1 = [tmp7, tmp8];
      pnpm_FrameCallbackRegistryJSTs1.__closure = items1;
      pnpm_FrameCallbackRegistryJSTs1.__workletHash = 1727987270919;
      pnpm_FrameCallbackRegistryJSTs1.__initData = tmp6;
      obj.scheduleOnUI(pnpm_FrameCallbackRegistryJSTs1);
      return this.nextCallbackId;
    } else {
      return -1;
    }
  }
};
let items = [
  entry,
  {
    key: "unregisterFrameCallback",
    value: function unregisterFrameCallback(arg0) {
      let tmp;
      let tmp2;
      const items = [closure_5, arg0];
      let c0;
      [tmp, tmp2] = items;
      function pnpm_FrameCallbackRegistryJSTs2() {
        const _frameCallbackRegistry = global._frameCallbackRegistry;
        const result = _frameCallbackRegistry.unregisterFrameCallback(c0);
      }
      const items1 = [tmp2];
      pnpm_FrameCallbackRegistryJSTs2.__closure = items1;
      pnpm_FrameCallbackRegistryJSTs2.__workletHash = 16252844434239;
      pnpm_FrameCallbackRegistryJSTs2.__initData = tmp;
      const obj = _mod1708;
      obj.scheduleOnUI(pnpm_FrameCallbackRegistryJSTs2);
    }
  },
  {
    key: "manageStateFrameCallback",
    value: function manageStateFrameCallback(arg0, arg1) {
      let c1;
      let tmp;
      let tmp2;
      let tmp3;
      const items = [closure_6, arg0, arg1];
      let c0;
      const obj = require("module_1708");
      _require = undefined;
      [tmp, tmp2, tmp3] = items;
      function pnpm_FrameCallbackRegistryJSTs3() {
        const _frameCallbackRegistry = global._frameCallbackRegistry;
        const result = _frameCallbackRegistry.manageStateFrameCallback(c0, c1);
      }
      const items1 = [tmp2, tmp3];
      pnpm_FrameCallbackRegistryJSTs3.__closure = items1;
      pnpm_FrameCallbackRegistryJSTs3.__workletHash = 10816624609914;
      pnpm_FrameCallbackRegistryJSTs3.__initData = tmp;
      obj.scheduleOnUI(pnpm_FrameCallbackRegistryJSTs3);
    }
  }
];

export default _createClassDefault(FrameCallbackRegistryJS, items);
