// Module ID: 3904
// Function ID: 32303
// Name: _initialize
// Dependencies: [5, 3862]

// Module 3904 (_initialize)
import asyncGeneratorStep from "asyncGeneratorStep";
import { NitroModules } from "module_3862";

let closure_1 = NitroModules.createHybridObject("RiveRuntime");
let obj = {};
((arg0) => {
  async function _initialize() {
    yield outer3_1.initialize();
    if (!outer3_1.isInitialized) {
      let _Error = Error;
      const initError = outer3_1.initError;
      let str = "Unknown error";
      if (null != initError) {
        str = initError;
      }
      const _HermesInternal = HermesInternal;
      const prototype = _Error.prototype;
      _Error = new _Error("Rive initialization failed: " + str);
      throw _Error;
    }
  }
  arg0.initialize = function initialize() {
    return _initialize(...arguments);
  };
  arg0.getStatus = function getStatus() {
    const obj = { isInitialized: outer1_1.isInitialized };
    const initError = outer1_1.initError;
    let tmp;
    if (null != initError) {
      tmp = initError;
    }
    obj.error = tmp;
    return obj;
  };
})(obj);

export const RiveRuntime = obj;
