// Module ID: 5267
// Function ID: 45412
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 5221, 5224]

// Module 5267 (_isNativeReflectConstruct)
import hasProperty from "hasProperty";
import cancelAnimation from "cancelAnimation";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importDefaultResult from "result";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const tmp3 = ((Component) => {
  class Wrap {
    constructor() {
      self = this;
      tmp = outer1_2(this, Wrap);
      obj = outer1_5(Wrap);
      tmp2 = outer1_4;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(Wrap, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        const Children = outer1_7.Children;
        const onlyResult = Children.only(this.props.children);
        return outer1_7.cloneElement(onlyResult, { collapsable: false }, onlyResult.props.children);
      }
    }
  ];
  return callback(Wrap, items);
})(importDefaultResult.Component);
let animatedComponent;
if (null != require("cancelAnimation").Reanimated) {
  const _default = require("cancelAnimation").Reanimated.default;
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
