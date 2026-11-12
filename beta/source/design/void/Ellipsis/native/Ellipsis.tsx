// Module ID: 16317
// Function ID: 16318
// Name: Ellipsis
// Dependencies: [19, 17, 5171, 21, 5170, 575, 1652, 5402, 504, 2]

// Module 16317 (Ellipsis)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set2;

let size;
function AnimatedEllipsisDot(disableScale) {
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  disableScale = disableScale.disableScale;
  const delay = disableScale.delay;
  const sequenceStartDelay = disableScale.sequenceStartDelay;
  const sequenceEndDelay = disableScale.sequenceEndDelay;
  const dotStyle = disableScale.dotStyle;
  let tmp = closure_9();
  let tmp2 = sequenceStartDelay;
  let obj = disableScale(sequenceStartDelay[6]);
  const sharedValue = obj.useSharedValue(0.4);
  let obj2 = disableScale(sequenceStartDelay[6]);
  const sharedValue1 = obj2.useSharedValue(0.75);
  let items = [delay, sequenceStartDelay, sequenceEndDelay, disableScale, sharedValue, sharedValue1];
  const effect = sequenceEndDelay.useEffect(() => {
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    const items = [closure_10, _mod1652.withRepeat, _mod1652.withSequence, _mod1652.withDelay, sequenceStartDelay, timing_timing.withTiming, delay, 350, sequenceEndDelay];
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    c7 = undefined;
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
    function animateValue(set, arg1, arg2) {
      const obj = { duration };
      const obj2 = { duration };
      set = set.set;
      const tmp = _undefined3(c3, _undefined4(arg1, { duration: 0 }));
      const tmp2 = _undefined4(arg2, obj);
      const tmp3 = _undefined3(c5, _undefined2(tmp2, _undefined4(arg1, obj2)));
      const result = set(_undefined(_undefined2(tmp, tmp3, _undefined3(c7, _undefined4(arg1, { duration: 0 }))), -1));
    }
    const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
    animateValue.__closure = items1;
    animateValue.__workletHash = 16090494159499;
    animateValue.__initData = tmp;
    set = sharedValue.set;
    const tmp4Result = tmp4(tmp5, tmp6(0.4, { duration: 0 }));
    const tmp6Result = tmp6(1, { duration: tmp8 });
    const tmp4Result4 = tmp4(tmp7, tmp3(tmp6Result, tmp6(0.4, { duration: tmp8 })));
    let result = set(tmp2(tmp3(tmp4Result, tmp4Result4, tmp4(tmp9, tmp6(0.4, { duration: 0 }))), -1));
    const tmp14 = disableScale;
    if (!tmp14) {
      let obj = { duration: tmp8 };
      let obj2 = { duration: tmp8 };
      set2 = sharedValue1.set;
      const tmp4Result5 = tmp4(tmp5, tmp6(0.75, { duration: 0 }));
      const tmp6Result2 = tmp6(1, obj);
      const tmp4Result6 = tmp4(tmp7, tmp3(tmp6Result2, tmp6(0.75, obj2)));
      set2(tmp2(tmp3(tmp4Result5, tmp4Result6, tmp4(tmp9, tmp6(0.75, { duration: 0 }))), -1));
    }
    return () => {
      const obj = disableScale(sequenceStartDelay[6]);
      obj.cancelAnimation(sharedValue);
      const obj2 = disableScale(sequenceStartDelay[6]);
      obj2.cancelAnimation(sharedValue1);
    };
  }, items);
  let items1 = [closure_11, sharedValue, disableScale, sharedValue1];
  let c0;
  let c1;
  let c2;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  const obj3 = disableScale(sequenceStartDelay[6]);
  class EllipsisTsx2 {
    constructor() {
      let tmp;
      const obj = { opacity: _undefined.get(), transform: tmp };
      tmp = undefined;
      if (!c1) {
        const items = [{ scale: _undefined2.get() }];
        tmp = items;
        const obj2 = { scale: _undefined2.get() };
      }
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9];
  EllipsisTsx2.__closure = items2;
  EllipsisTsx2.__workletHash = 17326421138636;
  EllipsisTsx2.__initData = tmp6;
  const animatedStyle = obj3.useAnimatedStyle(EllipsisTsx2);
  const items3 = [tmp.typingIndicatorDot, dotStyle, animatedStyle];
  return jsx(delay(tmp2[6]).View, { style: items3 });
}
function EllipsisDot(dotStyle) {
  dotStyle = dotStyle.dotStyle;
  const items = [closure_9().typingIndicatorDot, { opacity: 0.4 }, dotStyle];
  return <View style={items} />;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let c7 = 233.33333333333334;
let c8 = 116.66666666666667;
let obj = { typingIndicator: { justifyContent: "center", alignItems: "center", flexDirection: "row", marginRight: 4 }, typingIndicatorDot: size };
size = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, marginRight: 2, height: 6, width: 6 };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = { code: "(function animateValue_EllipsisTsx1(value,fromValue,toValue){let[withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay]=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));})" };
let closure_11 = { code: "(function EllipsisTsx2(){let[opacityValue,disableScale,scaleValue]=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};})" };
const memoResult = react.memo(function Ellipsis(style) {
  let closure_2;
  let disableScale;
  let dotStyle;
  let require;
  let sequenceStartDelay;
  let useReducedMotion;
  ({ dotStyle: require, disableScale: importDefault } = style);
  style = style.style;
  const tmp = closure_9();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  dependencyMap = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion) ? EllipsisDot : AnimatedEllipsisDot;
  const items1 = [tmp.typingIndicator, style];
  const items2 = [0, 1, 2];
  return <View style={items1} collapsable={false}>{items2.map((item, index, arg2) => <closure_2 key={arg0} delay={arg0 * c7} sequenceStartDelay={sequenceStartDelay} sequenceEndDelay={sequenceStartDelay + c7 * (arg2.length - 1 - arg0)} dotStyle={require} disableScale={importDefault} />)}</View>;
});
size = size_mod;
let result = size.fileFinishedImporting("design/void/Ellipsis/native/Ellipsis.tsx");

export default memoResult;
