// Module ID: 12888
// Function ID: 98404
// Name: AnimatedEllipsisDot
// Dependencies: []

// Module 12888 (AnimatedEllipsisDot)
function AnimatedEllipsisDot(disableScale) {
  disableScale = disableScale.disableScale;
  const arg1 = disableScale;
  const delay = disableScale.delay;
  const importDefault = delay;
  const sequenceStartDelay = disableScale.sequenceStartDelay;
  const dependencyMap = sequenceStartDelay;
  const sequenceEndDelay = disableScale.sequenceEndDelay;
  const importAllResult = sequenceEndDelay;
  const tmp = callback();
  const sharedValue = arg1(dependencyMap[6]).useSharedValue(0.4);
  const View = sharedValue;
  const obj = arg1(dependencyMap[6]);
  const sharedValue1 = arg1(dependencyMap[6]).useSharedValue(0.75);
  let closure_5 = sharedValue1;
  const items = [delay, sequenceStartDelay, sequenceEndDelay, disableScale, sharedValue, sharedValue1];
  const effect = importAllResult.useEffect(() => {
    const tmp = () => {
      function animateValue(set, value, value) {
        const obj = callback(closure_2[6]);
        const obj2 = callback(closure_2[6]);
        const obj3 = callback(closure_2[6]);
        const obj4 = callback(closure_2[7]);
        const withDelayResult = obj3.withDelay(closure_2, callback(closure_2[7]).withTiming(value, { duration: 0 }));
        const obj5 = callback(closure_2[6]);
        const obj6 = callback(closure_2[6]);
        const obj7 = callback(closure_2[7]);
        const withTimingResult = callback(closure_2[7]).withTiming(value, { duration: 350 });
        const obj8 = callback(closure_2[7]);
        const withDelayResult1 = obj5.withDelay(closure_1, obj6.withSequence(withTimingResult, callback(closure_2[7]).withTiming(value, { duration: 350 })));
        const obj9 = callback(closure_2[6]);
        const result = set.set(obj.withRepeat(obj2.withSequence(withDelayResult, withDelayResult1, obj9.withDelay(closure_3, callback(closure_2[7]).withTiming(value, { duration: 0 }))), -1));
      }
      animateValue.__closure = { withRepeat: callback(closure_2[6]).withRepeat, withSequence: callback(closure_2[6]).withSequence, withDelay: callback(closure_2[6]).withDelay, sequenceStartDelay: closure_2, withTiming: callback(closure_2[7]).withTiming, delay: closure_1, animationTimeMs: 350, sequenceEndDelay: closure_3 };
      animateValue.__workletHash = 13305770376274;
      animateValue.__initData = closure_8;
      return animateValue;
    }();
    tmp(sharedValue, 0.4, 1);
    if (!disableScale) {
      tmp(sharedValue1, 0.75, 1);
    }
    return () => {
      callback(closure_2[6]).cancelAnimation(closure_4);
      const obj = callback(closure_2[6]);
      callback(closure_2[6]).cancelAnimation(closure_5);
    };
  }, items);
  const obj2 = arg1(dependencyMap[6]);
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
  const animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(S);
  const style = [tmp.typingIndicatorDot, disableScale.dotStyle, animatedStyle];
  return jsx(importDefault(dependencyMap[6]).View, { style });
}
function EllipsisDot(dotStyle) {
  const obj = {};
  const items = [callback().typingIndicatorDot, { opacity: 0.4 }, dotStyle.dotStyle];
  obj.style = items;
  return <View {...obj} />;
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = { typingIndicator: { MESSAGE_REQUEST: "message", XWDihq: "filter", HAPPENING_NOW_STAGE_PREVIEW_HEIGHT: 18, display: "client_system_locale" } };
obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, backgroundColor: importDefault(dependencyMap[5]).colors.TEXT_DEFAULT, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.typingIndicatorDot = obj;
let closure_7 = arg1(dependencyMap[4]).createStyles(obj);
let closure_8 = { code: "function animateValue_EllipsisTsx1(value,fromValue,toValue){const{withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay}=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));}" };
let closure_9 = { code: "function EllipsisTsx2(){const{opacityValue,disableScale,scaleValue}=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};}" };
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function Ellipsis(style) {
  ({ dotStyle: closure_0, disableScale: closure_1 } = style);
  let closure_2;
  let obj = arg1(closure_2[8]);
  const items = [closure_5];
  closure_2 = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion) ? EllipsisDot : AnimatedEllipsisDot;
  obj = { style: items1, collapsable: false, children: items2.map((arg0, arg1, arg2) => callback(closure_2, { delay: arg0 * 233.33333333333334, sequenceStartDelay: 116.66666666666667, sequenceEndDelay: 116.66666666666667 + 233.33333333333334 * (arg2.length - 1 - arg0), dotStyle: closure_0, disableScale: closure_1 }, arg0)) };
  const items1 = [callback().typingIndicator, style.style];
  const items2 = [];
  return <View {...obj} />;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/void/Ellipsis/native/Ellipsis.tsx");

export default memoResult;
