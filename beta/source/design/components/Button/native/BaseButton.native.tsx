// Module ID: 5289
// Function ID: 5290
// Name: Button/BaseButton
// Dependencies: [109, 19, 17, 1074, 5290, 21, 4540, 4836, 5287, 4566, 1370, 1364, 2]

// Module 5289 (Button/BaseButton)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import native from "native" /* 4540 */;
import ButtonHooks from "ButtonHooks" /* 5287 */;
import styleConstants from "styleConstants" /* 5290 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4566 */;
import size from "module_2" /* 2 */;

let style;

let Pressable;
let TouchableOpacity;
let closure_2 = ["style"];
({ Pressable, TouchableOpacity } = react_native);
const ThemeTypes = Constants.ThemeTypes;
const IOS_POINTER_STYLE = styleConstants.IOS_POINTER_STYLE;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ disabled: { opacity: 0.5 } });
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_9 = ReanimatedRexport.createAnimatedComponent(Pressable);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_10 = ReanimatedRexport.createAnimatedComponent(TouchableOpacity);
const forwardRefResult = react.forwardRef((style, ref) => {
  let DARK;
  let accessibilityActions;
  let accessibilityElementsHidden;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let accessibilityValue;
  let accessible;
  let children;
  let hitSlop;
  let importantForAccessibility;
  let isAndroidResult;
  let obj3;
  let obj4;
  let onAccessibilityAction;
  let onLayout;
  let onLongPress;
  let onPress;
  let onPressDisabled;
  let onPressIn;
  let onPressOut;
  let pointerEvents;
  let pressed;
  let scaleAmountInPx;
  let variant;
  ({ children, variant } = style);
  style = style.style;
  if (variant === undefined) {
    variant = "primary";
  }
  let flag = style.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = style.loading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ pressed, onPress, onPressDisabled, onPressIn, onPressOut, onLayout, accessible, accessibilityRole, accessibilityLabel, accessibilityHint, accessibilityState } = style);
  ({ accessibilityElementsHidden, importantForAccessibility, hitSlop, scaleAmountInPx } = style);
  closure_2 = undefined;
  let buttonAnimationProps;
  ({ onLongPress, accessibilityValue, accessibilityActions, onAccessibilityAction, pointerEvents } = style);
  let tmp2 = flag;
  const tmp = closure_8();
  if (flag) {
    tmp2 = null == onPressDisabled;
  }
  closure_2 = tmp2;
  if (flag) {
    onPress = onPressDisabled;
  }
  let obj = ButtonHooks;
  const buttonPressAnimationProps = obj.useButtonPressAnimationProps(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut);
  const style2 = buttonPressAnimationProps.style;
  if (null == pressed) {
    const obj2 = { animatedScaleStyles: "Array", buttonAnimationProps: obj3 };
    obj4 = obj2;
    obj3 = { onLayout, onPressIn, onPressOut };
  } else {
    obj4 = { animatedScaleStyles: style2, buttonAnimationProps: tmp7 };
  }
  buttonAnimationProps = obj4.buttonAnimationProps;
  const items = [accessibilityState, tmp2, flag2];
  const animatedScaleStyles = obj4.animatedScaleStyles;
  const memo = react.useMemo(() => {
    const obj = { disabled, busy: flag2 };
    const merged = Object.assign(accessibilityState);
    return obj;
  }, items);
  native;
  if ("primary-overlay" === variant) {
    DARK = ThemeTypes.LIGHT;
  } else if ("secondary-overlay" === variant) {
    if (tmp10 === ThemeTypes.LIGHT) {
      DARK = ThemeTypes.DARK;
    }
  }
  let tmp12 = children;
  if (null != DARK) {
    tmp12 = jsx(tmp4(4540).ThemeContextProvider, { theme: DARK, children });
  }
  const items1 = [style, , , ];
  if (flag) {
    flag = tmp.disabled;
  }
  items1[1] = flag;
  items1[2] = animatedScaleStyles;
  items1[3] = IOS_POINTER_STYLE;
  if ("none" !== accessibilityRole) {
    const obj6 = { ref, accessible, accessibilityRole, accessibilityLabel, accessibilityHint, accessibilityValue, accessibilityState: memo, accessibilityActions, onAccessibilityAction, accessibilityElementsHidden, importantForAccessibility, pointerEvents, style: items1, onPress, onLongPress, disabled: tmp2, hitSlop, children: tmp12 };
    let merged = Object.assign(buttonAnimationProps);
    const tmp20 = jsx;
    const tmp21 = closure_9;
    if (accessibilityRole == null) {
      accessibilityRole = "button";
    }
    return tmp20(tmp21, obj6);
  } else {
    let str3 = "";
    if (!accessibilityElementsHidden) {
      const items2 = [accessibilityLabel, accessibilityHint];
      const found = items2.filter(tmp4(1370).isNotNullish);
      str3 = found.join(", ");
    }
    const obj7 = {
      ref,
      accessible: !isAndroidResult && undefined,
      accessibilityRole: "none",
      accessibilityLabel: str3,
      accessibilityElementsHidden,
      activeOpacity: 1,
      importantForAccessibility,
      style: items1,
      onPress,
      onPressIn(arg0) {
          const onPressIn = buttonAnimationProps.onPressIn;
          if (onPressIn != null) {
            onPressIn(arg0);
          }
        },
      onPressOut(arg0) {
          const onPressOut = buttonAnimationProps.onPressOut;
          if (onPressOut != null) {
            onPressOut(arg0);
          }
        },
      hitSlop,
      children: tmp12
    };
    const merged1 = Object.assign(buttonAnimationProps);
    isAndroidResult = accessible;
    const tmp14 = jsx;
    const tmp15 = closure_10;
    if (accessible == null) {
      const tmp4Result2 = PlatformUtils;
      isAndroidResult = tmp4Result2.isAndroid();
    }
    return tmp14(tmp15, obj7);
  }
});
const result = size.fileFinishedImporting("design/components/Button/native/BaseButton.native.tsx");

export const BaseButton = forwardRefResult;
