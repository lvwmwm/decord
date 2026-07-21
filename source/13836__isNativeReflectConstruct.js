// Module ID: 13836
// Function ID: 104579
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13836 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = ["\u03B5\u03B3\u03BA\u03B1\u03C4\u03B1\u03BB\u03B5\u03BB\u03B5\u03B9\u03BC\u03BC\u03AD\u03BD\u03BF", "\u03BA\u03C4\u03AF\u03C1\u03B9\u03BF"];
let closure_1 = importDefault(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
let closure_4 = importDefault(dependencyMap[3]);
let closure_5 = importDefault(dependencyMap[4]);
let closure_6 = importDefault(dependencyMap[5]);
const tmp3 = arg1(dependencyMap[7]);
const Animated = tmp3.Animated;
const Easing = tmp3.Easing;
const jsx = arg1(dependencyMap[8]).jsx;
let closure_9 = Animated.createAnimatedComponent(importDefault(dependencyMap[9]));
const tmp4 = (PureComponent) => {
  class AnimatedCircularProgress {
    constructor(arg0) {
      self = this;
      AnimatedCircularProgress = PureComponent;
      tmp = closure_2(this, AnimatedCircularProgress);
      items = [];
      items[0] = PureComponent;
      obj = closure_5(AnimatedCircularProgress);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = {};
      value = new closure_7.Value(PureComponent.prefill);
      obj.fillAnimation = value;
      tmp2Result.state = obj;
      if (PureComponent.onFillChange) {
        fillAnimation = tmp2Result.state.fillAnimation;
        addListenerResult = fillAnimation.addListener((value) => value.onFillChange(value.value));
      }
      return tmp2Result;
    }
  }
  let closure_0 = AnimatedCircularProgress;
  callback2(AnimatedCircularProgress, PureComponent);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animate();
    }
  };
  const items = [obj, , , , , ];
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
      const AnimatedCircularProgress = arg1;
      const self = this;
      const obj = {};
      const value = new closure_7.Value(arg0);
      obj.fillAnimation = value;
      this.setState(obj, () => self.animate(arg1, arg2, arg3));
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
      const timingResult = closure_7.timing(self.state.fillAnimation, obj);
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
        const obj = { inputRange: [] };
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
      return callback4(closure_9, Object.assign({}, callback(props, AnimatedCircularProgress), obj));
    }
  };
  return callback(AnimatedCircularProgress, items);
}(importDefault(dependencyMap[6]).PureComponent);
let obj = { prefill: importDefault(dependencyMap[10]).number, duration: importDefault(dependencyMap[10]).number, easing: importDefault(dependencyMap[10]).func, onAnimationComplete: importDefault(dependencyMap[10]).func, useNativeDriver: importDefault(dependencyMap[10]).bool, delay: importDefault(dependencyMap[10]).number };
tmp4.propTypes = Object.assign({}, importDefault(dependencyMap[9]).propTypes, obj);
obj = { easing: Easing.out(Easing.ease) };
tmp4.defaultProps = obj;

export default tmp4;
