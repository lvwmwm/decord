// Module ID: 8071
// Function ID: 64024
// Name: _callSuper
// Dependencies: [0, 5, 11, 29, 6, 7, 15]

// Module 8071 (_callSuper)
import __exportStarResult1 from "__exportStarResult1";
import asyncGeneratorStep from "asyncGeneratorStep";
import checkLogForPII from "checkLogForPII";
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import tmp2 from "_possibleConstructorReturn";

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
const obj = { "Null": -1966325487, "Null": 259129345, "Null": -1560281087, "Null": 16777216, "Null": 28660034, "Null": 46146560, "Null": -302624512, tableValues: [] };
tmp2.defaultProps = obj;
const tmp3 = (arg0) => {
  class FeFuncR {
    constructor() {
      tmp = __exportStarResult1(this, FeFuncR);
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
      tmp = __exportStarResult1(this, FeFuncG);
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
      tmp = __exportStarResult1(this, FeFuncB);
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
      tmp = __exportStarResult1(this, FeFuncA);
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
