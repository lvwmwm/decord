// Module ID: 5286
// Function ID: 45629
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 27, 31, 33, 5284]

// Module 5286 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import getActivityIndicator from "get ActivityIndicator";
import result from "result";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import get_ActivityIndicator from "get ActivityIndicator";
import "result";
import { jsx } from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["style"];
({ Animated: closure_10, Easing: closure_11, StyleSheet: closure_12, View: closure_13 } = get_ActivityIndicator);
const tmp4 = ((Component) => {
  class TouchableOpacity {
    constructor() {
      self = this;
      tmp = outer1_5(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_8(apply);
      tmp4 = outer1_7;
      if (outer1_15()) {
        items1 = combined;
        if (!combined) {
          items1 = [];
        }
        tmp6 = outer1_8;
        constructResult = Reflect.construct(obj, items1, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp4Result = tmp4(self, constructResult);
      apply = tmp4Result;
      tmp4Result.getChildStyleOpacityWithDefault = () => {
        const tmp = outer2_12.flatten(tmp4Result.props.style) || {};
        let num = 1;
        if (null != tmp.opacity) {
          const opacity = tmp.opacity;
          num = opacity.valueOf();
        }
        return num;
      };
      value = new outer1_10.Value(tmp4Result.getChildStyleOpacityWithDefault());
      tmp4Result.opacity = value;
      tmp4Result.setOpacityTo = (toValue, duration) => {
        const useNativeAnimations = tmp4Result.props.useNativeAnimations;
        const obj = { toValue, duration, easing: outer2_11.inOut(outer2_11.quad), useNativeDriver: tmp2 };
        tmp2 = null == useNativeAnimations || useNativeAnimations;
        outer2_10.timing(tmp4Result.opacity, { toValue, duration, easing: outer2_11.inOut(outer2_11.quad), useNativeDriver: tmp2 }).start();
      };
      tmp4Result.onStateChange = (arg0, arg1) => {
        if (arg1 === TouchableOpacity(outer2_2[9]).TOUCHABLE_STATE.BEGAN) {
          tmp4Result.setOpacityTo(tmp4Result.props.activeOpacity, 0);
        } else {
          let tmp3 = arg1 !== TouchableOpacity(outer2_2[9]).TOUCHABLE_STATE.UNDETERMINED;
          if (tmp3) {
            tmp3 = arg1 !== TouchableOpacity(outer2_2[9]).TOUCHABLE_STATE.MOVED_OUTSIDE;
          }
          if (!tmp3) {
            tmp4Result.setOpacityTo(tmp4Result.getChildStyleOpacityWithDefault(), 150);
          }
        }
      };
      return tmp4Result;
    }
  }
  callback2(TouchableOpacity, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        const self = this;
        const props = this.props;
        let style = props.style;
        if (undefined === style) {
          style = {};
        }
        const obj = { style: items, onStateChange: self.onStateChange };
        items = [style, { opacity: self.opacity }];
        const tmp = outer1_4(props, outer1_3);
        const tmp2 = outer1_14;
        if (self.props.children) {
          let children = self.props.children;
        } else {
          children = outer1_14(outer1_13, {});
        }
        obj.children = children;
        return tmp2(outer1_1(outer1_2[9]), Object.assign({}, tmp, obj));
      }
    }
  ];
  return callback(TouchableOpacity, items);
})(require("result").Component);
tmp4.defaultProps = Object.assign({}, require("_isNativeReflectConstruct").defaultProps, { activeOpacity: 0.2 });

export default tmp4;
