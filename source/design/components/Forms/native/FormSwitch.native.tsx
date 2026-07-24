// Module ID: 5503
// Function ID: 46927
// Name: FormSwitch
// Dependencies: [57, 31, 27, 33, 3991, 4130, 689, 4545, 3849, 1324, 4542, 4546, 3834, 5504, 5505, 4099, 4100, 2]
// Exports: FormSwitch

// Module 5503 (FormSwitch)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";
import getIconSize from "getIconSize";
import importDefaultResult1 from "module_3991";

let require = arg1;
let closure_6 = require("module_3991").createAnimatedComponent(require("get ActivityIndicator").Pressable);
let obj = {};
obj = { width: require("_createForOfIteratorHelperLoose").modules.mobile.CONTROL_SWITCH_WIDTH, height: require("_createForOfIteratorHelperLoose").modules.mobile.CONTROL_SWITCH_HEIGHT, padding: require("_createForOfIteratorHelperLoose").space.PX_4 - 1, flexGrow: 0, flexShrink: 0, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1 };
obj.switch = obj;
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.SWITCH_BACKGROUND_DEFAULT, borderColor: require("_createForOfIteratorHelperLoose").colors.SWITCH_BORDER_DEFAULT };
obj.unselectedBackground = _createForOfIteratorHelperLoose;
obj.unselectedIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.SWITCH_THUMB_ICON_DEFAULT };
let obj2 = { tintColor: require("_createForOfIteratorHelperLoose").colors.SWITCH_THUMB_ICON_DEFAULT };
obj.selectedIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.SWITCH_THUMB_ICON_ACTIVE };
let obj3 = { tintColor: require("_createForOfIteratorHelperLoose").colors.SWITCH_THUMB_ICON_ACTIVE };
obj.selected = { tintColor: require("_createForOfIteratorHelperLoose").colors.SWITCH_BACKGROUND_SELECTED_DEFAULT, borderColor: require("_createForOfIteratorHelperLoose").colors.SWITCH_BORDER_SELECTED_DEFAULT };
let obj4 = { tintColor: require("_createForOfIteratorHelperLoose").colors.SWITCH_BACKGROUND_SELECTED_DEFAULT, borderColor: require("_createForOfIteratorHelperLoose").colors.SWITCH_BORDER_SELECTED_DEFAULT };
obj.knob = { height: require("_createForOfIteratorHelperLoose").modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: require("_createForOfIteratorHelperLoose").modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj5 = { height: require("_createForOfIteratorHelperLoose").modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: require("_createForOfIteratorHelperLoose").modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
let closure_9 = { code: "function FormSwitchNativeTsx1(){const{withSpring,checked,selected,unselectedBackground,SUBTLE_SPRING}=this.__closure;return{backgroundColor:withSpring(checked?selected.tintColor:unselectedBackground.tintColor,SUBTLE_SPRING,'animate-always'),borderColor:withSpring(checked?selected.borderColor:unselectedBackground.borderColor,SUBTLE_SPRING,'animate-always')};}" };
let closure_10 = { code: "function FormSwitchNativeTsx2(){const{withSpring,checked,knobCheckedLeft,SUBTLE_SPRING,knobSelectedBackgroundColor,knobBackgroundColor}=this.__closure;return{left:withSpring(checked?knobCheckedLeft:0,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?knobSelectedBackgroundColor:knobBackgroundColor,SUBTLE_SPRING,'animate-always')};}" };
let closure_11 = { code: "function FormSwitchNativeTsx3(){const{useReducedMotion,checked,on,off,withSpring,SUBTLE_SPRING}=this.__closure;const scale=useReducedMotion?1:checked?on:off;return{opacity:withSpring(checked?on:off,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(scale,SUBTLE_SPRING)}]};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Forms/native/FormSwitch.native.tsx");

export const FormSwitch = function FormSwitch(onValueChange) {
  let accessibilityHint;
  let accessibilityLabel;
  let disabled;
  let tmp;
  let value;
  function useIconAnimation(on, off) {
    let closure_0 = on;
    let closure_1 = off;
    let obj = value(enabled[4]);
    const fn = function n() {
      if (outer1_2) {
        let obj = { opacity: value(enabled[10]).withSpring(outer1_3 ? closure_0 : closure_1, value(enabled[11]).SUBTLE_SPRING, "animate-always") };
        obj = {};
        const obj2 = value(enabled[10]);
        const tmp6 = outer1_3 ? closure_0 : closure_1;
        obj.scale = value(enabled[10]).withSpring(1, value(enabled[11]).SUBTLE_SPRING);
        const items = [obj];
        obj.transform = items;
        return obj;
      }
    };
    obj = { useReducedMotion: enabled, checked: first, on, off, withSpring: value(enabled[10]).withSpring, SUBTLE_SPRING: value(enabled[11]).SUBTLE_SPRING };
    fn.__closure = obj;
    fn.__workletHash = 14329332652102;
    fn.__initData = outer1_11;
    return obj.useAnimatedStyle(fn);
  }
  ({ disabled, value } = onValueChange);
  const require = value;
  onValueChange = onValueChange.onValueChange;
  ({ accessibilityLabel, accessibilityHint, aria-hidden: tmp } = onValueChange);
  const context = React.useContext(require(enabled[8]).AccessibilityPreferencesContext);
  enabled = context.reducedMotion.enabled;
  const tmp3 = first(React.useState(value), 2);
  first = tmp3[0];
  React = tmp3[1];
  let items = [value];
  const effect = React.useEffect(() => {
    callback(closure_0);
  }, items);
  let tmp6 = onValueChange(enabled[9])("FormSwitch");
  const jsx = tmp6;
  const tmp7 = unselectedBackground();
  const selected = tmp7.selected;
  unselectedBackground = tmp7.unselectedBackground;
  let obj = require(enabled[4]);
  class G {
    constructor() {
      obj = {};
      obj2 = value(enabled[10]);
      if (_slicedToArray) {
        tmp2 = selected;
        tintColor = selected.tintColor;
      } else {
        tmp = unselectedBackground;
        tintColor = unselectedBackground.tintColor;
      }
      obj.backgroundColor = obj2.withSpring(tintColor, value(enabled[11]).SUBTLE_SPRING, "animate-always");
      obj3 = value(enabled[10]);
      if (_slicedToArray) {
        tmp4 = selected;
        borderColor = selected.borderColor;
      } else {
        tmp3 = unselectedBackground;
        borderColor = unselectedBackground.borderColor;
      }
      obj.borderColor = obj3.withSpring(borderColor, value(enabled[11]).SUBTLE_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: require(enabled[10]).withSpring, checked: first, selected, unselectedBackground, SUBTLE_SPRING: require(enabled[11]).SUBTLE_SPRING };
  G.__closure = obj;
  G.__workletHash = 2232234503354;
  G.__initData = token1;
  const animatedStyle = obj.useAnimatedStyle(G);
  let obj2 = require(enabled[12]);
  const token = obj2.useToken(onValueChange(enabled[6]).modules.mobile.CONTROL_SWITCH_KNOB_CHECKED_OFFSET);
  let obj3 = require(enabled[12]);
  token1 = obj3.useToken(onValueChange(enabled[6]).colors.SWITCH_THUMB_BACKGROUND_DEFAULT);
  let obj4 = require(enabled[12]);
  const token2 = obj4.useToken(onValueChange(enabled[6]).colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT);
  let fn = function f() {
    const obj = {};
    let num = 0;
    if (first) {
      num = token;
    }
    obj.left = value(enabled[10]).withSpring(num, value(enabled[11]).SUBTLE_SPRING, "animate-always");
    const obj2 = value(enabled[10]);
    obj.backgroundColor = value(enabled[10]).withSpring(first ? token2 : token1, value(enabled[11]).SUBTLE_SPRING, "animate-always");
    return obj;
  };
  obj = { withSpring: require(enabled[10]).withSpring, checked: first, knobCheckedLeft: token, SUBTLE_SPRING: require(enabled[11]).SUBTLE_SPRING, knobSelectedBackgroundColor: token2, knobBackgroundColor: token1 };
  fn.__closure = obj;
  fn.__workletHash = 3687946563898;
  fn.__initData = token2;
  const animatedStyle1 = require(enabled[4]).useAnimatedStyle(fn);
  const iconAnimation = useIconAnimation(1, 0);
  let tmp15 = tmp6;
  const iconAnimation1 = useIconAnimation(0, 1);
  if (tmp6) {
    tmp15 = !context.switchIconsEnabled;
  }
  if (tmp15) {
    const obj1 = {};
    const items1 = [tmp7.switch, animatedStyle];
    obj1.style = items1;
    obj1.onPress = function onPress() {
      if (closure_5) {
        const triggerHapticFeedback = value(enabled[15]).triggerHapticFeedback;
        const tmp6 = onValueChange(enabled[16]);
        if (closure_0) {
          const result = triggerHapticFeedback(tmp6.TOGGLE_OFF);
        } else {
          const result1 = triggerHapticFeedback(tmp6.TOGGLE_ON);
        }
        const tmp4 = value(enabled[15]);
      }
      if (null != onValueChange) {
        onValueChange(!closure_0);
      }
    };
    obj1.disabled = disabled;
    obj1.accessible = true;
    obj1["aria-hidden"] = tmp;
    obj1.accessibilityRole = "switch";
    obj1.accessibilityLabel = accessibilityLabel;
    obj1.accessibilityHint = accessibilityHint;
    obj2 = { disabled, checked: first };
    obj1.accessibilityState = obj2;
    obj1.onAccessibilityTap = function onAccessibilityTap() {
      if (closure_5) {
        const triggerHapticFeedback = value(enabled[15]).triggerHapticFeedback;
        const tmp6 = onValueChange(enabled[16]);
        if (closure_0) {
          const result = triggerHapticFeedback(tmp6.TOGGLE_OFF);
        } else {
          const result1 = triggerHapticFeedback(tmp6.TOGGLE_ON);
        }
        const tmp4 = value(enabled[15]);
      }
      callback(!closure_0);
      const timerId = setTimeout(() => {
        if (null != outer1_1) {
          outer1_1(!outer1_0);
        }
      });
    };
    obj3 = {};
    const items2 = [tmp7.knob, animatedStyle1];
    obj3.style = items2;
    obj3.children = null;
    obj1.children = jsx(onValueChange(enabled[4]).View, {});
    return <selected />;
  } else {
    obj4 = {};
    if (!first) {
      obj4.source = tmp18(tmp19[14]);
      obj4.size = tmp18(tmp19[7]).Sizes.SMALL;
      const items3 = [tmp7.unselectedIcon, iconAnimation1];
      obj4.style = items3;
      tmp16(tmp17, obj4);
    }
    obj4.source = onValueChange(enabled[13]);
    let selectedIcon = onValueChange(enabled[7]).Sizes;
    obj4.size = tmp6 ? selectedIcon.SMALL_20 : selectedIcon.SMALL;
    selectedIcon = tmp7.selectedIcon;
    const items4 = [selectedIcon, iconAnimation];
    obj4.style = items4;
  }
};
