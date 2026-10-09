// Module ID: 17843
// Function ID: 17844
// Dependencies: [109, 41, 42, 93, 95, 98, 19, 17, 21, 17842, 8729]

// Module 17843
import Fragment from "Fragment" /* 21 */;
import _modDef8729 from "module_8729" /* 8729 */;
import _modDef17842 from "module_17842" /* 17842 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_0 = ["fill", "prefill"];
const Animated = react_native.Animated;
const Easing = react_native.Easing;
const jsx = Fragment.jsx;
const module_17842 = Animated.createAnimatedComponent(_modDef17842);
class AnimatedCircularProgress {
  constructor(prefill) {
    let constructResult;
    let value;
    const self = this;
    closure_0 = prefill;
    _classCallCheck(this, AnimatedCircularProgress);
    const items = [prefill];
    const obj = _getPrototypeOf(AnimatedCircularProgress);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = tmp3(self, constructResult);
    const obj2 = { fillAnimation: value };
    value = new Animated.Value(prefill.prefill);
    tmp3Result.state = obj2;
    if (prefill.onFillChange) {
      const fillAnimation = tmp3Result.state.fillAnimation;
      fillAnimation.addListener((value) => closure_0.onFillChange(value.value));
    }
    return tmp3Result;
  }
}
_inherits(AnimatedCircularProgress, react.PureComponent);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    this.animate();
  }
};
let items = [
  entry,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0) {
      const self = this;
      if (arg0.fill !== this.props.fill) {
        self.animate();
      }
    }
  },
  {
    key: "reAnimate",
    value: function reAnimate(arg0, arg1, arg2, arg3) {
      let value;
      const self = this;
      let closure_1 = arg1;
      let closure_2 = arg2;
      closure_0 = arg3;
      const setState = this.setState;
      const obj = { fillAnimation: value };
      value = new Animated.Value(arg0);
      setState(obj, () => self.animate(closure_1, closure_2, closure_0));
    }
  },
  {
    key: "animate",
    value: function animate(arg0, arg1, arg2) {
      const self = this;
      let fill = arg0;
      if (arg0 < 0) {
        fill = self.props.fill;
      }
      const obj = { useNativeDriver: self.props.useNativeDriver, toValue: fill, easing: arg2 || self.props.easing, duration: arg1 || self.props.duration, delay: self.props.delay };
      const timingResult = Animated.timing(self.state.fillAnimation, obj);
      timingResult.start(self.props.onAnimationComplete);
      return timingResult;
    }
  },
  {
    key: "animateColor",
    value: function animateColor() {
      let items;
      let tintColor;
      const self = this;
      if (this.props.tintColorSecondary) {
        const fillAnimation = self.state.fillAnimation;
        const obj = { inputRange: [0, 100], outputRange: items };
        items = [self.props.tintColor, self.props.tintColorSecondary];
        tintColor = fillAnimation.interpolate(obj);
      } else {
        tintColor = self.props.tintColor;
      }
      return tintColor;
    }
  },
  {
    key: "render",
    value: function render() {
      let fill;
      let prefill;
      const props = this.props;
      ({ fill, prefill } = props);
      const merged = Object.assign(_objectWithoutProperties(props, closure_0));
      return <module_17842 fill={this.state.fillAnimation} tintColor={this.animateColor()} />;
    }
  }
];
const importDefaultResultResult = _createClass(AnimatedCircularProgress, items);
let obj = { prefill: _modDef8729.number, duration: _modDef8729.number, easing: _modDef8729.func, onAnimationComplete: _modDef8729.func, useNativeDriver: _modDef8729.bool, delay: _modDef8729.number };
let merged = Object.assign(_modDef17842.propTypes);
importDefaultResultResult.propTypes = obj;
let obj2 = { duration: 500, easing: Easing.out(Easing.ease), prefill: 0, useNativeDriver: false, delay: 0 };
importDefaultResultResult.defaultProps = obj2;

export default importDefaultResultResult;
