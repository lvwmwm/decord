// Module ID: 13990
// Function ID: 107031
// Name: result
// Dependencies: [31, 27, 33, 4547, 3991, 8063, 4130, 689, 477, 4131, 4126, 8569, 2]
// Exports: default

// Module 13990 (result)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { Easing } from "module_3991";
import { Easing as Easing2 } from "module_3991";
import { Easing as Easing3 } from "module_3991";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let result = (require("getButtonPadding").SMALL_BUTTON_HEIGHT - 4) / 2;
let closure_8 = 2 * Math.PI * result;
let closure_9 = Easing.bezier(0.15, 0.21, 0.58, 1);
let closure_10 = Easing2.bezier(0.61, 0, 0.58, 1);
let closure_11 = Easing3.bezier(0.42, 0, 0.58, 1);
let closure_12 = require("module_3991").createAnimatedComponent(require("inlineStyles").Circle);
let obj = {};
obj = { alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, width: require("getButtonPadding").SMALL_BUTTON_HEIGHT, height: require("getButtonPadding").SMALL_BUTTON_HEIGHT };
obj.progress = obj;
let items = [{ rotate: "-90deg" }];
obj.ring = { position: "absolute", transform: items };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST };
obj.trackPath = _createForOfIteratorHelperLoose;
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
let num;
if (set.isAndroid()) {
  num = 14;
}
obj2.lineHeight = num;
obj.countdownText = obj2;
obj.checkmarkLayer = { position: "absolute", inset: 6, alignItems: "center", justifyContent: "center" };
let obj3 = { width: 20, height: 20, backgroundColor: "#2ECC71", borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.checkmarkBackground = obj3;
obj.checkmarkIcon = { width: 20, height: 20 };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = { code: "function BountiesModalTimerTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE-PROGRESS_CIRCUMFERENCE*animatedProgress.get()};}" };
let closure_15 = { code: "function BountiesModalTimerTsx2(){const{checkmarkBackgroundScale}=this.__closure;return{transform:[{scale:checkmarkBackgroundScale.get()}]};}" };
let closure_16 = { code: "function BountiesModalTimerTsx3(){const{checkmarkScale}=this.__closure;return{transform:[{scale:checkmarkScale.get()}]};}" };
let result1 = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalTimer.tsx");

export default function BountiesModalTimer(arg0) {
  let isCompleted;
  let remainingSeconds;
  let totalSeconds;
  ({ isCompleted, totalSeconds, remainingSeconds } = arg0);
  let _require;
  let importDefault;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let callback;
  const tmp = callback3();
  let tmp2 = isCompleted;
  if (!isCompleted) {
    tmp2 = remainingSeconds <= 0;
  }
  _require = tmp2;
  importDefault = 0;
  const bound = Math.max(1, Math.ceil(remainingSeconds));
  if (isCompleted) {
    importDefault = 1;
    let num2 = 1;
  } else {
    num2 = 0;
    if (totalSeconds > 0) {
      const diff = 1 - remainingSeconds / totalSeconds;
      importDefault = diff;
      num2 = diff;
    }
  }
  let obj = _require(sharedValue[4]);
  sharedValue = obj.useSharedValue(num2);
  let obj1 = _require(sharedValue[4]);
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = _require(sharedValue[4]);
  sharedValue2 = obj2.useSharedValue(0);
  let items = [sharedValue, num2];
  const effect = sharedValue1.useEffect(() => {
    const result = sharedValue.set(_undefined(sharedValue[9]).withTiming(c1, { duration: 500 }, "animate-always"));
  }, items);
  callback = sharedValue1.useRef(false);
  const items1 = [tmp2, sharedValue1, sharedValue2];
  const effect1 = sharedValue1.useEffect(() => {
    ref.current = true;
    let set = sharedValue1.set;
    if (_undefined) {
      if (!ref.current) {
        const result = set(1);
        set = sharedValue2;
        const result1 = sharedValue2.set(1);
      } else {
        let obj = _undefined(sharedValue[4]);
        let obj1 = _undefined(sharedValue[9]);
        obj = { duration: 267, easing: outer1_9 };
        const withTimingResult = obj1.withTiming(1.65, obj);
        obj = { duration: 233, easing: outer1_10 };
        const result2 = set(obj.withSequence(withTimingResult, _undefined(sharedValue[9]).withTiming(1, obj)));
        const obj4 = _undefined(sharedValue[9]);
        const obj6 = _undefined(sharedValue[4]);
        const obj7 = _undefined(sharedValue[4]);
        obj1 = { duration: 167, easing: outer1_11 };
        const obj8 = _undefined(sharedValue[9]);
        const withTimingResult1 = _undefined(sharedValue[9]).withTiming(1.25, obj1);
        const obj2 = { duration: 333, easing: outer1_11 };
        const result3 = sharedValue2.set(obj6.withDelay(167, obj7.withSequence(withTimingResult1, _undefined(sharedValue[9]).withTiming(1, obj2))));
        const obj10 = _undefined(sharedValue[9]);
      }
    } else {
      const result4 = set(0);
      const result5 = sharedValue2.set(0);
    }
  }, items1);
  let obj3 = _require(sharedValue[4]);
  class U {
    constructor() {
      obj = { strokeDashoffset: outer1_8 - outer1_8 * c2.get() };
      return obj;
    }
  }
  obj = { PROGRESS_CIRCUMFERENCE: closure_8, animatedProgress: sharedValue };
  U.__closure = obj;
  U.__workletHash = 12964700773124;
  U.__initData = closure_14;
  const animatedProps = obj3.useAnimatedProps(U);
  let obj5 = _require(sharedValue[4]);
  const fn = function x() {
    let obj = {};
    obj = { scale: sharedValue1.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { checkmarkBackgroundScale: sharedValue1 };
  fn.__workletHash = 10834015407160;
  fn.__initData = closure_15;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  let obj6 = _require(sharedValue[4]);
  class G {
    constructor() {
      obj = {};
      obj = { scale: c4.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  G.__closure = { checkmarkScale: sharedValue2 };
  G.__workletHash = 7510845920441;
  G.__initData = closure_16;
  obj = { style: tmp.progress };
  const animatedStyle1 = obj6.useAnimatedStyle(G);
  obj1 = { height: _require(sharedValue[3]).SMALL_BUTTON_HEIGHT, width: _require(sharedValue[3]).SMALL_BUTTON_HEIGHT, style: tmp.ring };
  obj2 = { cx: _require(sharedValue[3]).SMALL_BUTTON_HEIGHT / 2, cy: _require(sharedValue[3]).SMALL_BUTTON_HEIGHT / 2, r: closure_7, fill: "none", stroke: tmp.trackPath.color, strokeWidth: 4 };
  const items2 = [callback(_require(sharedValue[5]).Circle, obj2), ];
  obj3 = { cx: _require(sharedValue[3]).SMALL_BUTTON_HEIGHT / 2, cy: _require(sharedValue[3]).SMALL_BUTTON_HEIGHT / 2, r: closure_7, fill: "none", stroke: "#2ECC71", strokeWidth: 4, strokeDasharray: closure_8, strokeLinecap: "round", animatedProps };
  items2[1] = callback(closure_12, obj3);
  obj1.children = items2;
  const items3 = [callback2(importDefault(sharedValue[5]), obj1), , , ];
  let tmp16 = !tmp2;
  if (tmp16) {
    let obj4 = { variant: "text-sm/semibold", style: tmp.countdownText, maxFontSizeMultiplier: 1, children: bound };
    tmp16 = callback(_require(sharedValue[10]).Text, obj4);
  }
  items3[1] = tmp16;
  obj5 = { style: items4 };
  items4 = [tmp.checkmarkLayer, animatedStyle];
  obj6 = { style: tmp.checkmarkBackground };
  obj5.children = callback(sharedValue2, obj6);
  items3[2] = callback(importDefault(sharedValue[4]).View, obj5);
  let obj7 = { style: items5 };
  items5 = [tmp.checkmarkLayer, animatedStyle1];
  let obj8 = { size: "custom", color: importDefault(sharedValue[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, style: tmp.checkmarkIcon };
  obj7.children = callback(_require(sharedValue[11]).CheckmarkSmallBoldIcon, obj8);
  items3[3] = callback(importDefault(sharedValue[4]).View, obj7);
  obj.children = items3;
  return callback2(sharedValue2, obj);
};
