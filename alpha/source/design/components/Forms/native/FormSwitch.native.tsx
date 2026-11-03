// Module ID: 7490
// Function ID: 7491
// Name: FormSwitch
// Dependencies: [32, 19, 17, 21, 1652, 5141, 575, 5756, 5155, 5757, 5758, 5719, 7116, 7491, 5383, 5384, 2]
// Exports: FormSwitch

// Module 7490 (FormSwitch)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import HapticUtils from "HapticUtils" /* 5383 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5384 */;
import IconDefault from "Icon" /* 5756 */;
import spring_spring from "spring/spring" /* 5757 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const module_1652_mod = _mod1652;
let set;

let obj2;
let obj3;
let size;
let size1;
let tmp3;
const springPresets = tmp3(5758);
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let module_1652 = module_1652_mod;
let closure_6 = module_1652.createAnimatedComponent(Pressable);
let createStyles = createStyles_mod;
let obj = { switch: size, unselectedIcon: obj2, selectedIcon: obj3, knob: size1 };
size = { width: nativeDefault.modules.mobile.CONTROL_SWITCH_WIDTH, height: nativeDefault.modules.mobile.CONTROL_SWITCH_HEIGHT, padding: nativeDefault.space.PX_4 - 1, flexGrow: 0, flexShrink: 0, borderRadius: nativeDefault.radii.lg, borderWidth: 1, backgroundColor: nativeDefault.colors.SWITCH_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.SWITCH_BORDER_DEFAULT };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_DEFAULT };
obj3 = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_ACTIVE };
size1 = { height: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.SWITCH_THUMB_BACKGROUND_DEFAULT };
let closure_7 = createStyles(obj);
module_1652 = module_1652_mod;
const Icon = module_1652.createAnimatedComponent(IconDefault);
let closure_9 = { code: "(function FormSwitchNativeTsx1(){let[progress,interpolateColor,trackColor,trackSelectedColor,trackBorderColor,trackBorderSelectedColor]=this.__closure;const t=progress.get();return{backgroundColor:interpolateColor(t,[0,1],[trackColor,trackSelectedColor]),borderColor:interpolateColor(t,[0,1],[trackBorderColor,trackBorderSelectedColor])};})" };
let closure_10 = { code: "(function FormSwitchNativeTsx2(){let[progress,interpolate,knobCheckedLeft,interpolateColor,knobBackgroundColor,knobSelectedBackgroundColor]=this.__closure;const t=progress.get();return{left:interpolate(t,[0,1],[0,knobCheckedLeft]),backgroundColor:interpolateColor(t,[0,1],[knobBackgroundColor,knobSelectedBackgroundColor])};})" };
let closure_11 = { code: "(function FormSwitchNativeTsx3(){let[progress,interpolate,off,on,useReducedMotion]=this.__closure;const t=progress.get();const opacity=interpolate(t,[0,1],[off,on]);const scale=useReducedMotion?1:interpolate(t,[0,1],[off,on]);return{opacity:opacity,transform:[{scale:scale}]};})" };
size = size_mod;
let result = size.fileFinishedImporting("design/components/Forms/native/FormSwitch.native.tsx");

export function FormSwitch(onValueChange) {
  let accessibilityHint;
  let accessibilityLabel;
  let disabled;
  let enabled;
  let obj3;
  let obj4;
  let sharedValue;
  let tmp;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp6;
  let value;
  ({ disabled, value } = onValueChange);
  const require = value;
  onValueChange = onValueChange.onValueChange;
  let obj = sharedValue;
  let tmp2 = require;
  let tmp3 = enabled;
  ({ accessibilityLabel, accessibilityHint, "aria-hidden": tmp } = onValueChange);
  const context = sharedValue.useContext(require("react").AccessibilityPreferencesContext);
  enabled = context.reducedMotion.enabled;
  const switchIconsEnabled = context.switchIconsEnabled;
  const tmp5 = _slicedToArray(sharedValue.useState(value), 2);
  [tmp6, _slicedToArray] = tmp5;
  const tmp7 = require("module_1652");
  let num = 0;
  const useSharedValue = tmp7.useSharedValue;
  if (value) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items = [value, sharedValue];
  const effect = obj.useEffect(() => {
    _slicedToArray(require);
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring_spring.withSpring;
    spring_spring;
    if (require) {
      num = 1;
    }
    const result = set(withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  }, items);
  const tmp10 = closure_7();
  const tmp2Result = tmp2(tmp3[11]);
  const token = tmp2Result.useToken(onValueChange(tmp3[6]).colors.SWITCH_BACKGROUND_DEFAULT);
  const tmp2Result9 = tmp2(tmp3[11]);
  const token1 = tmp2Result9.useToken(onValueChange(tmp3[6]).colors.SWITCH_BACKGROUND_SELECTED_DEFAULT);
  const tmp2Result10 = tmp2(tmp3[11]);
  const token2 = tmp2Result10.useToken(onValueChange(tmp3[6]).colors.SWITCH_BORDER_DEFAULT);
  const tmp2Result11 = tmp2(tmp3[11]);
  const token3 = tmp2Result11.useToken(onValueChange(tmp3[6]).colors.SWITCH_BORDER_SELECTED_DEFAULT);
  const tmp2Result12 = tmp2(tmp3[11]);
  const token4 = tmp2Result12.useToken(onValueChange(tmp3[6]).modules.mobile.CONTROL_SWITCH_KNOB_CHECKED_OFFSET);
  const tmp2Result13 = tmp2(tmp3[11]);
  const token5 = tmp2Result13.useToken(onValueChange(tmp3[6]).colors.SWITCH_THUMB_BACKGROUND_DEFAULT);
  const tmp2Result14 = tmp2(tmp3[11]);
  const token6 = tmp2Result14.useToken(onValueChange(tmp3[6]).colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT);
  let items1 = [closure_9, sharedValue, , , , , ];
  let useAnimatedStyle = tmp2(tmp3[4]).useAnimatedStyle;
  tmp2(tmp3[4]);
  items1[2] = tmp2(tmp3[4]).interpolateColor;
  items1[3] = token;
  items1[4] = token1;
  items1[5] = token2;
  items1[6] = token3;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items1;
  class FormSwitchNativeTsx1 {
    constructor() {
      let items;
      let items1;
      value = _undefined.get();
      const obj = { backgroundColor: _undefined2(value, [0, 1], items), borderColor: _undefined2(value, [0, 1], items1) };
      items = [c2, c3];
      items1 = [c4, c5];
      return obj;
    }
  }
  let items2 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  FormSwitchNativeTsx1.__closure = items2;
  FormSwitchNativeTsx1.__workletHash = 962173607693;
  FormSwitchNativeTsx1.__initData = tmp20;
  const animatedStyle = useAnimatedStyle(FormSwitchNativeTsx1);
  const items3 = [closure_10, sharedValue, , , , , ];
  const useAnimatedStyle2 = tmp2(tmp3[4]).useAnimatedStyle;
  tmp2(tmp3[4]);
  items3[2] = tmp2(tmp3[4]).interpolate;
  items3[3] = token4;
  items3[4] = tmp2(tmp3[4]).interpolateColor;
  items3[5] = token5;
  items3[6] = token6;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items3;
  function useIconAnimation(arg0, arg1) {
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let items = [closure_11, sharedValue, , , , ];
    const useAnimatedStyle = _mod1652.useAnimatedStyle;
    _mod1652;
    items[2] = _mod1652.interpolate;
    items[3] = arg1;
    items[4] = arg0;
    items[5] = enabled;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
    class FormSwitchNativeTsx3 {
      constructor() {
        value = closure_0.get();
        obj = { opacity: null, transform: null };
        items = [, ];
        items[0] = closure_2;
        items[1] = closure_3;
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        obj.opacity = closure_1(value, [0, 1], items);
        num = 1;
        if (!closure_4) {
          items1 = [, ];
          items1[0] = tmp3;
          items1[1] = tmp4;
          num = tmp2(value, [0, 1], items1);
        }
        items2 = [];
        items2[0] = { scale: num };
        obj.transform = items2;
        return obj;
      }
    }
    let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7];
    FormSwitchNativeTsx3.__closure = items1;
    FormSwitchNativeTsx3.__workletHash = 4913489422961;
    FormSwitchNativeTsx3.__initData = tmp2;
    return useAnimatedStyle(FormSwitchNativeTsx3);
  }
  class FormSwitchNativeTsx2 {
    constructor() {
      let items;
      let items1;
      value = _undefined.get();
      const obj = { left: _undefined2(value, [0, 1], items), backgroundColor: _undefined3(value, [0, 1], items1) };
      items = [0, c2];
      items1 = [c4, c5];
      return obj;
    }
  }
  const items4 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  FormSwitchNativeTsx2.__closure = items4;
  FormSwitchNativeTsx2.__workletHash = 13709465542766;
  FormSwitchNativeTsx2.__initData = tmp29;
  const animatedStyle2 = useAnimatedStyle2(FormSwitchNativeTsx2);
  const iconAnimation = useIconAnimation(1, 0);
  let tmp40Result = null;
  if (switchIconsEnabled) {
    let tmp42;
    const obj2 = { source: null, size: null, style: null };
    const tmp40 = jsx;
    const tmp41 = Icon;
    if (tmp6) {
      obj2.source = onValueChange(tmp3[12]);
      obj2.size = onValueChange(tmp3[7]).Sizes.SMALL_20;
      const items5 = [tmp10.selectedIcon, iconAnimation];
      obj2.style = items5;
      tmp42 = obj2;
    } else {
      obj2.source = onValueChange(tmp3[13]);
      obj2.size = onValueChange(tmp3[7]).Sizes.SMALL;
      const items6 = [tmp10.unselectedIcon, tmp38];
      obj2.style = items6;
      tmp42 = obj2;
    }
    tmp40Result = tmp40(tmp41, tmp42);
  }
  if (tmp) {
    obj3 = { "aria-hidden": true, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  } else {
    obj3 = {
      accessible: true,
      accessibilityRole: "switch",
      accessibilityLabel,
      accessibilityHint,
      accessibilityState: obj4,
      onAccessibilityTap: function handleAccessibilityTap() {
          const tmp = require;
          const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
          const tmp3 = haptics_HapticFeedbackTypesDefault;
          if (require) {
            const result = triggerHapticFeedback(tmp3.TOGGLE_OFF);
          } else {
            const result1 = triggerHapticFeedback(tmp3.TOGGLE_ON);
          }
          _slicedToArray(!tmp);
          let num = 1;
          set = sharedValue.set;
          const withSpring = spring_spring.withSpring;
          spring_spring;
          if (tmp) {
            num = 0;
          }
          const result2 = set(withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
          const timerId = setTimeout(() => {
            if (onValueChange != null) {
              tmp(!closure_1_0);
            }
          });
        }
    };
    obj4 = { disabled, checked: tmp6 };
  }
  const items7 = [tmp10.switch, animatedStyle];
  const merged = Object.assign(obj3);
  const items8 = [tmp10.knob, animatedStyle2];
  return <closure_6 style={items7} onPress={function onPress() {
    const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
    HapticUtils;
    const tmp3 = haptics_HapticFeedbackTypesDefault;
    if (require) {
      const result = triggerHapticFeedback(tmp3.TOGGLE_OFF);
    } else {
      const result1 = triggerHapticFeedback(tmp3.TOGGLE_ON);
    }
    if (onValueChange != null) {
      tmp6(!require);
    }
  }} disabled={disabled}>{jsx(onValueChange(tmp3[4]).View, { style: items8, children: tmp40Result })}</closure_6>;
}
