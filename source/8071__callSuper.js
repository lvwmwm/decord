// Module ID: 8071
// Function ID: 64014
// Name: _callSuper
// Dependencies: [0, 5, 11]

// Module 8071 (_callSuper)
import result from "result";
import asyncGeneratorStep from "asyncGeneratorStep";
import checkLogForPII from "checkLogForPII";

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return checkLogForPII(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class FeComponentTransferFunction {
    constructor() {
      tmp = result(this, FeComponentTransferFunction);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_7(this, FeComponentTransferFunction, items.concat(array));
      tmp3.channel = "UNKNOWN";
      return tmp3;
    }
  }
  const arg1 = FeComponentTransferFunction;
  callback3(FeComponentTransferFunction, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const result = FeComponentTransferFunction(closure_1[5]).warnUnimplementedFilter();
        return null;
      }
    }
  ];
  return callback(FeComponentTransferFunction, items);
}(importDefault(dependencyMap[6]));
tmp2.defaultProps = { tableValues: [] };
const tmp3 = (arg0) => {
  class FeFuncR {
    constructor() {
      tmp = result(this, FeFuncR);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_7(this, FeFuncR, items.concat(array));
      tmp3.channel = "R";
      return tmp3;
    }
  }
  const arg1 = FeFuncR;
  callback3(FeFuncR, arg0);
  return callback(FeFuncR);
}(tmp2);
tmp3.displayName = "FeFuncR";
const tmp4 = (arg0) => {
  class FeFuncG {
    constructor() {
      tmp = result(this, FeFuncG);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_7(this, FeFuncG, items.concat(array));
      tmp3.channel = "G";
      return tmp3;
    }
  }
  const arg1 = FeFuncG;
  callback3(FeFuncG, arg0);
  return callback(FeFuncG);
}(tmp2);
tmp4.displayName = "FeFuncG";
const tmp5 = (arg0) => {
  class FeFuncB {
    constructor() {
      tmp = result(this, FeFuncB);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_7(this, FeFuncB, items.concat(array));
      tmp3.channel = "B";
      return tmp3;
    }
  }
  const arg1 = FeFuncB;
  callback3(FeFuncB, arg0);
  return callback(FeFuncB);
}(tmp2);
tmp5.displayName = "FeFuncB";
const tmp6 = (arg0) => {
  class FeFuncA {
    constructor() {
      tmp = result(this, FeFuncA);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = closure_7(this, FeFuncA, items.concat(array));
      tmp3.channel = "A";
      return tmp3;
    }
  }
  const arg1 = FeFuncA;
  callback3(FeFuncA, arg0);
  return callback(FeFuncA);
}(tmp2);
tmp6.displayName = "FeFuncA";

export default tmp2;
export const FeFuncR = tmp3;
export const FeFuncG = tmp4;
export const FeFuncB = tmp5;
export const FeFuncA = tmp6;
