// Module ID: 12969
// Function ID: 98742
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 12969 (_isNativeReflectConstruct)
import closure_2 from "result";
import closure_3 from "result";
import closure_5 from "result";
import closure_6 from "result";
import "result";
import result from "result";
import { jsx } from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = importDefault(dependencyMap[2]);
({ Animated: closure_7, Easing: closure_8, TouchableOpacity: closure_9 } = result);
const tmp4 = (PureComponent) => {
  class PaginationDot {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, PaginationDot);
      items = [];
      items[0] = PureComponent;
      obj = closure_5(PaginationDot);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = {};
      value = new closure_7.Value(0);
      obj.animColor = value;
      value1 = new closure_7.Value(0);
      obj.animOpacity = value1;
      value2 = new closure_7.Value(0);
      obj.animTransform = value2;
      tmp2Result.state = obj;
      return tmp2Result;
    }
  }
  const importDefault = PaginationDot;
  callback2(PaginationDot, PureComponent);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      if (this.props.active) {
        self._animate(1);
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(active) {
      const self = this;
      if (active.active !== this.props.active) {
        let num = 0;
        if (self.props.active) {
          num = 1;
        }
        self._animate(num);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "_animate",
    value: function _animate(arg0) {
      let animColor;
      let animOpacity;
      let animTransform;
      let animatedFriction;
      let animatedTension;
      let props;
      let state;
      const self = this;
      let num = 0;
      if (arguments.length > 0) {
        num = 0;
        if (undefined !== arguments[0]) {
          num = arguments[0];
        }
      }
      ({ state, props } = self);
      let obj = { toValue: num, duration: props.animatedDuration, isInteraction: false, useNativeDriver: !self._shouldAnimateColor };
      obj = { easing: closure_8.linear };
      ({ animColor, animOpacity, animTransform } = state);
      ({ animatedFriction, animatedTension } = props);
      const items = [RN.timing(animOpacity, Object.assign(obj, obj)), RN.spring(animTransform, Object.assign({ friction: animatedFriction, tension: animatedTension }, obj))];
      if (self._shouldAnimateColor) {
        const _Object = Object;
        obj = { easing: closure_8.linear };
        items.push(RN.timing(animColor, Object.assign(obj, obj)));
      }
      RN.parallel(items).start();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_shouldAnimateColor",
    get() {
      const props = this.props;
      return props.color && props.inactiveColor;
    }
  };
  items[4] = {
    key: "render",
    value: function render() {
      let active;
      let activeOpacity;
      let animColor;
      let animOpacity;
      let animTransform;
      let color;
      let containerStyle;
      let delayPressInDot;
      let inactiveColor;
      let inactiveScale;
      let inactiveStyle;
      let style;
      let tappable;
      ({ animColor, animOpacity, animTransform } = this.state);
      const props = this.props;
      ({ carouselRef: closure_0, containerStyle, index: closure_1, style, tappable } = props);
      let obj = { opacity: animOpacity.interpolate({ inputRange: [null, null], outputRange: items }) };
      const items = [props.inactiveOpacity, ];
      let num = 1;
      items[1] = 1;
      ({ active, activeOpacity, color, inactiveColor, inactiveStyle, inactiveScale, delayPressInDot } = props);
      obj = { scale: animTransform.interpolate({ inputRange: [null, null], outputRange: items1 }) };
      const items1 = [inactiveScale, 1];
      const items2 = [obj];
      obj.transform = items2;
      if (this._shouldAnimateColor) {
        obj = {};
        const obj1 = { inputRange: [null, null] };
        const items3 = [inactiveColor, color];
        obj1.outputRange = items3;
        obj.backgroundColor = animColor.interpolate(obj1);
        let obj2 = obj;
      } else {
        obj2 = {};
      }
      const items4 = [PaginationDot(closure_1[8]).sliderPaginationDotContainer, ];
      if (!containerStyle) {
        containerStyle = {};
      }
      items4[1] = containerStyle;
      const items5 = [PaginationDot(closure_1[8]).sliderPaginationDot, , , , ];
      if (!style) {
        style = {};
      }
      items5[1] = style;
      items5[2] = !active && inactiveStyle || {};
      items5[3] = obj;
      items5[4] = obj2;
      const obj3 = { accessible: false, style: items4 };
      if (tappable) {
        num = activeOpacity;
      }
      obj3.activeOpacity = num;
      let fn;
      if (tappable) {
        fn = () => {
          const current = ref.current;
          let obj = current;
          if (!current) {
            obj = ref;
          }
          obj._snapToItem(obj._getPositionIndex(closure_1));
        };
      }
      obj3.onPress = fn;
      obj3.delayPressIn = delayPressInDot;
      obj3.children = callback3(RN.View, { style: items5 });
      return callback3(closure_9, obj3);
    }
  };
  return callback(PaginationDot, items);
}(require("result").PureComponent);
tmp4.propTypes = { inactiveOpacity: require("result").number.isRequired, inactiveScale: require("result").number.isRequired, active: require("result").bool, activeOpacity: require("result").number, carouselRef: require("result").object, color: require("result").string, containerStyle: require("result").ViewPropTypes.style, inactiveColor: require("result").string, inactiveStyle: require("result").ViewPropTypes.style, index: require("result").number, style: require("result").ViewPropTypes.style, tappable: require("result").bool };

export default tmp4;
