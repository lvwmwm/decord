// Module ID: 15648
// Function ID: 120607
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 12727, 33, 15649, 1212, 15650, 15651, 4561, 2]

// Module 15648 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
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
  class Suppressed {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, Suppressed);
      items1 = [...items];
      obj = outer1_6(Suppressed);
      tmp2 = outer1_5;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.close = () => {
        outer2_1(outer2_2[8]).clearSuppressWarning();
      };
      return tmp2Result;
    }
  }
  callback2(Suppressed, Component);
  let items = [
    {
      key: "render",
      value() {
        const intl = Suppressed(outer1_2[9]).intl;
        const string = intl.string;
        const t = Suppressed(outer1_2[9]).t;
        if (isAFKChannelResult) {
          let stringResult = string(t.KuYcnU);
          const intl3 = tmp2(tmp3[9]).intl;
          let stringResult1 = intl3.string(tmp2(tmp3[9]).t["RaFZ3+"]);
          let tmp7 = outer1_1(tmp3[10]);
        } else {
          stringResult = string(t.FJSZVM);
          const intl2 = tmp2(tmp3[9]).intl;
          stringResult1 = intl2.string(tmp2(tmp3[9]).t.etJjgW);
          tmp7 = outer1_1(tmp3[11]);
        }
        const obj = { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close };
        return outer1_9(outer1_1(outer1_2[12]), obj);
      }
    }
  ];
  return callback(Suppressed, items);
})(require("result").Component);
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default tmp3;
