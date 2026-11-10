// Module ID: 5468
// Function ID: 5469
// Name: NativeProxy
// Dependencies: [5453, 5451]

// Module 5468 (NativeProxy)
import react_nativeDefault from "react-native" /* 5451 */;

const require = globalThis.__r;
let _require, dependencyMap;

let pnpm_NativeProxyTs1;
let tmp2;
let tmp3;
let tmp4;
let obj = {
  createGestureHandler(handlerName, handlerTag, config) {
    _require = handlerName;
    let closure_1 = handlerTag;
    dependencyMap = config;
    let obj = require("selectProperties");
    const result = obj.scheduleOperationToBeFlushed(() => {
      let obj = config;
      const createGestureHandler = react_nativeDefault.createGestureHandler;
      const tmp2 = handlerName;
      const tmp3 = handlerTag;
      if (!config) {
        obj = {};
      }
      createGestureHandler(tmp2, tmp3, obj);
    });
  },
  setGestureHandlerConfig(handlerTag, result) {
    _require = handlerTag;
    let closure_1 = result;
    let obj = require("selectProperties");
    result = obj.scheduleOperationToBeFlushed(() => {
      const obj = react_nativeDefault;
      result = obj.setGestureHandlerConfig(handlerTag, closure_1);
    });
  },
  updateGestureHandlerConfig: pnpm_NativeProxyTs1,
  dropGestureHandler(handlerTag) {
    _require = handlerTag;
    let obj = require("selectProperties");
    const result = obj.scheduleOperationToBeFlushed(() => {
      const obj = react_nativeDefault;
      obj.dropGestureHandler(handlerTag);
    });
  },
  configureRelations(arg0, arg1) {
    let closure_0;
    _require = arg0;
    let closure_1 = arg1;
    let obj = require("selectProperties");
    const result = obj.scheduleOperationToBeFlushed(() => {
      const obj = react_nativeDefault;
      obj.configureRelations(closure_0, closure_1);
    });
  },
  installUIRuntimeBindings() {
    const obj = react_nativeDefault;
    return obj.installUIRuntimeBindings();
  }
};
const items = [{ code: "(function pnpm_NativeProxyTs1(handlerTag,newConfig){let[updateGestureHandlerConfig,flushOperations]=this.__closure;updateGestureHandlerConfig(handlerTag,newConfig);flushOperations();})" }, react_nativeDefault.updateGestureHandlerConfig, react_nativeDefault.flushOperations];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
pnpm_NativeProxyTs1 = function pnpm_NativeProxyTs1(arg0, arg1) {
  _undefined(arg0, arg1);
  _undefined2();
};
const items1 = [tmp3, tmp4];
pnpm_NativeProxyTs1.__closure = items1;
pnpm_NativeProxyTs1.__workletHash = 15385858546028;
pnpm_NativeProxyTs1.__initData = tmp2;

export const NativeProxy = obj;
