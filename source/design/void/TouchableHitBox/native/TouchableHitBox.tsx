// Module ID: 8467
// Function ID: 67558
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8467 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const ActivityIndicator = arg1(dependencyMap[6]).ActivityIndicator;
const jsx = arg1(dependencyMap[7]).jsx;
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { width: "edittingRolesHeader", height: "Array", marginHorizontal: "ACCEPT", justifyContent: "sMsaLg", alignItems: "STICKER_PACK_VIEW_ALL", 0: "MiniaturesSpotIllustration", borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.button = obj;
obj.buttonText = { -9223372036854775808: "sensitivityMin", 0: "getChannelIconComponentWithGuild", 9223372036854775807: "MiniaturesSpotIllustration", 9223372036854775807: "height" };
obj.buttonIcon = { margin: 10 };
obj.buttonSpinner = { margin: 12 };
obj.buttonDisabled = { opacity: 0.6 };
let closure_9 = obj.createLegacyClassComponentStyles(obj);
const tmp3 = (PureComponent) => {
  class TouchableHitBox {
    constructor() {
      self = this;
      tmp = closure_2(this, TouchableHitBox);
      obj = closure_5(TouchableHitBox);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = TouchableHitBox;
  callback2(TouchableHitBox, PureComponent);
  const items = [
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
        const tmp = callback4(this.context);
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
          tmp8Result = callback3(TouchableHitBox(closure_1[10]).Icon, obj);
          const tmp4 = callback3;
        }
        if (loading) {
          obj = { style: tmp.buttonSpinner, animating: true, color };
          tmp8Result = callback3(closure_7, obj);
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
          tmp8Result = callback3(TouchableHitBox(closure_1[10]).LegacyText, obj);
          const tmp8 = callback3;
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
              tmp8Result = callback3(IconComponent, obj2);
              const tmp7 = callback3;
            }
          }
          if (null == source) {
            if (null != children) {
              tmp8Result = children;
            }
          }
        }
        const obj3 = { accessibilityRole, accessibilityLabel, accessibilityState, onPress, onLongPress, activeOpacity, style: items3 };
        const items3 = [tmp.button, style];
        if (!disabled) {
          disabled = loading;
        }
        obj3.disabled = disabled;
        obj3.children = tmp8Result;
        return callback3(TouchableHitBox(closure_1[11]).PressableOpacity, obj3);
      }
    }
  ];
  return callback(TouchableHitBox, items);
}(importAll(dependencyMap[5]).PureComponent);
tmp3.contextType = arg1(dependencyMap[12]).ThemeContext;
tmp3.defaultProps = {
  onPress() {

  }
};
const importAllResult = importAll(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("design/void/TouchableHitBox/native/TouchableHitBox.tsx");

export default tmp3;
