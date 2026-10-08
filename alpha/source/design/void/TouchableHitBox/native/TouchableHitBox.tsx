// Module ID: 7013
// Function ID: 7014
// Name: TouchableHitBox
// Dependencies: [19, 17, 21, 5090, 587, 4787, 1200, 6189, 2]

// Module 7013 (TouchableHitBox)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import native2 from "native" /* 4787 */;
import Pressables from "Pressables" /* 6189 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

let obj2;
const ActivityIndicator = react_native.ActivityIndicator;
const jsx = Fragment.jsx;
let obj = { button: obj2, buttonText: { lineHeight: 24, margin: 10, maxWidth: 60, fontSize: 16 }, buttonIcon: { margin: 10 }, buttonSpinner: { margin: 12 }, buttonDisabled: { opacity: 0.6 } };
obj2 = { flexGrow: 0, flexShrink: 1, justifyContent: "center", alignItems: "center", backgroundColor: "transparent", alignSelf: "flex-start", borderRadius: nativeDefault.radii.sm };
const React3 = createStyles.createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class TouchableHitBox extends PureComponent {
  render() {
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
    let items2;
    let items3;
    let loading;
    let onLongPress;
    let onPress;
    let source;
    let style;
    let text;
    const tmp = closure_4(this.context);
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
      const items = [tmp.buttonIcon, , ];
      let buttonDisabled = disabled;
      const Icon = native.Icon;
      const tmp4 = jsx;
      if (disabled) {
        buttonDisabled = tmp.buttonDisabled;
      }
      const obj = { style: items, source, color, size: iconSize, disableColor: tmp2 };
      items[1] = buttonDisabled;
      items[2] = iconStyle;
      tmp8Result = tmp4(Icon, obj);
    }
    if (loading) {
      tmp8Result = <ActivityIndicator style={tmp.buttonSpinner} animating color={color} />;
    } else if (null != text) {
      const items1 = [tmp.buttonText, , ];
      let buttonDisabled3 = disabled;
      const LegacyText = native.LegacyText;
      const tmp8 = jsx;
      if (disabled) {
        buttonDisabled3 = tmp.buttonDisabled;
      }
      const obj3 = { numberOfLines: 1, style: items1, children: text };
      items1[1] = buttonDisabled3;
      const obj4 = { color };
      items1[2] = obj4;
      tmp8Result = tmp8(LegacyText, obj3);
    } else {
      if (null != IconComponent) {
        if (null != source) {
          const obj5 = { size: "sm", color, style: items2 };
          items2 = [tmp.buttonIcon, , ];
          let buttonDisabled2 = disabled;
          const tmp7 = jsx;
          if (disabled) {
            buttonDisabled2 = tmp.buttonDisabled;
          }
          items2[1] = buttonDisabled2;
          items2[2] = iconStyle;
          tmp8Result = tmp7(IconComponent, obj5);
        }
      }
      if (null == source) {
        if (null != children) {
          tmp8Result = children;
        }
      }
    }
    const obj6 = { accessibilityRole, accessibilityLabel, accessibilityState, onPress, onLongPress, activeOpacity, style: items3, disabled, children: tmp8Result };
    items3 = [tmp.button, style];
    const PressableOpacity = Pressables.PressableOpacity;
    const tmp13 = jsx;
    if (!disabled) {
      disabled = loading;
    }
    return tmp13(PressableOpacity, obj6);
  }
}
const prototype = TouchableHitBox.prototype;
TouchableHitBox.contextType = native2.ThemeContext;
TouchableHitBox.defaultProps = {
  onPress() {

  }
};
const result = size.fileFinishedImporting("design/void/TouchableHitBox/native/TouchableHitBox.tsx");

export default TouchableHitBox;
