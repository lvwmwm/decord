// Module ID: 13079
// Function ID: 100981
// Name: SpeakerPulse
// Dependencies: [31, 27, 4122, 33, 4130, 689, 566, 3991, 4131, 2]
// Exports: default

// Module 13079 (SpeakerPulse)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.pulse = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.border = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_SPEAKING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function SpeakerPulseTsx1(){const{animatedInnerOpacity}=this.__closure;return{opacity:animatedInnerOpacity.get()};}" };
let closure_11 = { code: "function SpeakerPulseTsx2(){const{animatedOuterOpacity}=this.__closure;return{opacity:animatedOuterOpacity.get()};}" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_SPEAKING };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/components/SpeakerPulse.tsx");

export default function SpeakerPulse(style) {
  style = style.style;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = stateFromStores(sharedValue1[6]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => !outer1_5.useReducedMotion, []);
  const sharedValue = stateFromStores(sharedValue1[7]).useSharedValue(0.16);
  let obj2 = stateFromStores(sharedValue1[7]);
  sharedValue1 = stateFromStores(sharedValue1[7]).useSharedValue(0.16);
  const items1 = [stateFromStores, sharedValue, sharedValue1];
  const effect = React.useEffect(() => {
    let obj = sharedValue;
    if (stateFromStores) {
      const result = set(0);
      const result1 = sharedValue1.set(0);
      let obj1 = stateFromStores(sharedValue1[7]);
      let obj2 = stateFromStores(sharedValue1[7]);
      const obj4 = stateFromStores(sharedValue1[7]);
      obj = { duration: 250 };
      const obj5 = stateFromStores(sharedValue1[8]);
      const withDelayResult = obj4.withDelay(100, stateFromStores(sharedValue1[8]).withTiming(0.16, obj));
      const obj7 = stateFromStores(sharedValue1[7]);
      obj = { duration: 500 };
      const obj8 = stateFromStores(sharedValue1[8]);
      const withRepeatResult = obj1.withRepeat(obj2.withSequence(withDelayResult, obj7.withDelay(250, stateFromStores(sharedValue1[8]).withTiming(0, obj))), -1, false);
      const obj10 = stateFromStores(sharedValue1[7]);
      const obj11 = stateFromStores(sharedValue1[7]);
      const obj12 = stateFromStores(sharedValue1[7]);
      obj1 = { duration: 250 };
      const obj13 = stateFromStores(sharedValue1[8]);
      const withDelayResult1 = obj12.withDelay(350, stateFromStores(sharedValue1[8]).withTiming(0.16, obj1));
      obj2 = { duration: 500 };
      const obj15 = stateFromStores(sharedValue1[8]);
      const result2 = obj.set(withRepeatResult);
      const result3 = sharedValue1.set(obj10.withRepeat(obj11.withSequence(withDelayResult1, stateFromStores(sharedValue1[8]).withTiming(0, obj2)), -1, false));
      const withRepeatResult1 = obj10.withRepeat(obj11.withSequence(withDelayResult1, stateFromStores(sharedValue1[8]).withTiming(0, obj2)), -1, false);
    } else {
      const result4 = set(0.16);
      const result5 = sharedValue1.set(0.16);
    }
  }, items1);
  const obj3 = stateFromStores(sharedValue1[7]);
  class T {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  T.__closure = { animatedInnerOpacity: sharedValue };
  T.__workletHash = 202297893401;
  T.__initData = closure_10;
  const animatedStyle = stateFromStores(sharedValue1[7]).useAnimatedStyle(T);
  let obj4 = stateFromStores(sharedValue1[7]);
  const fn = function k() {
    return { opacity: sharedValue1.get() };
  };
  fn.__closure = { animatedOuterOpacity: sharedValue1 };
  fn.__workletHash = 13537504931930;
  fn.__initData = closure_11;
  obj = {};
  const items2 = [tmp.border, style];
  const animatedStyle1 = stateFromStores(sharedValue1[7]).useAnimatedStyle(fn);
  const items3 = [callback(View, { style: items2 }), , ];
  const items4 = [tmp.pulse, style, animatedStyle, ];
  const items5 = [{ scale: 1.5 }];
  items4[3] = { transform: items5 };
  items3[1] = callback(sharedValue(sharedValue1[7]).View, { style: items4 });
  const items6 = [tmp.pulse, style, animatedStyle1, ];
  const items7 = [{ scale: 2 }];
  items6[3] = { transform: items7 };
  items3[2] = callback(sharedValue(sharedValue1[7]).View, { style: items6 });
  obj.children = items3;
  return callback2(closure_7, obj);
};
