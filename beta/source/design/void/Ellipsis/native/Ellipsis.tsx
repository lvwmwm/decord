// Module ID: 13632
// Function ID: 13633
// Name: Ellipsis
// Dependencies: [19, 17, 4825, 21, 4836, 576, 4566, 4837, 504, 2]

// Module 13632 (Ellipsis)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let size;
function AnimatedEllipsisDot(disableScale) {
  disableScale = disableScale.disableScale;
  const delay = disableScale.delay;
  const sequenceStartDelay = disableScale.sequenceStartDelay;
  const sequenceEndDelay = disableScale.sequenceEndDelay;
  const dotStyle = disableScale.dotStyle;
  let tmp = closure_9();
  let obj = disableScale(sequenceStartDelay[6]);
  const sharedValue = obj.useSharedValue(0.4);
  let obj2 = disableScale(sequenceStartDelay[6]);
  const sharedValue1 = obj2.useSharedValue(0.75);
  let items = [delay, sequenceStartDelay, sequenceEndDelay, disableScale, sharedValue, sharedValue1];
  const effect = sequenceEndDelay.useEffect(() => {
    function animateValue(sharedValue, value, value2) {
      set = sharedValue.set;
      const withRepeat = disableScale(sequenceStartDelay[6]).withRepeat;
      disableScale(sequenceStartDelay[6]);
      const withSequence = disableScale(sequenceStartDelay[6]).withSequence;
      disableScale(sequenceStartDelay[6]);
      const withDelay = disableScale(sequenceStartDelay[6]).withDelay;
      disableScale(sequenceStartDelay[6]);
      const obj = disableScale(sequenceStartDelay[7]);
      const withDelayResult = withDelay(closure_1_2, obj.withTiming(value, { duration: 0 }));
      const withDelay2 = disableScale(sequenceStartDelay[6]).withDelay;
      disableScale(sequenceStartDelay[6]);
      const withSequence2 = disableScale(sequenceStartDelay[6]).withSequence;
      disableScale(sequenceStartDelay[6]);
      const obj2 = disableScale(sequenceStartDelay[7]);
      const withTimingResult = obj2.withTiming(value, { duration: 350 });
      const obj3 = disableScale(sequenceStartDelay[7]);
      const withDelay2Result = withDelay2(delay, withSequence2(withTimingResult, obj3.withTiming(value, { duration: 350 })));
      const withDelay3 = disableScale(sequenceStartDelay[6]).withDelay;
      disableScale(sequenceStartDelay[6]);
      const obj4 = disableScale(sequenceStartDelay[7]);
      const result = set(withRepeat(withSequence(withDelayResult, withDelay2Result, withDelay3(sequenceEndDelay, obj4.withTiming(value, { duration: 0 }))), -1));
    }
    let obj = { withRepeat: ReanimatedRexport.withRepeat, withSequence: ReanimatedRexport.withSequence, withDelay: ReanimatedRexport.withDelay, sequenceStartDelay, withTiming: timing.withTiming, delay, animationTimeMs: 350, sequenceEndDelay };
    animateValue.__closure = obj;
    animateValue.__workletHash = 13305770376274;
    animateValue.__initData = __initData;
    animateValue(sharedValue, 0.4, 1);
    const tmp2 = disableScale;
    if (!tmp2) {
      animateValue(sharedValue1, 0.75, 1);
    }
    return () => {
      const obj = disableScale(sequenceStartDelay[6]);
      obj.cancelAnimation(sharedValue);
      const obj2 = disableScale(sequenceStartDelay[6]);
      obj2.cancelAnimation(sharedValue1);
    };
  }, items);
  let obj3 = disableScale(sequenceStartDelay[6]);
  class S {
    constructor() {
      let tmp;
      const obj = { opacity: sharedValue.get(), transform: tmp };
      tmp = undefined;
      if (!disableScale) {
        const items = [{ scale: sharedValue1.get() }];
        tmp = items;
        const obj2 = { scale: sharedValue1.get() };
      }
      return obj;
    }
  }
  S.__closure = { opacityValue: sharedValue, disableScale, scaleValue: sharedValue1 };
  S.__workletHash = 5071157079925;
  S.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(S);
  const items1 = [tmp.typingIndicatorDot, dotStyle, animatedStyle];
  return jsx(delay(sequenceStartDelay[6]).View, { style: items1 });
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
let closure_10 = { code: "function animateValue_EllipsisTsx1(value,fromValue,toValue){const{withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay}=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));}" };
const __initData = { code: "function EllipsisTsx2(){const{opacityValue,disableScale,scaleValue}=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};}" };
const memoResult = react.memo(function Ellipsis(style) {
  let closure_2;
  let disableScale;
  let dotStyle;
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
