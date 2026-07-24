// Module ID: 13054
// Function ID: 100883
// Name: AnimatedEllipsisDot
// Dependencies: [31, 27, 4122, 33, 4130, 689, 3991, 4131, 566, 2]

// Module 13054 (AnimatedEllipsisDot)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function AnimatedEllipsisDot(disableScale) {
  disableScale = disableScale.disableScale;
  const delay = disableScale.delay;
  const sequenceStartDelay = disableScale.sequenceStartDelay;
  const sequenceEndDelay = disableScale.sequenceEndDelay;
  let tmp = callback();
  const sharedValue = disableScale(sequenceStartDelay[6]).useSharedValue(0.4);
  let obj = disableScale(sequenceStartDelay[6]);
  const sharedValue1 = disableScale(sequenceStartDelay[6]).useSharedValue(0.75);
  let items = [delay, sequenceStartDelay, sequenceEndDelay, disableScale, sharedValue, sharedValue1];
  const effect = sequenceEndDelay.useEffect(() => {
    const tmp = (() => {
      function animateValue(set, value, value) {
        const obj = disableScale(sequenceStartDelay[6]);
        const obj2 = disableScale(sequenceStartDelay[6]);
        const obj3 = disableScale(sequenceStartDelay[6]);
        const obj4 = disableScale(sequenceStartDelay[7]);
        const withDelayResult = obj3.withDelay(outer2_2, disableScale(sequenceStartDelay[7]).withTiming(value, { duration: 0 }));
        const obj5 = disableScale(sequenceStartDelay[6]);
        const obj6 = disableScale(sequenceStartDelay[6]);
        const obj7 = disableScale(sequenceStartDelay[7]);
        const withTimingResult = disableScale(sequenceStartDelay[7]).withTiming(value, { duration: 350 });
        const obj8 = disableScale(sequenceStartDelay[7]);
        const withDelayResult1 = obj5.withDelay(outer2_1, obj6.withSequence(withTimingResult, disableScale(sequenceStartDelay[7]).withTiming(value, { duration: 350 })));
        const obj9 = disableScale(sequenceStartDelay[6]);
        const result = set.set(obj.withRepeat(obj2.withSequence(withDelayResult, withDelayResult1, obj9.withDelay(outer2_3, disableScale(sequenceStartDelay[7]).withTiming(value, { duration: 0 }))), -1));
      }
      animateValue.__closure = { withRepeat: disableScale(sequenceStartDelay[6]).withRepeat, withSequence: disableScale(sequenceStartDelay[6]).withSequence, withDelay: disableScale(sequenceStartDelay[6]).withDelay, sequenceStartDelay: outer1_2, withTiming: disableScale(sequenceStartDelay[7]).withTiming, delay: outer1_1, animationTimeMs: 350, sequenceEndDelay: outer1_3 };
      animateValue.__workletHash = 13305770376274;
      animateValue.__initData = outer2_8;
      return animateValue;
    })();
    tmp(sharedValue, 0.4, 1);
    if (!disableScale) {
      tmp(sharedValue1, 0.75, 1);
    }
    return () => {
      disableScale(sequenceStartDelay[6]).cancelAnimation(outer1_4);
      const obj = disableScale(sequenceStartDelay[6]);
      disableScale(sequenceStartDelay[6]).cancelAnimation(outer1_5);
    };
  }, items);
  let obj2 = disableScale(sequenceStartDelay[6]);
  class S {
    constructor() {
      obj = { opacity: closure_4.get() };
      tmp = undefined;
      if (!disableScale) {
        obj = {};
        tmp2 = useSharedValue;
        obj.scale = useSharedValue.get();
        items = [];
        items[0] = obj;
        tmp = items;
      }
      obj.transform = tmp;
      return obj;
    }
  }
  S.__closure = { opacityValue: sharedValue, disableScale, scaleValue: sharedValue1 };
  S.__workletHash = 5071157079925;
  S.__initData = closure_9;
  const animatedStyle = disableScale(sequenceStartDelay[6]).useAnimatedStyle(S);
  const style = [tmp.typingIndicatorDot, disableScale.dotStyle, animatedStyle];
  return jsx(delay(sequenceStartDelay[6]).View, { style });
}
function EllipsisDot(dotStyle) {
  const obj = {};
  const items = [callback().typingIndicatorDot, { opacity: 0.4 }, dotStyle.dotStyle];
  obj.style = items;
  return <View />;
}
let obj = { typingIndicator: { justifyContent: "center", alignItems: "center", flexDirection: "row", marginRight: 4 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, marginRight: 2, height: 6, width: 6 };
obj.typingIndicatorDot = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_8 = { code: "function animateValue_EllipsisTsx1(value,fromValue,toValue){const{withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay}=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));}" };
let closure_9 = { code: "function EllipsisTsx2(){const{opacityValue,disableScale,scaleValue}=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};}" };
const memoResult = importAllResult.memo(function Ellipsis(style) {
  let importDefault;
  let require;
  ({ dotStyle: require, disableScale: importDefault } = style);
  let dependencyMap;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  dependencyMap = obj.useStateFromStores(items, () => outer1_5.useReducedMotion) ? EllipsisDot : AnimatedEllipsisDot;
  obj = { style: items1, collapsable: false, children: items2.map((arg0, arg1, arg2) => outer1_6(closure_2, { delay: arg0 * 233.33333333333334, sequenceStartDelay: 116.66666666666667, sequenceEndDelay: 116.66666666666667 + 233.33333333333334 * (arg2.length - 1 - arg0), dotStyle: closure_0, disableScale: closure_1 }, arg0)) };
  items1 = [callback().typingIndicator, style.style];
  items2 = [0, 1, 2];
  return <View style={items1} collapsable={false}>{items2.map((arg0, arg1, arg2) => outer1_6(closure_2, { delay: arg0 * 233.33333333333334, sequenceStartDelay: 116.66666666666667, sequenceEndDelay: 116.66666666666667 + 233.33333333333334 * (arg2.length - 1 - arg0), dotStyle: closure_0, disableScale: closure_1 }, arg0))}</View>;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("design/void/Ellipsis/native/Ellipsis.tsx");

export default memoResult;
