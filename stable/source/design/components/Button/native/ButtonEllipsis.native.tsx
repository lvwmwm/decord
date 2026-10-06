// Module ID: 5296
// Function ID: 5297
// Name: ButtonEllipsis
// Dependencies: [19, 21, 4570, 4837, 588, 4838, 558, 576, 5288, 5297, 2]

// Module 5296 (ButtonEllipsis)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4570 */;
import timing from "timing" /* 4838 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let Easing;
let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const ELLIPSIS_APPEAR_TIMING = { duration: 500, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
Easing = ReanimatedRexport.Easing;
let closure_6 = createStyles.createStyles((arg0, arg1, backgroundColor) => {
  let num;
  let num2;
  let num3;
  if ("lg" === arg0) {
    num = 4;
    num2 = 8;
  } else {
    if ("md" !== arg0) {
      if ("sm" !== arg0) {
        num = 4;
        if ("xs" === arg0) {
          num = 3;
          num2 = 5;
        }
      }
    }
    num = 4;
    num2 = 6;
  }
  const circle = { width: num2, height: num2, borderRadius: nativeDefault.radii.round, marginEnd: num3, backgroundColor };
  num3 = 0;
  if (2 !== arg1) {
    num3 = num;
  }
  return { circle };
});
function withEllipsisAnimation(arg0, value) {
  const withDelay = ReanimatedRexport.withDelay;
  const result = 166.66666666666666 * arg0;
  ReanimatedRexport;
  const withRepeat = ReanimatedRexport.withRepeat;
  ReanimatedRexport;
  const obj = timing;
  return withDelay(result, withRepeat(obj.withTiming(value, obj, "animate-always"), -1, true));
}
let obj2 = { ELLIPSIS_APPEAR_DURATION: 500, withDelay: ReanimatedRexport.withDelay, withRepeat: ReanimatedRexport.withRepeat, withTiming: timing.withTiming, ELLIPSIS_APPEAR_TIMING };
withEllipsisAnimation.__closure = obj2;
withEllipsisAnimation.__workletHash = 2181731162311;
withEllipsisAnimation.__initData = { code: "function withEllipsisAnimation_ButtonEllipsisNativeTsx1(offset,value){const{ELLIPSIS_APPEAR_DURATION,withDelay,withRepeat,withTiming,ELLIPSIS_APPEAR_TIMING}=this.__closure;const animationTimeMs=ELLIPSIS_APPEAR_DURATION;const animationStaggerTimeMs=animationTimeMs/3;return withDelay(offset*animationStaggerTimeMs,withRepeat(withTiming(value,ELLIPSIS_APPEAR_TIMING,'animate-always'),-1,true));}" };
const __initData = { code: "function ButtonEllipsisNativeTsx2(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
const __initData2 = { code: "function ButtonEllipsisNativeTsx3(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((offset) => {
  let items;
  let sharedValue1;
  let variant;
  const tmp2 = sharedValue1;
  let obj = offset(sharedValue1[7]);
  const cResult = obj.c(7);
  offset = offset.offset;
  ({ variant, size } = offset);
  let obj2 = offset(sharedValue1[8]);
  const tmp4 = closure_6(size, offset, obj2.useForegroundColor(variant));
  const obj3 = offset(sharedValue1[2]);
  const sharedValue = obj3.useSharedValue(0.4);
  const obj4 = offset(sharedValue1[2]);
  sharedValue1 = obj4.useSharedValue(0.75);
  if (cResult[0] === offset) {
    if (cResult[1] === sharedValue) {
      let tmp7;
      if (cResult[2] === sharedValue1) {
        tmp7 = cResult[3];
      }
      const tmpResult = offset(tmp2[9]);
      const mountLayoutEffect = tmpResult.useMountLayoutEffect(tmp7);
      const tmpResult2 = offset(tmp2[2]);
      class A {
        constructor() {
          let items;
          const obj = { opacity: sharedValue.get(), transform: items };
          items = [{ scale: sharedValue1.get() }];
          ({ scale: sharedValue1.get() });
          return obj;
        }
      }
      const obj5 = { opacity: sharedValue, scale: sharedValue1 };
      A.__closure = obj5;
      A.__workletHash = 13371762734705;
      A.__initData = __initData;
      const animatedStyle = tmpResult2.useAnimatedStyle(A);
      if (cResult[4] === animatedStyle) {
        let tmp11;
        if (cResult[5] === tmp4.circle) {
          tmp11 = cResult[6];
        }
        return tmp11;
      }
      const tmp13 = sharedValue;
      const obj6 = { style: items };
      items = [tmp4.circle, animatedStyle];
      const tmp14 = closure_3(sharedValue(tmp2[2]).View, obj6);
      cResult[4] = animatedStyle;
      cResult[5] = tmp4.circle;
      cResult[6] = tmp14;
      tmp11 = tmp14;
    }
  }
  const fn = function s() {
    if (typeof withEllipsisAnimation === "function") {
      const withDelay = ReanimatedRexport.withDelay;
      const result = 166.66666666666666 * tmp4;
      ReanimatedRexport;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      let obj = timing;
      tmp2(withDelay(result, withRepeat(obj.withTiming(1, obj, "animate-always"), -1, true)));
      const tmp10 = obj;
      if (typeof tmp3 === "function") {
        const withDelay2 = ReanimatedRexport.withDelay;
        const result1 = 166.66666666666666 * tmp4;
        ReanimatedRexport;
        const withRepeat2 = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const tmp5Result4 = timing;
        tmp13(withDelay2(result1, withRepeat2(tmp5Result4.withTiming(1, tmp10, "animate-always"), -1, true)));
        return () => {
          const obj = offset(sharedValue1[2]);
          obj.cancelAnimation(sharedValue);
          const obj2 = offset(sharedValue1[2]);
          obj2.cancelAnimation(closure_1_2);
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  cResult[0] = offset;
  cResult[1] = sharedValue;
  cResult[2] = sharedValue1;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((offset) => {
  let items;
  let variant;
  offset = offset.offset;
  let sharedValue1;
  ({ variant, size } = offset);
  let obj = offset(sharedValue1[8]);
  const tmp = closure_6(size, offset, obj.useForegroundColor(variant));
  let obj2 = offset(sharedValue1[2]);
  const sharedValue = obj2.useSharedValue(0.4);
  const obj3 = offset(sharedValue1[2]);
  sharedValue1 = obj3.useSharedValue(0.75);
  const obj4 = offset(sharedValue1[9]);
  const mountLayoutEffect = obj4.useMountLayoutEffect(() => {
    if (typeof withEllipsisAnimation === "function") {
      const withDelay = ReanimatedRexport.withDelay;
      const result = 166.66666666666666 * tmp4;
      ReanimatedRexport;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      let obj = timing;
      tmp2(withDelay(result, withRepeat(obj.withTiming(1, obj, "animate-always"), -1, true)));
      const tmp10 = obj;
      if (typeof tmp3 === "function") {
        const withDelay2 = ReanimatedRexport.withDelay;
        const result1 = 166.66666666666666 * tmp4;
        ReanimatedRexport;
        const withRepeat2 = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const tmp5Result4 = timing;
        tmp13(withDelay2(result1, withRepeat2(tmp5Result4.withTiming(1, tmp10, "animate-always"), -1, true)));
        return () => {
          const obj = offset(sharedValue1[2]);
          obj.cancelAnimation(sharedValue);
          const obj2 = offset(sharedValue1[2]);
          obj2.cancelAnimation(closure_1_2);
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  const fn = function y() {
    let items;
    const obj = { opacity: sharedValue.get(), transform: items };
    items = [{ scale: sharedValue1.get() }];
    ({ scale: sharedValue1.get() });
    return obj;
  };
  fn.__closure = { opacity: sharedValue, scale: sharedValue1 };
  fn.__workletHash = 13160478370544;
  fn.__initData = __initData2;
  const obj5 = offset(sharedValue1[2]);
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const obj6 = { style: items };
  items = [tmp.circle, animatedStyle];
  return closure_3(sharedValue(sharedValue1[2]).View, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let items;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { flexDirection: "row" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const obj3 = { style: first, children: items };
    const obj4 = { offset: 0 };
    const View = ReanimatedRexportDefault.View;
    const merged = Object.assign(arg0);
    items = [_false(closure_10, obj4), , ];
    const obj5 = { offset: 1 };
    const merged1 = Object.assign(arg0);
    items[1] = _false(closure_10, obj5);
    const obj6 = { offset: 2 };
    const merged2 = Object.assign(arg0);
    items[2] = _false(closure_10, obj6);
    const tmp18 = React3(View, obj3);
    cResult[1] = arg0;
    cResult[2] = tmp18;
    tmp4 = tmp18;
  } else {
    tmp4 = cResult[2];
  }
  return tmp4;
}) : ((arg0) => {
  let items;
  const obj = { style: { flexDirection: "row" }, children: items };
  const obj2 = { offset: 0 };
  const View = ReanimatedRexportDefault.View;
  const merged = Object.assign(arg0);
  items = [_false(closure_10, obj2), , ];
  const obj3 = { offset: 1 };
  const merged1 = Object.assign(arg0);
  items[1] = _false(closure_10, obj3);
  const obj4 = { offset: 2 };
  const merged2 = Object.assign(arg0);
  items[2] = _false(closure_10, obj4);
  return React3(View, obj);
});
let result = size.fileFinishedImporting("design/components/Button/native/ButtonEllipsis.native.tsx");

export const Ellipsis = tmp4;
