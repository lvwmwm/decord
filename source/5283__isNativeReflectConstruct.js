// Module ID: 5283
// Function ID: 45593
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 27, 31, 33, 5284]

// Module 5283 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import getActivityIndicator from "get ActivityIndicator";
import result from "result";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { Platform } from "get ActivityIndicator";
import "result";
import { jsx } from "jsxProd";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["style"];
const tmp3 = ((Component) => {
  class TouchableNativeFeedback {
    constructor() {
      self = this;
      tmp = outer1_4(this, TouchableNativeFeedback);
      obj = outer1_7(TouchableNativeFeedback);
      tmp2 = outer1_6;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(TouchableNativeFeedback, Component);
  let obj = {
    key: "getExtraButtonProps",
    value: function getExtraButtonProps() {
      const obj = {};
      let rippleRadius = this.props.background;
      if (!rippleRadius) {
        obj.foreground = this.props.useForeground;
        return obj;
      } else {
        if ("RippleAndroid" === rippleRadius.type) {
          ({ borderless: obj.borderless, color: obj.rippleColor } = rippleRadius);
        } else if ("ThemeAttrAndroid" === rippleRadius.type) {
          obj.borderless = "selectableItemBackgroundBorderless" === rippleRadius.attribute;
        }
        rippleRadius = rippleRadius.rippleRadius;
        obj.rippleRadius = rippleRadius;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let style = props.style;
      if (undefined === style) {
        style = {};
      }
      const obj = { style };
      const tmp = outer1_3(props, outer1_2);
      obj.extraButtonProps = self.getExtraButtonProps();
      return outer1_10(TouchableNativeFeedback(outer1_1[9]), Object.assign({}, tmp, obj));
    }
  };
  items[1] = obj;
  return callback(TouchableNativeFeedback, items);
})(require("result").Component);
tmp3.defaultProps = Object.assign({}, require("_isNativeReflectConstruct").defaultProps, { useForeground: true, extraButtonProps: { rippleColor: null } });
tmp3.SelectableBackground = (rippleRadius) => {
  const obj = { type: "ThemeAttrAndroid", attribute: "selectableItemBackground", rippleRadius };
  return obj;
};
tmp3.SelectableBackgroundBorderless = (rippleRadius) => {
  const obj = { type: "ThemeAttrAndroid", attribute: "selectableItemBackgroundBorderless", rippleRadius };
  return obj;
};
tmp3.Ripple = (color, borderless, rippleRadius) => ({ type: "RippleAndroid", color, borderless, rippleRadius });
tmp3.canUseNativeForeground = () => Platform.Version >= 23;

export default tmp3;
