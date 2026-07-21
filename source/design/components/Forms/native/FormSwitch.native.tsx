// Module ID: 5503
// Function ID: 46891
// Name: FormSwitch
// Dependencies: []
// Exports: FormSwitch

// Module 5503 (FormSwitch)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[2]).Pressable);
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { width: importDefault(dependencyMap[6]).modules.mobile.CONTROL_SWITCH_WIDTH, height: importDefault(dependencyMap[6]).modules.mobile.CONTROL_SWITCH_HEIGHT, padding: importDefault(dependencyMap[6]).space.PX_4 - 1, flexGrow: 0, flexShrink: 0, borderRadius: importDefault(dependencyMap[6]).radii.lg, borderWidth: 1 };
obj.switch = obj;
obj1 = { tintColor: importDefault(dependencyMap[6]).colors.SWITCH_BACKGROUND_DEFAULT, borderColor: importDefault(dependencyMap[6]).colors.SWITCH_BORDER_DEFAULT };
obj.unselectedBackground = obj1;
const importDefaultResult = importDefault(dependencyMap[4]);
obj.unselectedIcon = { tintColor: importDefault(dependencyMap[6]).colors.SWITCH_THUMB_ICON_DEFAULT };
const obj2 = { tintColor: importDefault(dependencyMap[6]).colors.SWITCH_THUMB_ICON_DEFAULT };
obj.selectedIcon = { tintColor: importDefault(dependencyMap[6]).colors.SWITCH_THUMB_ICON_ACTIVE };
const obj3 = { tintColor: importDefault(dependencyMap[6]).colors.SWITCH_THUMB_ICON_ACTIVE };
obj.selected = { tintColor: importDefault(dependencyMap[6]).colors.SWITCH_BACKGROUND_SELECTED_DEFAULT, borderColor: importDefault(dependencyMap[6]).colors.SWITCH_BORDER_SELECTED_DEFAULT };
const obj4 = { tintColor: importDefault(dependencyMap[6]).colors.SWITCH_BACKGROUND_SELECTED_DEFAULT, borderColor: importDefault(dependencyMap[6]).colors.SWITCH_BORDER_SELECTED_DEFAULT };
obj.knob = { height: importDefault(dependencyMap[6]).modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: importDefault(dependencyMap[6]).modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: importDefault(dependencyMap[6]).radii.round };
let closure_7 = obj1.createStyles(obj);
const obj5 = { height: importDefault(dependencyMap[6]).modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: importDefault(dependencyMap[6]).modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: importDefault(dependencyMap[6]).radii.round };
let closure_8 = importDefault(dependencyMap[4]).createAnimatedComponent(importDefault(dependencyMap[7]));
let closure_9 = { code: "function FormSwitchNativeTsx1(){const{withSpring,checked,selected,unselectedBackground,SUBTLE_SPRING}=this.__closure;return{backgroundColor:withSpring(checked?selected.tintColor:unselectedBackground.tintColor,SUBTLE_SPRING,'animate-always'),borderColor:withSpring(checked?selected.borderColor:unselectedBackground.borderColor,SUBTLE_SPRING,'animate-always')};}" };
let closure_10 = { code: "function FormSwitchNativeTsx2(){const{withSpring,checked,knobCheckedLeft,SUBTLE_SPRING,knobSelectedBackgroundColor,knobBackgroundColor}=this.__closure;return{left:withSpring(checked?knobCheckedLeft:0,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?knobSelectedBackgroundColor:knobBackgroundColor,SUBTLE_SPRING,'animate-always')};}" };
let closure_11 = { code: "function FormSwitchNativeTsx3(){const{useReducedMotion,checked,on,off,withSpring,SUBTLE_SPRING}=this.__closure;const scale=useReducedMotion?1:checked?on:off;return{opacity:withSpring(checked?on:off,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(scale,SUBTLE_SPRING)}]};}" };
const importDefaultResult1 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("design/components/Forms/native/FormSwitch.native.tsx");

