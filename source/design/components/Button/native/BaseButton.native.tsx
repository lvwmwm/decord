// Module ID: 4550
// Function ID: 39900
// Name: BaseButton
// Dependencies: [29, 31, 27, 4551, 33, 3842, 4130, 689, 4548, 3991, 1327, 477, 2]

// Module 4550 (BaseButton)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { IOS_POINTER_STYLE } from "IOS_POINTER_STYLE";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";
import importDefaultResult1 from "module_3991";

let Pressable;
let TouchableOpacity;
const require = arg1;
let closure_3 = ["style"];
({ Pressable, TouchableOpacity } = get_ActivityIndicator);
let closure_8 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let prop = {};
  if ("primary-overlay" === arg0) {
    prop = importDefault(689).shadows.SHADOW_BUTTON_OVERLAY;
  }
  let obj = {};
  obj = {};
  const merged = Object.assign(prop);
  obj.button = obj;
  obj.disabled = { opacity: 0.5 };
  return obj;
});
let closure_9 = require("module_3991").createAnimatedComponent(Pressable);
let closure_10 = require("module_3991").createAnimatedComponent(TouchableOpacity);
const forwardRefResult = importAllResult.forwardRef((disabled) => {
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
  ({ children, variant } = disabled);
  if (variant === undefined) {
    variant = "primary";
  }
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = disabled.loading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ pressed, onPress, onPressDisabled, onPressIn, onPressOut, onLayout, accessible, accessibilityRole, accessibilityLabel, accessibilityHint, accessibilityState } = disabled);
  ({ accessibilityElementsHidden, importantForAccessibility, hitSlop, scaleAmountInPx } = disabled);
  let dependencyMap;
  let buttonAnimationProps;
  ({ onLongPress, accessibilityValue, accessibilityActions, onAccessibilityAction, pointerEvents } = disabled);
  const tmp = callback(variant);
  let tmp2 = flag;
  if (flag) {
    tmp2 = null == onPressDisabled;
  }
  dependencyMap = tmp2;
  if (flag) {
    onPress = onPressDisabled;
  }
  let obj = flag2(4548);
  const buttonPressAnimationProps = obj.useButtonPressAnimationProps(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut);
  if (null == pressed) {
    obj = { animatedScaleStyles: undefined };
    obj = { onLayout, onPressIn, onPressOut };
    obj.buttonAnimationProps = obj;
    let obj1 = obj;
  } else {
    obj1 = { animatedScaleStyles: buttonPressAnimationProps.style, buttonAnimationProps: tmp6 };
  }
  buttonAnimationProps = obj1.buttonAnimationProps;
  const items = [accessibilityState, tmp2, flag2];
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(accessibilityState);
    obj["disabled"] = c2;
    obj["busy"] = flag2;
    return obj;
  }, items);
  flag2(3842);
  let str = "light";
  if ("primary-overlay" !== variant) {
    let str3;
    if ("secondary-overlay" === variant) {
      if ("light" === tmp9) {
        str3 = "dark";
      }
    }
    str = str3;
  }
  let tmp10 = children;
  if (null != str) {
    const obj2 = { theme: str, children };
    tmp10 = jsx(flag2(3842).ThemeContextProvider, { theme: str, children });
  }
  const items1 = [tmp.button, disabled.style, , , ];
  if (flag) {
    flag = tmp.disabled;
  }
  items1[2] = flag;
  items1[3] = obj1.animatedScaleStyles;
  items1[4] = IOS_POINTER_STYLE;
  if ("none" !== accessibilityRole) {
    const obj3 = {};
    let merged = Object.assign(buttonAnimationProps);
    obj3["ref"] = arg1;
    obj3["accessible"] = accessible;
    let str21 = "button";
    if (null != accessibilityRole) {
      str21 = accessibilityRole;
    }
    obj3["accessibilityRole"] = str21;
    obj3["accessibilityLabel"] = accessibilityLabel;
    obj3["accessibilityHint"] = accessibilityHint;
    obj3["accessibilityValue"] = accessibilityValue;
    obj3["accessibilityState"] = memo;
    obj3["accessibilityActions"] = accessibilityActions;
    obj3["onAccessibilityAction"] = onAccessibilityAction;
    obj3["accessibilityElementsHidden"] = accessibilityElementsHidden;
    obj3["importantForAccessibility"] = importantForAccessibility;
    obj3["pointerEvents"] = pointerEvents;
    obj3["style"] = items1;
    obj3["onPress"] = tmp4;
    obj3["onLongPress"] = onLongPress;
    obj3["disabled"] = tmp2;
    obj3["hitSlop"] = hitSlop;
    obj3["children"] = tmp10;
    return <closure_9 />;
  } else {
    let str5 = "";
    if (!accessibilityElementsHidden) {
      const items2 = [accessibilityLabel, accessibilityHint];
      const found = items2.filter(flag2(1327).isNotNullish);
      str5 = found.join(", ");
    }
    const obj4 = {};
    const merged1 = Object.assign(buttonAnimationProps);
    obj4["ref"] = arg1;
    let isAndroidResult = accessible;
    if (null == accessible) {
      isAndroidResult = flag2(477).isAndroid();
      const obj8 = flag2(477);
    }
    obj4["accessible"] = !isAndroidResult && undefined;
    obj4["accessibilityRole"] = "none";
    obj4["accessibilityLabel"] = str5;
    obj4["accessibilityElementsHidden"] = accessibilityElementsHidden;
    obj4["activeOpacity"] = 1;
    obj4["importantForAccessibility"] = importantForAccessibility;
    obj4["style"] = items1;
    obj4["onPress"] = tmp4;
    obj4["onPressIn"] = function onPressIn(arg0) {
      if (null != buttonAnimationProps.onPressIn) {
        buttonAnimationProps.onPressIn(arg0);
      }
    };
    obj4["onPressOut"] = function onPressOut(arg0) {
      if (null != buttonAnimationProps.onPressOut) {
        buttonAnimationProps.onPressOut(arg0);
      }
    };
    obj4["hitSlop"] = hitSlop;
    obj4["children"] = tmp10;
    return <closure_10 />;
  }
});
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Button/native/BaseButton.native.tsx");

export const BaseButton = forwardRefResult;
