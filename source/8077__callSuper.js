// Module ID: 8077
// Function ID: 64061
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 8034, 8057]

// Module 8077 (_callSuper)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import tmp2 from "_isNativeReflectConstruct";

const require = arg1;
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
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { type: "identity", tableValues: [], slope: 1, intercept: 0, amplitude: 1, exponent: 1, offset: 0 };
tmp2.defaultProps = obj;
let tmp3 = ((arg0) => {
  class FeFuncR {
    constructor() {
      tmp = outer1_2(this, FeFuncR);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_7(this, FeFuncR, items.concat(array));
      tmp3.channel = "R";
      return tmp3;
    }
  }
  callback3(FeFuncR, arg0);
  return callback(FeFuncR);
})(tmp2);
tmp3.displayName = "FeFuncR";
const tmp4 = ((arg0) => {
  class FeFuncG {
    constructor() {
      tmp = outer1_2(this, FeFuncG);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_7(this, FeFuncG, items.concat(array));
      tmp3.channel = "G";
      return tmp3;
    }
  }
  callback3(FeFuncG, arg0);
  return callback(FeFuncG);
})(tmp2);
tmp4.displayName = "FeFuncG";
const tmp5 = ((arg0) => {
  class FeFuncB {
    constructor() {
      tmp = outer1_2(this, FeFuncB);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_7(this, FeFuncB, items.concat(array));
      tmp3.channel = "B";
      return tmp3;
    }
  }
  callback3(FeFuncB, arg0);
  return callback(FeFuncB);
})(tmp2);
tmp5.displayName = "FeFuncB";
const tmp6 = ((arg0) => {
  class FeFuncA {
    constructor() {
      tmp = outer1_2(this, FeFuncA);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      tmp3 = outer1_7(this, FeFuncA, items.concat(array));
      tmp3.channel = "A";
      return tmp3;
    }
  }
  callback3(FeFuncA, arg0);
  return callback(FeFuncA);
})(tmp2);
tmp6.displayName = "FeFuncA";

export default tmp2;
export const FeFuncR = tmp3;
export const FeFuncG = tmp4;
export const FeFuncB = tmp5;
export const FeFuncA = tmp6;
