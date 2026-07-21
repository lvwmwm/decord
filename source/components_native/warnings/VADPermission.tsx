// Module ID: 15480
// Function ID: 118085
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 15480 (_isNativeReflectConstruct)
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import closure_7 from "result";
import { jsx } from "result";
import importAllResult from "result";
import result from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
result = result.fileFinishedImporting("components_native/warnings/VADPermission.tsx");

export default (Component) => {
  class VADPermission {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, VADPermission);
      items1 = [...items];
      obj = closure_6(VADPermission);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.close = () => {
        callback(closure_2[7]).clearVADWarning();
      };
      return tmp2Result;
    }
  }
  const arg1 = VADPermission;
  callback2(VADPermission, Component);
  const items = [
    {
      key: "render",
      value() {
        const obj = {};
        const intl = VADPermission(closure_2[9]).intl;
        obj.title = intl.string(VADPermission(closure_2[9]).t.NYklhr);
        const intl2 = VADPermission(closure_2[9]).intl;
        obj.body = intl2.string(VADPermission(closure_2[9]).t.EJ26Oh);
        obj.onConfirm = this.close;
        return callback4(callback(closure_2[8]), obj);
      }
    }
  ];
  return callback(VADPermission, items);
}(require("result").Component);
