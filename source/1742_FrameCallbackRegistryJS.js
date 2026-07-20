// Module ID: 1742
// Function ID: 19504
// Name: FrameCallbackRegistryJS
// Dependencies: []

// Module 1742 (FrameCallbackRegistryJS)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = { code: "function pnpm_FrameCallbackRegistryJSTs1(){const{callback,callbackId}=this.__closure;global._frameCallbackRegistry.registerFrameCallback(callback,callbackId);}" };
let closure_6 = { code: "function pnpm_FrameCallbackRegistryJSTs2(){const{callbackId}=this.__closure;global._frameCallbackRegistry.unregisterFrameCallback(callbackId);}" };
let closure_7 = { code: "function pnpm_FrameCallbackRegistryJSTs3(){const{callbackId,state}=this.__closure;global._frameCallbackRegistry.manageStateFrameCallback(callbackId,state);}" };

export default () => {
  class FrameCallbackRegistryJS {
    constructor() {
      tmp = closure_3(this, FrameCallbackRegistryJS);
      this.nextCallbackId = 0;
      obj = closure_1(closure_2[2]);
      prepareUIRegistryResult = obj.prepareUIRegistry();
      return;
    }
  }
  const global = FrameCallbackRegistryJS;
  let obj = {
    key: "registerFrameCallback",
    value: function registerFrameCallback(callback) {
      const self = this;
      if (callback) {
        const nextCallbackId = self.nextCallbackId;
        self.nextCallbackId = self.nextCallbackId + 1;
        let obj = nextCallbackId(closure_2[3]);
        /* worklet (recovered source) */ function pnpm_FrameCallbackRegistryJSTs1(){const{callback,callbackId}=this.__closure;global._frameCallbackRegistry.registerFrameCallback(callback,callbackId);}
        obj = { callback, callbackId: nextCallbackId };
        pnpm_FrameCallbackRegistryJSTs1.__closure = obj;
        pnpm_FrameCallbackRegistryJSTs1.__workletHash = 11361563554462;
        pnpm_FrameCallbackRegistryJSTs1.__initData = closure_5;
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
      /* worklet (recovered source) */ function pnpm_FrameCallbackRegistryJSTs2(){const{callbackId}=this.__closure;global._frameCallbackRegistry.unregisterFrameCallback(callbackId);}
      pnpm_FrameCallbackRegistryJSTs2.__closure = { callbackId };
      pnpm_FrameCallbackRegistryJSTs2.__workletHash = 9182274559334;
      pnpm_FrameCallbackRegistryJSTs2.__initData = closure_6;
      callback(closure_2[3]).runOnUI(pnpm_FrameCallbackRegistryJSTs2)();
    }
  };
  items[1] = obj;
  obj = {
    key: "manageStateFrameCallback",
    value: function manageStateFrameCallback(callbackId, state) {
      /* worklet (recovered source) */ function pnpm_FrameCallbackRegistryJSTs3(){const{callbackId,state}=this.__closure;global._frameCallbackRegistry.manageStateFrameCallback(callbackId,state);}
      pnpm_FrameCallbackRegistryJSTs3.__closure = { callbackId, state };
      pnpm_FrameCallbackRegistryJSTs3.__workletHash = 5244475777443;
      pnpm_FrameCallbackRegistryJSTs3.__initData = closure_7;
      state(closure_2[3]).runOnUI(pnpm_FrameCallbackRegistryJSTs3)();
    }
  };
  items[2] = obj;
  return callback(FrameCallbackRegistryJS, items);
}();
