// Module ID: 161
// Function ID: 2461
// Name: _isNativeReflectConstruct
// Dependencies: [180, 183, 70]

// Module 161 (_isNativeReflectConstruct)
import Timing from "Timing";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_70 from "module_70";

function _isNativeReflectConstruct() {
  let Timing = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return Timing;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[6]);
const importDefaultResult1 = importDefault(dependencyMap[7]);
let closure_6 = { "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": -1273973744, "Bool(true)": -1406091899, "Bool(true)": -1363101585, "Bool(true)": "COMMANDS_MIGRATION_UPSELL_MODAL", "Bool(true)": "application_user_id", "Bool(true)": "isArray", "Bool(true)": "isArray" };
let obj = {};
let closure_7 = importDefaultResult1("name");
let closure_8 = importDefaultResult1("code");
const tmp4 = (arg0) => {
  class DOMException {
    constructor(arg0, arg1) {
      self = this;
      tmp = DOMException(this, DOMException);
      items = [];
      items[0] = arg0;
      obj = closure_3(DOMException);
      tmp2 = module_70;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      definePropertyResult = Object.defineProperty(tmp2Result, closure_7, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(tmp2Result, closure_8, { writable: true, value: undefined });
      if (undefined === arg1) {
        tmp17 = closure_5;
        tmp18 = closure_7;
        str = "Error";
        closure_5(tmp2Result, closure_7)[closure_7] = "Error";
        tmp19 = closure_8;
        num2 = 0;
        closure_5(tmp2Result, closure_8)[closure_8] = 0;
      } else {
        tmp9 = closure_5;
        tmp10 = closure_7;
        _String = String;
        tmp11 = closure_5(tmp2Result, closure_7);
        tmp11[closure_7] = String(arg1);
        tmp12 = closure_8;
        tmp14 = closure_6;
        tmp15 = closure_6[tmp2Result.name];
        tmp16 = null;
        num = 0;
        tmp13 = closure_5(tmp2Result, closure_8);
        if (null != tmp15) {
          num = tmp15;
        }
        tmp13[tmp12] = num;
      }
      return tmp2Result;
    }
  }
  let Timing = DOMException;
  callback2(DOMException, arg0);
  let obj = {
    key: "name",
    get() {
      return callback2(this, closure_7)[closure_7];
    }
  };
  const items = [obj, ];
  obj = {
    key: "code",
    get() {
      return callback2(this, closure_8)[closure_8];
    }
  };
  items[1] = obj;
  return callback(DOMException, items);
}(importDefault(dependencyMap[5])(Error));
for (const key10049 in obj) {
  let tmp6 = key10049;
  let _Object = Object;
  obj = { enumerable: true };
  obj.value = obj[key10049];
  let definePropertyResult1 = Object.defineProperty(tmp4, key10049, obj);
  let _Object2 = Object;
  obj = { enumerable: true };
  obj.value = obj[key10049];
  let definePropertyResult2 = Object.defineProperty(tmp4.prototype, key10049, obj);
}
let obj1 = arg1(dependencyMap[8]);
obj1 = {
  clone(message) {
    return new tmp4(message.message, message.name);
  }
};
obj1.setPlatformObject(tmp4, obj1);

export default tmp4;
