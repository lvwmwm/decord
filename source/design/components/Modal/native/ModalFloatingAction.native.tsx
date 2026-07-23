// Module ID: 9904
// Function ID: 76633
// Name: ModalFloatingAction
// Dependencies: [31, 27, 33, 4130, 3991, 3849, 1557, 4542, 4546, 4554, 666, 9905, 2]
// Exports: ModalFloatingAction, ModalFloatingActionSpacer

// Module 9904 (ModalFloatingAction)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ floating: { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 16 }, spacer: { height: 96 } });
let closure_9 = { code: "function ModalFloatingActionNativeTsx1(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}" };
let result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalFloatingAction.native.tsx");

export const ModalFloatingAction = function ModalFloatingAction(isVisible) {
  isVisible = isVisible.isVisible;
  const floatingBackgroundColor = isVisible.floatingBackgroundColor;
  let obj = Object.create(null);
  obj.isVisible = 0;
  obj.floatingBackgroundColor = 0;
  const merged = Object.assign(isVisible, obj);
  let sharedValue;
  let enabled;
  obj = isVisible(sharedValue[4]);
  let num = 0;
  if (isVisible) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  enabled = enabled.useContext(isVisible(sharedValue[5]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let items = [isVisible, sharedValue];
  const tmp3 = callback2();
  const effect = enabled.useEffect(() => {
    let num = 0;
    if (isVisible) {
      num = 1;
    }
    const result = sharedValue.set(isVisible(sharedValue[7]).withSpring(num, isVisible(sharedValue[8]).SUBTLE_SPRING, "animate-always"));
  }, items);
  let obj1 = isVisible(sharedValue[4]);
  const fn = function y() {
    let obj = { opacity: isVisible(sharedValue[4]).interpolate(sharedValue.get(), [0, 1], [0, 1]), borderBottomColor: floatingBackgroundColor, borderBottomWidth: 16 };
    obj = {};
    const obj2 = isVisible(sharedValue[4]);
    let num = 0;
    const value = sharedValue.get();
    if (enabled) {
      num = 0.999999;
    }
    const items = [num, 1];
    obj.translateY = isVisible(sharedValue[4]).interpolate(value, items, [32, 0]);
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  obj = { interpolate: isVisible(sharedValue[4]).interpolate, sharedValue, floatingBackgroundColor, useReducedMotion: enabled };
  fn.__closure = obj;
  fn.__workletHash = 1679390676673;
  fn.__initData = closure_9;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj1 = { style: items1 };
  items1 = [animatedStyle, tmp3.floating, { paddingBottom: floatingBackgroundColor(sharedValue[6])().bottom }];
  let str = "none";
  if (isVisible) {
    str = "auto";
  }
  obj1.pointerEvents = str;
  let obj2 = {};
  const tmp5 = floatingBackgroundColor(sharedValue[6])();
  const tmp8 = closure_7;
  const tmp9 = floatingBackgroundColor(sharedValue[9]);
  const obj6 = floatingBackgroundColor(sharedValue[10])(floatingBackgroundColor);
  const items2 = [floatingBackgroundColor(sharedValue[10])(floatingBackgroundColor).alpha(0).hex(), floatingBackgroundColor];
  obj2.colors = items2;
  obj2.locations = [0, 0.5];
  obj2.style = absoluteFill.absoluteFill;
  const items3 = [callback(tmp9, obj2), ];
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3["variant"] = "primary";
  items3[1] = callback(isVisible(sharedValue[11]).ModalActionButton, obj3);
  obj1.children = items3;
  return tmp8(floatingBackgroundColor(sharedValue[4]).View, obj1);
};
export const ModalFloatingActionSpacer = function ModalFloatingActionSpacer() {
  return callback(closure_5, { style: callback2().spacer });
};