export const FormSwitch = function FormSwitch(onValueChange) {
  let accessibilityHint;
  let accessibilityLabel;
  let disabled;
  let tmp;
  let value;
  function useIconAnimation(on, off) {
    const value = on;
    const onValueChange = off;
    let obj = value(enabled[4]);
    const fn = function n() {
      if (closure_2) {
        let obj = { opacity: arg0(closure_2[10]).withSpring(closure_3 ? arg0 : arg1, arg0(closure_2[11]).SUBTLE_SPRING, "animate-always") };
        obj = {};
        const obj2 = arg0(closure_2[10]);
        const tmp6 = closure_3 ? arg0 : arg1;
        obj.scale = arg0(closure_2[10]).withSpring(1, arg0(closure_2[11]).SUBTLE_SPRING);
        const items = [obj];
        obj.transform = items;
        return obj;
      }
    };
    obj = { useReducedMotion: enabled, checked: first, on, off, withSpring: value(enabled[10]).withSpring, SUBTLE_SPRING: value(enabled[11]).SUBTLE_SPRING };
    fn.__closure = obj;
    fn.__workletHash = 14329332652102;
    fn.__initData = closure_11;
    return obj.useAnimatedStyle(fn);
  }
  ({ disabled, value } = onValueChange);
  const arg1 = value;
  const importDefault = onValueChange.onValueChange;
  ({ accessibilityLabel, accessibilityHint, aria-hidden: tmp } = onValueChange);
  const context = React.useContext(arg1(dependencyMap[8]).AccessibilityPreferencesContext);
  const dependencyMap = context.reducedMotion.enabled;
  const tmp3 = callback(React.useState(value), 2);
  const first = tmp3[0];
  const callback = first;
  const React = tmp3[1];
  const items = [value];
  const effect = React.useEffect(() => {
    callback(value);
  }, items);
  const tmp6 = importDefault(dependencyMap[9])("FormSwitch");
  const jsx = tmp6;
  const tmp7 = callback2();
  const selected = tmp7.selected;
  let closure_6 = selected;
  const unselectedBackground = tmp7.unselectedBackground;
  const callback2 = unselectedBackground;
  let obj = arg1(dependencyMap[4]);
  class G {
    constructor() {
      obj = {};
      obj2 = value(enabled[10]);
      if (closure_3) {
        tmp2 = selected;
        tintColor = selected.tintColor;
      } else {
        tmp = unselectedBackground;
        tintColor = unselectedBackground.tintColor;
      }
      obj.backgroundColor = obj2.withSpring(tintColor, value(enabled[11]).SUBTLE_SPRING, "animate-always");
      obj3 = value(enabled[10]);
      if (closure_3) {
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
  obj = { withSpring: arg1(dependencyMap[10]).withSpring, checked: first, selected, unselectedBackground, SUBTLE_SPRING: arg1(dependencyMap[11]).SUBTLE_SPRING };
  G.__closure = obj;
  G.__workletHash = 2232234503354;
  G.__initData = closure_9;
  const animatedStyle = obj.useAnimatedStyle(G);
  let obj2 = arg1(dependencyMap[12]);
  const token = obj2.useToken(importDefault(dependencyMap[6]).modules.mobile.CONTROL_SWITCH_KNOB_CHECKED_OFFSET);
  let closure_8 = token;
  let obj3 = arg1(dependencyMap[12]);
  const token1 = obj3.useToken(importDefault(dependencyMap[6]).colors.SWITCH_THUMB_BACKGROUND_DEFAULT);
  closure_9 = token1;
  let obj4 = arg1(dependencyMap[12]);
  const token2 = obj4.useToken(importDefault(dependencyMap[6]).colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT);
  let closure_10 = token2;
  const fn = function f() {
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
  obj = { withSpring: arg1(dependencyMap[10]).withSpring, checked: first, knobCheckedLeft: token, SUBTLE_SPRING: arg1(dependencyMap[11]).SUBTLE_SPRING, knobSelectedBackgroundColor: token2, knobBackgroundColor: token1 };
  fn.__closure = obj;
  fn.__workletHash = 3687946563898;
  fn.__initData = closure_10;
  const animatedStyle1 = arg1(dependencyMap[4]).useAnimatedStyle(fn);
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
      if (tmp6) {
        const triggerHapticFeedback = value(enabled[15]).triggerHapticFeedback;
        const tmp6 = onValueChange(enabled[16]);
        if (value) {
          const result = triggerHapticFeedback(tmp6.TOGGLE_OFF);
        } else {
          const result1 = triggerHapticFeedback(tmp6.TOGGLE_ON);
        }
        const tmp4 = value(enabled[15]);
      }
      if (null != onValueChange) {
        onValueChange(!value);
      }
    };
    obj1.disabled = disabled;
    obj1.accessible = true;
    obj1.aria-hidden = tmp;
    obj1.accessibilityRole = "switch";
    obj1.accessibilityLabel = accessibilityLabel;
    obj1.accessibilityHint = accessibilityHint;
    obj2 = { disabled, checked: first };
    obj1.accessibilityState = obj2;
    obj1.onAccessibilityTap = function onAccessibilityTap() {
      if (tmp6) {
        const triggerHapticFeedback = value(enabled[15]).triggerHapticFeedback;
        const tmp6 = onValueChange(enabled[16]);
        if (value) {
          const result = triggerHapticFeedback(tmp6.TOGGLE_OFF);
        } else {
          const result1 = triggerHapticFeedback(tmp6.TOGGLE_ON);
        }
        const tmp4 = value(enabled[15]);
      }
      callback(!value);
      const timerId = setTimeout(() => {
        if (null != callback) {
          callback(!closure_0);
        }
      });
    };
    obj3 = {};
    const items2 = [tmp7.knob, animatedStyle1];
    obj3.style = items2;
    obj3.children = null;
    obj1.children = jsx(importDefault(dependencyMap[4]).View, obj3);
    return <closure_6 {...obj1} />;
  } else {
    obj4 = {};
    if (!first) {
      obj4.source = tmp18(tmp19[14]);
      obj4.size = tmp18(tmp19[7]).Sizes.SMALL;
      const items3 = [tmp7.unselectedIcon, iconAnimation1];
      obj4.style = items3;
      tmp16(tmp17, obj4);
    }
    obj4.source = importDefault(dependencyMap[13]);
    let selectedIcon = importDefault(dependencyMap[7]).Sizes;
    obj4.size = tmp6 ? selectedIcon.SMALL_20 : selectedIcon.SMALL;
    selectedIcon = tmp7.selectedIcon;
    const items4 = [selectedIcon, iconAnimation];
    obj4.style = items4;
  }
};
