// Module ID: 19927
// Function ID: 19928
// Name: VoicePanelAnimatedButtonWrapper
// Dependencies: [19, 17, 11919, 21, 5243, 575, 1652, 19790, 1377, 5876, 5485, 2]
// Exports: default

// Module 19927 (VoicePanelAnimatedButtonWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import timing_timing from "timing/timing" /* 5485 */;
import spring_spring from "spring/spring" /* 5876 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11919 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import module_1652 from "module_1652" /* 1652 */;
import size_mod from "module_2" /* 2 */;

let obj1, obj5, obj6;

let obj2;
const Pressable = react_native.Pressable;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
let jsx = Fragment.jsx;
let obj = { pressableWrapper: obj2 };
obj2 = { justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.modules.button.BORDER_RADIUS_LG };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = module_1652.createAnimatedComponent(Pressable);
let closure_8 = { code: "(function VoicePanelAnimatedButtonWrapperTsx1(values){let[offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming]=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};})" };
let closure_9 = { code: "(function VoicePanelAnimatedButtonWrapperTsx2(values){let[withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming]=this.__closure;return{initialValues:{originX:values.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx");

export default function AnimatedButtonWrapper(onPressOut) {
  let accessibilityHint;
  let accessibilityLabel;
  let children;
  let disabled;
  let onLongPress;
  let onPress;
  let onPressIn;
  let pressableWrapper;
  let props;
  ({ props, onPressIn } = onPressOut);
  onPressOut = onPressOut.onPressOut;
  const style = onPressOut.style;
  let pressed;
  let closure_4;
  jsx = undefined;
  let width;
  let height;
  let sharedValue;
  ({ onPress, onLongPress, accessibilityLabel, accessibilityHint, children, disabled } = onPressOut);
  let obj = onPressIn(style[6]);
  const tmp = onPressIn;
  if (pressed == null) {
    pressed = obj.useSharedValue(false);
  }
  const tmp3 = onPressOut(style[7])();
  closure_4 = tmp3;
  const tmp4 = width();
  jsx = tmp4;
  let items = [pressed, tmp3, onPressIn, onPressOut];
  const memo = pressed.useMemo(() => {
    let fn2;
    let fn = onPressIn;
    if (onPressIn == null) {
      fn = () => {
        closure_1_4.lock();
        const result = pressed.set(true);
      };
    }
    const obj = { onPressIn: fn, onPressOut: fn2 };
    fn2 = onPressOut;
    if (onPressOut == null) {
      fn2 = () => {
        closure_1_4.unlock();
        const result = pressed.set(false);
      };
    }
    return obj;
  }, items);
  width = props.width;
  height = props.height;
  const tmpResult = tmp(style[6]);
  sharedValue = tmpResult.useSharedValue(0);
  let items1 = [sharedValue];
  const items2 = [sharedValue];
  const memo1 = pressed.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp7;
    let tmp8;
    let tmp9;
    let obj = PlatformUtils;
    if (!obj.isAndroid()) {
      let items = [closure_8, sharedValue, spring_spring.withSpring, MODE_CHANGE_PHYSICS, timing_timing.withTiming];
      let c0;
      let c1;
      let c2;
      let c3;
      [tmp7, tmp8, tmp9, tmp10, tmp11] = items;
      class VoicePanelAnimatedButtonWrapperTsx1 {
        constructor(arg0) {
          result = closure_0.set(arg0.windowWidth / 2 - arg0.targetGlobalOriginX - arg0.targetWidth / 2);
          obj = { initialValues: null, animations: null };
          obj1 = { originX: arg0.targetOriginX + closure_0.get(), opacity: 0, transform: null };
          items = [];
          items[0] = { scale: 0.5 };
          obj1.transform = items;
          obj.initialValues = obj1;
          obj5 = { originX: closure_1(arg0.targetOriginX, closure_2), opacity: closure_3(1, { duration: 100 }), transform: null };
          obj6 = { scale: closure_1(1, closure_2) };
          items1 = [];
          items1[0] = obj6;
          obj5.transform = items1;
          obj.animations = obj5;
          return obj;
        }
      }
      let items1 = [tmp8, tmp9, tmp10, tmp11];
      VoicePanelAnimatedButtonWrapperTsx1.__closure = items1;
      VoicePanelAnimatedButtonWrapperTsx1.__workletHash = 6115796697934;
      VoicePanelAnimatedButtonWrapperTsx1.__initData = tmp7;
      return VoicePanelAnimatedButtonWrapperTsx1;
    }
  }, items1);
  const items3 = [style, tmp4.pressableWrapper, width, height];
  const memo2 = pressed.useMemo(() => {
    let tmp10;
    let tmp11;
    let tmp7;
    let tmp8;
    let tmp9;
    let obj = PlatformUtils;
    if (!obj.isAndroid()) {
      let items = [closure_9, spring_spring.withSpring, sharedValue, MODE_CHANGE_PHYSICS, timing_timing.withTiming];
      let c0;
      let c1;
      let c2;
      let c3;
      [tmp7, tmp8, tmp9, tmp10, tmp11] = items;
      class VoicePanelAnimatedButtonWrapperTsx2 {
        constructor(arg0) {
          obj = { initialValues: null, animations: null };
          obj1 = { originX: arg0.currentOriginX, opacity: 1, transform: null };
          items = [];
          items[0] = { scale: 1 };
          obj1.transform = items;
          obj.initialValues = obj1;
          obj5 = { originX: closure_0(arg0.currentOriginX + closure_1.get(), closure_2), opacity: closure_3(0, { duration: 100 }), transform: null };
          obj6 = { scale: closure_0(0.5, closure_2) };
          items1 = [];
          items1[0] = obj6;
          obj5.transform = items1;
          obj.animations = obj5;
          return obj;
        }
      }
      let items1 = [tmp8, tmp9, tmp10, tmp11];
      VoicePanelAnimatedButtonWrapperTsx2.__closure = items1;
      VoicePanelAnimatedButtonWrapperTsx2.__workletHash = 1297258033910;
      VoicePanelAnimatedButtonWrapperTsx2.__initData = tmp7;
      return VoicePanelAnimatedButtonWrapperTsx2;
    }
  }, items2);
  const memo3 = pressed.useMemo(() => {
    const items = [pressableWrapper.pressableWrapper, , ];
    size = { width, height };
    items[1] = size;
    items[2] = style;
    return items;
  }, items3);
  const merged = Object.assign(memo);
  return <height entering={memo1} exiting={memo2} onPress={onPress} onLongPress={onLongPress} disabled={disabled} accessibilityRole="button" accessibilityLabel={accessibilityLabel} accessibilityHint={accessibilityHint} style={memo3}>{children}</height>;
};
