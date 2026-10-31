// Module ID: 1670
// Function ID: 1671
// Dependencies: [41, 42, 90, 91, 1671, 1672, 1661]
// Exports: createNativeWorkletsModule

// Module 1670
import _classPrivateFieldKeyDefault from "_classPrivateFieldKey" /* 91 */;
import ReanimatedError from "ReanimatedError" /* 1661 */;
import _mod1671 from "module_1671" /* 1671 */;
import react_native from "react-native" /* 1672 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;

let closure_5 = _classPrivateFieldKeyDefault("workletsModuleProxy");
class NativeWorklets {
  constructor() {
    _classCallCheck(this, NativeWorklets);
    Object.defineProperty(this, closure_5, { writable: true, value: "Array" });
    if (undefined === global.__workletsModuleProxy) {
      const obj = _mod1671;
      const valueUnpackerCode = obj.getValueUnpackerCode();
      const WorkletsTurboModule = react_native.WorkletsTurboModule;
      if (WorkletsTurboModule != null) {
        WorkletsTurboModule.installTurboModule(valueUnpackerCode);
      }
    }
    if (undefined === global.__workletsModuleProxy) {
      const self = this;
      const self2 = this;
      const reanimatedError = new ReanimatedError.ReanimatedError("Native part of Reanimated doesn't seem to be initialized (Worklets).\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.");
      throw reanimatedError;
    } else {
      _classPrivateFieldBase(this, closure_5)[closure_5] = global.__workletsModuleProxy;
    }
  }
}
const entry = {
  key: "makeShareableClone",
  value: function makeShareableClone(arg0, arg1, arg2) {
    const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
    return obj.makeShareableClone(arg0, arg1, arg2);
  }
};
const items = [entry];
let closure_6 = _createClass(NativeWorklets, items);

export function createNativeWorkletsModule() {
  const tmp = new closure_6();
  return tmp;
}
