// Module ID: 1742
// Function ID: 19511
// Name: FrameCallbackRegistryJS
// Dependencies: [6, 7, 1743, 1626]

// Module 1742 (FrameCallbackRegistryJS)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
let closure_5 = { code: "function pnpm_FrameCallbackRegistryJSTs1(){const{callback,callbackId}=this.__closure;global._frameCallbackRegistry.registerFrameCallback(callback,callbackId);}" };
let closure_6 = { code: "function pnpm_FrameCallbackRegistryJSTs2(){const{callbackId}=this.__closure;global._frameCallbackRegistry.unregisterFrameCallback(callbackId);}" };
let closure_7 = { code: "function pnpm_FrameCallbackRegistryJSTs3(){const{callbackId,state}=this.__closure;global._frameCallbackRegistry.manageStateFrameCallback(callbackId,state);}" };

export default (() => {
  class FrameCallbackRegistryJS {
    constructor() {
      tmp = outer1_3(this, FrameCallbackRegistryJS);
      this.nextCallbackId = 0;
      obj = outer1_1(outer1_2[2]);
      prepareUIRegistryResult = obj.prepareUIRegistry();
      return;
    }
  }
  let obj = {
    key: "registerFrameCallback",
    value: function registerFrameCallback(callback) {
      const self = this;
      let closure_0 = callback;
      if (callback) {
        const nextCallbackId = self.nextCallbackId;
        self.nextCallbackId = self.nextCallbackId + 1;
        let obj = outer1_1(outer1_2[3]);
        /* worklet (recovered source) */ function pnpm_FrameCallbackRegistryJSTs1(){const{callback,callbackId}=this.__closure;global._frameCallbackRegistry.registerFrameCallback(callback,callbackId);}
        obj = { callback, callbackId: nextCallbackId };
        pnpm_FrameCallbackRegistryJSTs1.__closure = obj;
        pnpm_FrameCallbackRegistryJSTs1.__workletHash = 11361563554462;
        pnpm_FrameCallbackRegistryJSTs1.__initData = outer1_5;
        obj.runOnUI(pnpm_FrameCallbackRegistryJSTs1)();
        return nextCallbackId;
      } else {
        return -1;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "unregisterFrameCallback",
    value: function unregisterFrameCallback(callbackId) {
      let closure_0 = callbackId;
      /* worklet (recovered source) */ function pnpm_FrameCallbackRegistryJSTs2(){const{callbackId}=this.__closure;global._frameCallbackRegistry.unregisterFrameCallback(callbackId);}
      pnpm_FrameCallbackRegistryJSTs2.__closure = { callbackId };
      pnpm_FrameCallbackRegistryJSTs2.__workletHash = 9182274559334;
      pnpm_FrameCallbackRegistryJSTs2.__initData = outer1_6;
      outer1_1(outer1_2[3]).runOnUI(pnpm_FrameCallbackRegistryJSTs2)();
    }
  };
  items[1] = obj;
  obj = {
    key: "manageStateFrameCallback",
    value: function manageStateFrameCallback(callbackId, state) {
      let closure_0 = callbackId;
      let closure_1 = state;
      /* worklet (recovered source) */ function pnpm_FrameCallbackRegistryJSTs3(){const{callbackId,state}=this.__closure;global._frameCallbackRegistry.manageStateFrameCallback(callbackId,state);}
      pnpm_FrameCallbackRegistryJSTs3.__closure = { callbackId, state };
      pnpm_FrameCallbackRegistryJSTs3.__workletHash = 5244475777443;
      pnpm_FrameCallbackRegistryJSTs3.__initData = outer1_7;
      outer1_1(outer1_2[3]).runOnUI(pnpm_FrameCallbackRegistryJSTs3)();
    }
  };
  items[2] = obj;
  return callback(FrameCallbackRegistryJS, items);
})();
