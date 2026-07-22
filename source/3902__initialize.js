// Module ID: 3902
// Function ID: 32297
// Name: _initialize
// Dependencies: []

// Module 3902 (_initialize)
let closure_0 = importDefault(dependencyMap[0]);
const NitroModules = arg1(dependencyMap[1]).NitroModules;
let closure_1 = NitroModules.createHybridObject("RiveRuntime");
const obj = {};
(arg0) => {
  async function _initialize() {
    yield closure_1.initialize();
    if (!closure_1.isInitialized) {
      let _Error = Error;
      const initError = closure_1.initError;
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
    const obj = { isInitialized: closure_1.isInitialized };
    const initError = closure_1.initError;
    let tmp;
    if (null != initError) {
      tmp = initError;
    }
    obj.error = tmp;
    return obj;
  };
}(obj);

export const RiveRuntime = obj;
