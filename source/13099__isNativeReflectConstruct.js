// Module ID: 13099
// Function ID: 100976
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 13100, 3955, 8153]

// Module 13099 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_7;
let closure_8;
let closure_9;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ Animated: closure_7, Easing: closure_8, TouchableOpacity: closure_9 } = get_ActivityIndicator);
const tmp4 = ((PureComponent) => {
  class PaginationDot {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, PaginationDot);
      items = [];
      items[0] = PureComponent;
      obj = outer1_5(PaginationDot);
      tmp2 = outer1_4;
      if (outer1_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = {};
      value = new outer1_7.Value(0);
      obj.animColor = value;
      value1 = new outer1_7.Value(0);
      obj.animOpacity = value1;
      value2 = new outer1_7.Value(0);
      obj.animTransform = value2;
      tmp2Result.state = obj;
      return tmp2Result;
    }
  }
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
  let items = [obj, , , , ];
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
      obj = { easing: outer1_8.linear };
      ({ animColor, animOpacity, animTransform } = state);
      ({ animatedFriction, animatedTension } = props);
      const items = [outer1_7.timing(animOpacity, Object.assign(obj, obj)), outer1_7.spring(animTransform, Object.assign({ friction: animatedFriction, tension: animatedTension }, obj))];
      if (self._shouldAnimateColor) {
        const _Object = Object;
        obj = { easing: outer1_8.linear };
        items.push(outer1_7.timing(animColor, Object.assign(obj, obj)));
      }
      outer1_7.parallel(items).start();
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
      let PaginationDot;
      let active;
      let activeOpacity;
      let animColor;
      let animOpacity;
      let animTransform;
      let closure_1;
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
      ({ carouselRef: PaginationDot, containerStyle, index: closure_1, style, tappable } = props);
      let obj = { opacity: animOpacity.interpolate({ inputRange: [0, 1], outputRange: items }) };
      items = [props.inactiveOpacity, ];
      let num = 1;
      items[1] = 1;
      ({ active, activeOpacity, color, inactiveColor, inactiveStyle, inactiveScale, delayPressInDot } = props);
      obj = { scale: animTransform.interpolate({ inputRange: [0, 1], outputRange: items1 }) };
      items1 = [inactiveScale, 1];
      const items2 = [obj];
      obj.transform = items2;
      if (this._shouldAnimateColor) {
        obj = {};
        const obj1 = { inputRange: [0, 1] };
        const items3 = [inactiveColor, color];
        obj1.outputRange = items3;
        obj.backgroundColor = animColor.interpolate(obj1);
        let obj2 = obj;
      } else {
        obj2 = {};
      }
      const items4 = [PaginationDot(outer1_1[8]).sliderPaginationDotContainer, ];
      if (!containerStyle) {
        containerStyle = {};
      }
      items4[1] = containerStyle;
      const items5 = [PaginationDot(outer1_1[8]).sliderPaginationDot, , , , ];
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
      obj3.children = outer1_10(outer1_7.View, { style: items5 });
      return outer1_10(outer1_9, obj3);
    }
  };
  return callback(PaginationDot, items);
})(require("result").PureComponent);
tmp4.propTypes = { inactiveOpacity: require("emptyFunction").number.isRequired, inactiveScale: require("emptyFunction").number.isRequired, active: require("emptyFunction").bool, activeOpacity: require("emptyFunction").number, carouselRef: require("emptyFunction").object, color: require("emptyFunction").string, containerStyle: require("get ColorPropType").ViewPropTypes.style, inactiveColor: require("emptyFunction").string, inactiveStyle: require("get ColorPropType").ViewPropTypes.style, index: require("emptyFunction").number, style: require("get ColorPropType").ViewPropTypes.style, tappable: require("emptyFunction").bool };

export default tmp4;
