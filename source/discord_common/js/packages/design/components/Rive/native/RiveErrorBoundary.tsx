// Module ID: 3908
// Function ID: 32319
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3908 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const tmp2 = (Component) => {
  class RiveErrorBoundary {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = RiveErrorBoundary(this, RiveErrorBoundary);
      items1 = [...items];
      obj = closure_3(RiveErrorBoundary);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items1, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.state = { hasError: false };
      return tmp2Result;
    }
  }
  let closure_0 = RiveErrorBoundary;
  callback2(RiveErrorBoundary, Component);
  let obj = {
    key: "componentDidCatch",
    value(arg0) {
      const context = this.context;
      const captureException = context.captureException;
      if (null != captureException) {
        const obj = { rive_render_failed: "true" };
        captureException.call(context, arg0, obj);
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "render",
    value() {
      const props = this.props;
      if (this.state.hasError) {
        const fallback = props.fallback;
        let tmp = null;
        if (null != fallback) {
          tmp = fallback;
        }
        let children = tmp;
      } else {
        children = props.children;
      }
      return children;
    }
  };
  items[1] = obj;
  obj = {
    key: "getDerivedStateFromError",
    value() {
      return { hasError: true };
    }
  };
  const items1 = [obj];
  return callback(RiveErrorBoundary, items, items1);
}(importAll(dependencyMap[5]).Component);
tmp2.contextType = arg1(dependencyMap[6]).ManaContext;
const result = arg1(dependencyMap[7]).fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/RiveErrorBoundary.tsx");

export const RiveErrorBoundary = tmp2;
