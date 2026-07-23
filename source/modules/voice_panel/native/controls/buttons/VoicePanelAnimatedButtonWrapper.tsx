// Module ID: 15862
// Function ID: 122601
// Name: AnimatedButtonWrapper
// Dependencies: [31, 27, 10015, 33, 4130, 689, 3991, 15777, 477, 4542, 4131, 2]
// Exports: default

// Module 15862 (AnimatedButtonWrapper)
import result from "result";
import { MODE_CHANGE_PHYSICS } from "VoicePanelModes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { justifyContent: "center", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").modules.button.BORDER_RADIUS_LG };
_createForOfIteratorHelperLoose.pressableWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_7 = require("module_3991").createAnimatedComponent(require("get ActivityIndicator").Pressable);
let closure_8 = { code: "function VoicePanelAnimatedButtonWrapperTsx1(values){const{offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};}" };
let closure_9 = { code: "function VoicePanelAnimatedButtonWrapperTsx2(values){const{withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;return{initialValues:{originX:values.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};}" };
let result = require("VoicePanelModes").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx");

export default function AnimatedButtonWrapper(onPressOut) {
  let accessibilityLabel;
  let children;
  let disabled;
  let onLongPress;
  let onPress;
  let onPressIn;
  let props;
  ({ props, onPressIn } = onPressOut);
  onPressOut = onPressOut.onPressOut;
  const style = onPressOut.style;
  const pressed = onPressOut.pressed;
  let sharedValue;
  let c4;
  let jsx;
  let width;
  let height;
  let sharedValue1;
  ({ onPress, onLongPress, accessibilityLabel, children, disabled } = onPressOut);
  let obj = onPressIn(style[6]);
  sharedValue = obj.useSharedValue(false);
  if (null != pressed) {
    sharedValue = pressed;
  }
  const tmp2 = onPressOut(style[7])();
  c4 = tmp2;
  const tmp3 = width();
  jsx = tmp3;
  let items = [sharedValue, tmp2, onPressIn, onPressOut];
  const memo = sharedValue.useMemo(() => ({
    onPressIn: null != onPressIn ? onPressIn : (() => {
      outer1_4.lock();
      const result = outer1_3.set(true);
    }),
    onPressOut: null != onPressOut ? onPressOut : (() => {
      outer1_4.unlock();
      const result = outer1_3.set(false);
    })
  }), items);
  width = props.width;
  height = props.height;
  sharedValue1 = onPressIn(style[6]).useSharedValue(0);
  let items1 = [sharedValue1];
  const items2 = [sharedValue1];
  const memo1 = sharedValue.useMemo(() => {
    let obj = onPressIn(style[8]);
    if (!obj.isAndroid()) {
      const fn = function t(windowWidth) {
        const result = outer1_8.set(windowWidth.windowWidth / 2 - windowWidth.targetGlobalOriginX - windowWidth.targetWidth / 2);
        let obj = {};
        obj = { originX: windowWidth.targetOriginX + outer1_8.get(), opacity: 0, transform: items };
        items = [{ scale: 0.5 }];
        obj.initialValues = obj;
        obj = { originX: onPressIn(style[9]).withSpring(windowWidth.targetOriginX, c4) };
        const obj4 = onPressIn(style[9]);
        obj.opacity = onPressIn(style[10]).withTiming(1, { duration: 100 });
        const obj1 = {};
        const obj5 = onPressIn(style[10]);
        obj1.scale = onPressIn(style[9]).withSpring(1, c4);
        const items1 = [obj1];
        obj.transform = items1;
        obj.animations = obj;
        return obj;
      };
      obj = { offsetFromCenter: sharedValue1, withSpring: onPressIn(style[9]).withSpring, MODE_CHANGE_PHYSICS: c4, withTiming: onPressIn(style[10]).withTiming };
      fn.__closure = obj;
      fn.__workletHash = 16238937246135;
      fn.__initData = sharedValue1;
      return fn;
    }
  }, items1);
  const items3 = [style, tmp3.pressableWrapper, width, height];
  const memo2 = sharedValue.useMemo(() => {
    let obj = onPressIn(style[8]);
    if (!obj.isAndroid()) {
      const fn = function t(currentOriginX) {
        obj = { initialValues: obj };
        obj = { originX: currentOriginX.currentOriginX, opacity: 1, transform: items };
        items = [{ scale: 1 }];
        obj = { originX: onPressIn(style[9]).withSpring(currentOriginX.currentOriginX + outer1_8.get(), c4) };
        const obj4 = onPressIn(style[9]);
        obj.opacity = onPressIn(style[10]).withTiming(0, { duration: 100 });
        const obj1 = {};
        const obj5 = onPressIn(style[10]);
        obj1.scale = onPressIn(style[9]).withSpring(0.5, c4);
        const items1 = [obj1];
        obj.transform = items1;
        obj.animations = obj;
        return obj;
      };
      obj = { withSpring: onPressIn(style[9]).withSpring, offsetFromCenter: sharedValue1, MODE_CHANGE_PHYSICS: c4, withTiming: onPressIn(style[10]).withTiming };
      fn.__closure = obj;
      fn.__workletHash = 17504057367727;
      fn.__initData = outer1_9;
      return fn;
    }
  }, items2);
  obj = { entering: memo1, exiting: memo2, onPress, onLongPress, disabled };
  const memo3 = sharedValue.useMemo(() => {
    const items = [_undefined.pressableWrapper, { width, height }, style];
    return items;
  }, items3);
  const merged = Object.assign(memo);
  obj["accessibilityRole"] = "button";
  obj["accessibilityLabel"] = accessibilityLabel;
  obj["style"] = memo3;
  obj["children"] = children;
  return <height entering={memo1} exiting={memo2} onPress={onPress} onLongPress={onLongPress} disabled={disabled} />;
};
