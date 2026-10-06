// Module ID: 6120
// Function ID: 6121
// Name: Wrap
// Dependencies: [41, 42, 93, 95, 98, 19, 6071, 6109]

// Module 6120 (Wrap)
import tagMessage from "tagMessage" /* 6071 */;
import Reanimated2 from "Reanimated" /* 6109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class Wrap {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Wrap);
    const obj = _getPrototypeOf(Wrap);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(Wrap, react.Component);
const entry = {
  key: "render",
  value: function render() {
    try {
      const self = this;
      const Children = react.Children;
      const onlyResult = Children.only(this.props.children);
      return react.cloneElement(onlyResult, { collapsable: false }, onlyResult.props.children);
    } catch (err) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const obj = tagMessage;
      const error = new Error(obj.tagMessage("GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view."));
      throw error;
    }
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Wrap, items);
const Reanimated = Reanimated2.Reanimated;
let animatedComponent;
if (Reanimated != null) {
  if (Reanimated.default != null) {
    animatedComponent = _default.createAnimatedComponent(importDefaultResultResult);
  }
}
if (animatedComponent == null) {
  animatedComponent = importDefaultResultResult;
}
const Wrap_export = importDefaultResultResult;

export { Wrap_export as Wrap };
export const AnimatedWrap = animatedComponent;
