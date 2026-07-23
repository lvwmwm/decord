// Module ID: 8474
// Function ID: 67607
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 4130, 689, 1273, 4660, 3842, 2]

// Module 8474 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { ActivityIndicator } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexGrow: 0, flexShrink: 1, justifyContent: "center", alignItems: "center", backgroundColor: "transparent", alignSelf: "flex-start", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.button = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.buttonText = { lineHeight: 24, margin: 10, maxWidth: 60, fontSize: 16 };
_createForOfIteratorHelperLoose.buttonIcon = { margin: 10 };
_createForOfIteratorHelperLoose.buttonSpinner = { margin: 12 };
_createForOfIteratorHelperLoose.buttonDisabled = { opacity: 0.6 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp3 = ((PureComponent) => {
  class TouchableHitBox {
    constructor() {
      self = this;
      tmp = outer1_2(this, TouchableHitBox);
      obj = outer1_5(TouchableHitBox);
      tmp2 = outer1_4;
      if (outer1_10()) {
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
  callback2(TouchableHitBox, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        let IconComponent;
        let accessibilityLabel;
        let accessibilityRole;
        let accessibilityState;
        let activeOpacity;
        let color;
        let disableColor;
        let disabled;
        let iconSize;
        let iconStyle;
        let loading;
        let onLongPress;
        let onPress;
        let source;
        let style;
        let text;
        const tmp = outer1_9(this.context);
        const props = this.props;
        ({ disabled, source, text, loading, IconComponent, iconStyle, color, disableColor } = props);
        let tmp2 = undefined !== disableColor;
        ({ activeOpacity, onPress, onLongPress, style, iconSize } = props);
        if (tmp2) {
          tmp2 = disableColor;
        }
        const children = props.children;
        let tmp8Result;
        ({ accessibilityLabel, accessibilityRole, accessibilityState } = props);
        if (null != source) {
          let obj = {};
          const items = [tmp.buttonIcon, , ];
          let buttonDisabled = disabled;
          if (disabled) {
            buttonDisabled = tmp.buttonDisabled;
          }
          items[1] = buttonDisabled;
          items[2] = iconStyle;
          obj.style = items;
          obj.source = source;
          obj.color = color;
          obj.size = iconSize;
          obj.disableColor = tmp2;
          tmp8Result = outer1_8(TouchableHitBox(outer1_1[10]).Icon, obj);
          const tmp4 = outer1_8;
        }
        if (loading) {
          obj = { style: tmp.buttonSpinner, animating: true, color };
          tmp8Result = outer1_8(outer1_7, obj);
        } else if (null != text) {
          obj = { numberOfLines: 1 };
          const items1 = [tmp.buttonText, , ];
          let buttonDisabled3 = disabled;
          if (disabled) {
            buttonDisabled3 = tmp.buttonDisabled;
          }
          items1[1] = buttonDisabled3;
          const obj1 = { color };
          items1[2] = obj1;
          obj.style = items1;
          obj.children = text;
          tmp8Result = outer1_8(TouchableHitBox(outer1_1[10]).LegacyText, obj);
          const tmp8 = outer1_8;
        } else {
          if (null != IconComponent) {
            if (null != source) {
              const obj2 = { size: "sm", color };
              const items2 = [tmp.buttonIcon, , ];
              let buttonDisabled2 = disabled;
              if (disabled) {
                buttonDisabled2 = tmp.buttonDisabled;
              }
              items2[1] = buttonDisabled2;
              items2[2] = iconStyle;
              obj2.style = items2;
              tmp8Result = outer1_8(IconComponent, obj2);
              const tmp7 = outer1_8;
            }
          }
          if (null == source) {
            if (null != children) {
              tmp8Result = children;
            }
          }
        }
        const obj3 = { accessibilityRole, accessibilityLabel, accessibilityState, onPress, onLongPress, activeOpacity, style: items3 };
        items3 = [tmp.button, style];
        if (!disabled) {
          disabled = loading;
        }
        obj3.disabled = disabled;
        obj3.children = tmp8Result;
        return outer1_8(TouchableHitBox(outer1_1[11]).PressableOpacity, obj3);
      }
    }
  ];
  return callback(TouchableHitBox, items);
})(require("result").PureComponent);
tmp3.contextType = require("ManaContext").ThemeContext;
tmp3.defaultProps = {
  onPress() {

  }
};
let result = require("_possibleConstructorReturn").fileFinishedImporting("design/void/TouchableHitBox/native/TouchableHitBox.tsx");

export default tmp3;
