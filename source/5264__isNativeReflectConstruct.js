// Module ID: 5264
// Function ID: 45393
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5264 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (Component) => {
  class Wrap {
    constructor() {
      self = this;
      tmp = closure_2(this, Wrap);
      obj = closure_5(Wrap);
      tmp2 = closure_4;
      if (closure_8()) {
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
  const arg1 = Wrap;
  callback2(Wrap, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        const Children = React.Children;
        const onlyResult = Children.only(this.props.children);
        return React.cloneElement(onlyResult, { collapsable: false }, onlyResult.props.children);
      }
    }
  ];
  return callback(Wrap, items);
}(importDefaultResult.Component);
let animatedComponent;
if (null != arg1(dependencyMap[7]).Reanimated) {
  const _default = arg1(dependencyMap[7]).Reanimated.default;
  if (null != _default) {
    animatedComponent = _default.createAnimatedComponent(tmp3);
  }
}
let tmp5 = tmp3;
if (null != animatedComponent) {
  tmp5 = animatedComponent;
}

export const Wrap = tmp3;
export const AnimatedWrap = tmp5;
