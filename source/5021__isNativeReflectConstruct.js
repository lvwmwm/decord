// Module ID: 5021
// Function ID: 42879
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5021 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
let closure_4 = importDefault(dependencyMap[3]);
let closure_5 = importDefault(dependencyMap[4]);
let closure_6 = importDefault(dependencyMap[5]);
const importDefaultResult = importDefault(dependencyMap[0]);
const importDefaultResult2 = importDefault(dependencyMap[7]);
const items = [null, null, null];
const tmp5 = (Component) => {
  class ForceTouchFallback {
    constructor() {
      self = this;
      tmp = closure_2(this, ForceTouchFallback);
      obj = closure_5(ForceTouchFallback);
      tmp2 = closure_4;
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
  const arg1 = ForceTouchFallback;
  callback2(ForceTouchFallback, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.warn(ForceTouchFallback(closure_1[8]).tagMessage("ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase"));
    }
  };
  const items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  };
  items[1] = obj;
  return callback(ForceTouchFallback, items);
}(importDefault(dependencyMap[6]).Component);
tmp5.forceTouchAvailable = false;
let importDefaultResult3Result = tmp5;
if (null != importDefaultResult2) {
  importDefaultResult3Result = tmp5;
  if (importDefaultResult2.forceTouchAvailable) {
    const obj = { name: "ForceTouchGestureHandler" };
    const items1 = [];
    obj.allowedProps = items1.concat(importDefaultResult(arg1(dependencyMap[10]).baseGestureHandlerProps), items);
    obj.config = {};
    importDefaultResult3Result = importDefault(dependencyMap[9])(obj);
    const importDefaultResult3 = importDefault(dependencyMap[9]);
  }
}
let flag;
if (null != importDefaultResult2) {
  flag = importDefaultResult2.forceTouchAvailable;
}
if (!flag) {
  flag = false;
}
importDefaultResult3Result.forceTouchAvailable = flag;

export const forceTouchGestureHandlerProps = items;
export const forceTouchHandlerName = "ForceTouchGestureHandler";
export const ForceTouchGestureHandler = importDefaultResult3Result;
