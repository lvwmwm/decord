// Module ID: 17009
// Function ID: 17010
// Name: VoicePanelAnimatedButtonWrapper
// Dependencies: [19, 17, 11755, 21, 4836, 576, 4566, 16918, 1364, 5280, 4837, 2]
// Exports: default

// Module 17009 (VoicePanelAnimatedButtonWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const Pressable = react_native.Pressable;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
let jsx = Fragment.jsx;
let obj = { pressableWrapper: obj2 };
obj2 = { justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.modules.button.BORDER_RADIUS_LG };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = ReanimatedRexport.createAnimatedComponent(Pressable);
let closure_8 = { code: "function VoicePanelAnimatedButtonWrapperTsx1(values){const{offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};}" };
let closure_9 = { code: "function VoicePanelAnimatedButtonWrapperTsx2(values){const{withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;return{initialValues:{originX:values.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};}" };
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
    let obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const fn = function t(windowWidth) {
        let items;
        let items1;
        let obj2;
        let obj3;
        let obj4;
        let obj5;
        let obj7;
        const result = __initData.set(windowWidth.windowWidth / 2 - windowWidth.targetGlobalOriginX - windowWidth.targetWidth / 2);
        const obj = { initialValues: obj2, animations: obj3 };
        obj2 = { originX: windowWidth.targetOriginX + __initData.get(), opacity: 0, transform: items };
        items = [{ scale: 0.5 }];
        obj3 = { originX: obj4.withSpring(windowWidth.targetOriginX, closure_4), opacity: obj5.withTiming(1, { duration: 100 }), transform: items1 };
        obj4 = onPressIn(style[9]);
        obj5 = onPressIn(style[10]);
        const obj6 = { scale: obj7.withSpring(1, closure_4) };
        items1 = [obj6];
        obj7 = onPressIn(style[9]);
        return obj;
      };
      let obj2 = { offsetFromCenter: sharedValue, withSpring: spring.withSpring, MODE_CHANGE_PHYSICS, withTiming: timing.withTiming };
      fn.__closure = obj2;
      fn.__workletHash = 16238937246135;
      fn.__initData = __initData;
      return fn;
    }
  }, items1);
  const items3 = [style, tmp4.pressableWrapper, width, height];
  const memo2 = pressed.useMemo(() => {
    let obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const fn = function t(currentOriginX) {
        let items;
        let items1;
        let obj2;
        let obj3;
        let obj4;
        let obj5;
        let obj7;
        const obj = { initialValues: obj2, animations: obj3 };
        obj2 = { originX: currentOriginX.currentOriginX, opacity: 1, transform: items };
        items = [{ scale: 1 }];
        obj3 = { originX: obj4.withSpring(currentOriginX.currentOriginX + __initData.get(), closure_4), opacity: obj5.withTiming(0, { duration: 100 }), transform: items1 };
        obj4 = onPressIn(style[9]);
        obj5 = onPressIn(style[10]);
        const obj6 = { scale: obj7.withSpring(0.5, closure_4) };
        items1 = [obj6];
        obj7 = onPressIn(style[9]);
        return obj;
      };
      let obj2 = { withSpring: spring.withSpring, offsetFromCenter: sharedValue, MODE_CHANGE_PHYSICS, withTiming: timing.withTiming };
      fn.__closure = obj2;
      fn.__workletHash = 17504057367727;
      fn.__initData = __initData2;
      return fn;
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
