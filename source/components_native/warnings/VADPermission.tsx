// Module ID: 15605
// Function ID: 120302
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 33, 15602, 4561, 1212, 2]

// Module 15605 (_isNativeReflectConstruct)
import jsxProd from "jsxProd";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const tmp3 = ((Component) => {
  class VADPermission {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, VADPermission);
      items1 = [...items];
      obj = outer1_6(VADPermission);
      tmp2 = outer1_5;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.close = () => {
        outer2_1(outer2_2[7]).clearVADWarning();
      };
      return tmp2Result;
    }
  }
  callback2(VADPermission, Component);
  let items = [
    {
      key: "render",
      value() {
        const obj = {};
        const intl = VADPermission(outer1_2[9]).intl;
        obj.title = intl.string(VADPermission(outer1_2[9]).t.NYklhr);
        const intl2 = VADPermission(outer1_2[9]).intl;
        obj.body = intl2.string(VADPermission(outer1_2[9]).t.EJ26Oh);
        obj.onConfirm = this.close;
        return outer1_8(outer1_1(outer1_2[8]), obj);
      }
    }
  ];
  return callback(VADPermission, items);
})(require("result").Component);
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/warnings/VADPermission.tsx");

export default tmp3;
