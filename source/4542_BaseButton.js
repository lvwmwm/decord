// Module ID: 4542
// Function ID: 39803
// Name: BaseButton
// Dependencies: []

// Module 4542 (BaseButton)
let Pressable;
let TouchableOpacity;
let closure_3 = [null];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ Pressable, TouchableOpacity } = arg1(dependencyMap[2]));
const IOS_POINTER_STYLE = arg1(dependencyMap[3]).IOS_POINTER_STYLE;
const jsx = arg1(dependencyMap[4]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[6]).createStyles((arg0) => {
  let SHADOW_LOW = {};
  if ("secondary" === arg0) {
    SHADOW_LOW = importDefault(dependencyMap[7]).shadows.SHADOW_LOW;
  } else if ("primary-overlay" === arg0) {
    SHADOW_LOW = importDefault(dependencyMap[7]).shadows.SHADOW_BUTTON_OVERLAY;
  }
  let obj = {};
  obj = {};
  const merged = Object.assign(SHADOW_LOW);
  obj.button = obj;
  obj.disabled = { opacity: 0.5 };
  return obj;
});
const obj2 = arg1(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[9]).createAnimatedComponent(Pressable);
const importDefaultResult = importDefault(dependencyMap[9]);
let closure_10 = importDefault(dependencyMap[9]).createAnimatedComponent(TouchableOpacity);
const importDefaultResult1 = importDefault(dependencyMap[9]);
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
  const arg1 = flag2;
  ({ pressed, onPress, onPressDisabled, onPressIn, onPressOut, onLayout, accessible, accessibilityRole, accessibilityLabel, accessibilityHint, accessibilityState } = disabled);
  const importDefault = accessibilityState;
  ({ accessibilityElementsHidden, importantForAccessibility, hitSlop, scaleAmountInPx } = disabled);
  let dependencyMap;
  let closure_3;
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
  let obj = arg1(dependencyMap[8]);
  const buttonPressAnimationProps = obj.useButtonPressAnimationProps(pressed, scaleAmountInPx, onLayout, onPressIn, onPressOut);
  if (null == pressed) {
    obj = { animatedScaleStyles: undefined };
    obj = { onLayout, onPressIn, onPressOut };
    obj.buttonAnimationProps = obj;
    let obj1 = obj;
  } else {
    obj1 = { animatedScaleStyles: buttonPressAnimationProps.style, buttonAnimationProps: tmp6 };
  }
  const buttonAnimationProps = obj1.buttonAnimationProps;
  closure_3 = buttonAnimationProps;
  const items = [accessibilityState, tmp2, flag2];
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(accessibilityState);
    obj["disabled"] = tmp2;
    obj["busy"] = flag2;
    return obj;
  }, items);
  arg1(dependencyMap[5]);
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
    tmp10 = jsx(arg1(dependencyMap[5]).ThemeContextProvider, obj2);
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
    const merged = Object.assign(buttonAnimationProps);
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
    return <closure_9 {...obj3} />;
  } else {
    let str5 = "";
    if (!accessibilityElementsHidden) {
      const items2 = [accessibilityLabel, accessibilityHint];
      const found = items2.filter(arg1(dependencyMap[10]).isNotNullish);
      str5 = found.join(", ");
    }
    const obj4 = {};
    const merged1 = Object.assign(buttonAnimationProps);
    obj4["ref"] = arg1;
    let isAndroidResult = accessible;
    if (null == accessible) {
      isAndroidResult = arg1(dependencyMap[11]).isAndroid();
      const obj8 = arg1(dependencyMap[11]);
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
    return <closure_10 {...obj4} />;
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("design/components/Button/native/BaseButton.native.tsx");

export const BaseButton = forwardRefResult;
