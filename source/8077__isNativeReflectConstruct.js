// Module ID: 8077
// Function ID: 64065
// Name: _isNativeReflectConstruct
// Dependencies: [0, 5, 11]

// Module 8077 (_isNativeReflectConstruct)
import result from "result";
import asyncGeneratorStep from "asyncGeneratorStep";
import checkLogForPII from "checkLogForPII";

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
  class FeTile {
    constructor() {
      self = this;
      tmp = result(this, FeTile);
      obj = closure_5(FeTile);
      tmp2 = checkLogForPII;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = FeTile;
  callback2(FeTile, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const result = FeTile(closure_1[5]).warnUnimplementedFilter();
        return null;
      }
    }
  ];
  return callback(FeTile, items);
}(importDefault(dependencyMap[6]));
tmp2.displayName = "FeTile";
tmp2.defaultProps = Object.assign({}, tmp2.defaultPrimitiveProps);

export default tmp2;
