// Module ID: 14008
// Function ID: 107099
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33, 14007, 12209]

// Module 14008 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = ["fill", "prefill"];
const Animated = get_ActivityIndicator.Animated;
const Easing = get_ActivityIndicator.Easing;
const tmp4 = ((PureComponent) => {
  class AnimatedCircularProgress {
    constructor(arg0) {
      self = this;
      closure_0 = PureComponent;
      tmp = outer1_2(this, closure_0);
      items = [];
      items[0] = PureComponent;
      obj = outer1_5(closure_0);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = {};
      value = new outer1_7.Value(PureComponent.prefill);
      obj.fillAnimation = value;
      tmp2Result.state = obj;
      if (PureComponent.onFillChange) {
        fillAnimation = tmp2Result.state.fillAnimation;
        addListenerResult = fillAnimation.addListener((value) => prefill.onFillChange(value.value));
      }
      return tmp2Result;
    }
  }
  callback2(AnimatedCircularProgress, PureComponent);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animate();
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0) {
      const self = this;
      if (arg0.fill !== this.props.fill) {
        self.animate();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "reAnimate",
    value: function reAnimate(arg0, arg1, arg2, arg3) {
      let closure_0 = arg1;
      let _objectWithoutProperties = arg2;
      let result = arg3;
      const self = this;
      const obj = {};
      const value = new outer1_7.Value(arg0);
      obj.fillAnimation = value;
      this.setState(obj, () => self.animate(closure_0, _objectWithoutProperties, result));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "animate",
    value: function animate(arg0, arg1, arg2) {
      let fill = arg0;
      let duration = arg1;
      let easing = arg2;
      const self = this;
      if (arg0 < 0) {
        fill = self.props.fill;
      }
      if (!duration) {
        duration = self.props.duration;
      }
      if (!easing) {
        easing = self.props.easing;
      }
      const obj = { useNativeDriver: self.props.useNativeDriver, toValue: fill, easing, duration, delay: self.props.delay };
      const timingResult = outer1_7.timing(self.state.fillAnimation, obj);
      timingResult.start(self.props.onAnimationComplete);
      return timingResult;
    }
  };
  items[4] = {
    key: "animateColor",
    value: function animateColor() {
      const self = this;
      if (this.props.tintColorSecondary) {
        const fillAnimation = self.state.fillAnimation;
        const obj = { inputRange: [0, 100] };
        const items = [self.props.tintColor, self.props.tintColorSecondary];
        obj.outputRange = items;
        let tintColor = fillAnimation.interpolate(obj);
      } else {
        tintColor = self.props.tintColor;
      }
      return tintColor;
    }
  };
  items[5] = {
    key: "render",
    value: function render() {
      let fill;
      let prefill;
      const props = this.props;
      ({ fill, prefill } = props);
      const obj = { fill: this.state.fillAnimation, tintColor: this.animateColor() };
      return outer1_8(outer1_9, Object.assign({}, outer1_1(props, AnimatedCircularProgress), obj));
    }
  };
  return callback(AnimatedCircularProgress, items);
})(require("result").PureComponent);
let obj = { prefill: require("result").number, duration: require("result").number, easing: require("result").func, onAnimationComplete: require("result").func, useNativeDriver: require("result").bool, delay: require("result").number };
tmp4.propTypes = Object.assign({}, require("_isNativeReflectConstruct").propTypes, obj);
obj = { duration: 500, easing: Easing.out(Easing.ease), prefill: 0, useNativeDriver: false, delay: 0 };
tmp4.defaultProps = obj;

export default tmp4;
