// Module ID: 11456
// Function ID: 89098
// Name: DiceRollBar
// Dependencies: [31, 27, 4122, 11129, 33, 4130, 689, 566, 3991, 4131, 1273, 11457, 8746, 4126, 2]
// Exports: default

// Module 11456 (DiceRollBar)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useDiceRollState } from "INITIAL_STATE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { animatedContainer: { overflow: "hidden" } };
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, gap: 12, borderTopWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function DiceRollBarTsx1(){const{useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};}" };
let closure_11 = { code: "function DiceRollBarTsx2(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/dice_roll/native/DiceRollBar.tsx");

export default function DiceRollBar(channelId) {
  let c4;
  let c5;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = useDiceRollState(channelId.channelId);
  let obj = stateFromStores(sharedValue1[7]);
  let items = [c5];
  stateFromStores = obj.useStateFromStores(items, () => _undefined.useReducedMotion);
  let obj1 = stateFromStores(sharedValue1[8]);
  const sharedValue = obj1.useSharedValue(0);
  let obj2 = stateFromStores(sharedValue1[8]);
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = stateFromStores(sharedValue1[8]);
  const sharedValue2 = obj3.useSharedValue(0);
  c4 = tmp7;
  let rolling;
  if (null != tmp2) {
    rolling = tmp2.rolling;
  }
  c5 = tmp9;
  const items1 = [null != tmp2 && !tmp2.dismissing, sharedValue, sharedValue1];
  const effect = sharedValue2.useEffect(() => {
    let num = 0;
    if (c4) {
      num = 56;
    }
    const result = sharedValue.set(num);
    let num2 = 0;
    if (c4) {
      num2 = 1;
    }
    const result1 = sharedValue1.set(num2);
  }, items1);
  const items2 = [null != rolling && rolling, stateFromStores, sharedValue2];
  const effect1 = sharedValue2.useEffect(() => {
    if (c5) {
      if (!stateFromStores) {
        let obj = stateFromStores(sharedValue1[8]);
        obj = { duration: 800, easing: stateFromStores(sharedValue1[8]).Easing.linear };
        const result = sharedValue2.set(obj.withRepeat(stateFromStores(sharedValue1[9]).withTiming(360, obj), -1, false));
        const obj2 = stateFromStores(sharedValue1[9]);
      }
    }
    const result1 = sharedValue2.set(0);
  }, items2);
  let obj4 = stateFromStores(sharedValue1[8]);
  const fn = function p() {
    let obj = {};
    if (stateFromStores) {
      obj.height = sharedValue.get();
      obj.opacity = sharedValue1.get();
      let tmp7 = obj;
    } else {
      obj = { duration: 300 };
      let value = sharedValue.get();
      obj.easing = stateFromStores(sharedValue1[10]).DECELERATED_EASING;
      obj.height = stateFromStores(sharedValue1[9]).withTiming(value, obj);
      const obj2 = stateFromStores(sharedValue1[9]);
      obj = { duration: 300 };
      value = sharedValue1.get();
      obj.easing = stateFromStores(sharedValue1[10]).DECELERATED_EASING;
      obj.opacity = stateFromStores(sharedValue1[9]).withTiming(value, obj);
      tmp7 = obj;
      const obj4 = stateFromStores(sharedValue1[9]);
    }
    return tmp7;
  };
  obj = { useReducedMotion: stateFromStores, height: sharedValue, opacity: sharedValue1, withTiming: stateFromStores(sharedValue1[9]).withTiming, ANIMATION_DURATION_MS: 300, DECELERATED_EASING: stateFromStores(sharedValue1[10]).DECELERATED_EASING };
  fn.__closure = obj;
  fn.__workletHash = 2405066513233;
  fn.__initData = closure_10;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  stateFromStores(sharedValue1[8]);
  const fn2 = function y() {
    let obj = {};
    obj = { rotate: "" + sharedValue2.get() + "deg" };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { rotation: sharedValue2 };
  fn2.__workletHash = 12265072947874;
  fn2.__initData = closure_11;
  if (null == tmp2) {
    return null;
  } else {
    const barText = stateFromStores(sharedValue1[11]).getBarText(tmp9, tmp2.results);
    obj = {};
    const items3 = [animatedStyle, tmp.animatedContainer];
    obj.style = items3;
    obj1 = { style: tmp.container };
    obj2 = { style: tmp14 };
    obj3 = { size: "md" };
    obj2.children = callback(stateFromStores(sharedValue1[12]).DiceIcon, obj3);
    const items4 = [callback(sharedValue(sharedValue1[8]).View, obj2), ];
    obj4 = { variant: "text-sm/normal", color: "text-default", children: barText };
    items4[1] = callback(stateFromStores(sharedValue1[13]).Text, obj4);
    obj1.children = items4;
    obj.children = callback2(c4, obj1);
    return callback(sharedValue(sharedValue1[8]).View, obj);
  }
};
