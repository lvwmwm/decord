// Module ID: 8078
// Function ID: 64072
// Name: _isNativeReflectConstruct
// Dependencies: [0, 5, 11]

// Module 8078 (_isNativeReflectConstruct)
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
  class FeTurbulence {
    constructor() {
      self = this;
      tmp = result(this, FeTurbulence);
      obj = closure_5(FeTurbulence);
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
  const arg1 = FeTurbulence;
  callback2(FeTurbulence, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        const result = FeTurbulence(closure_1[5]).warnUnimplementedFilter();
        return null;
      }
    }
  ];
  return callback(FeTurbulence, items);
}(importDefault(dependencyMap[6]));
tmp2.displayName = "FeTurbulence";
tmp2.defaultProps = Object.assign({}, tmp2.defaultPrimitiveProps);

export default tmp2;
