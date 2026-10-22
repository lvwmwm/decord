// Module ID: 12304
// Function ID: 12305
// Name: ConjureTipSwap
// Dependencies: [19, 21, 558, 576, 5038, 5192, 2]

// Module 12304 (ConjureTipSwap)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5038 */;
import timing from "timing" /* 5192 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let set;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function ConjureTipSwapTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function ConjureTipSwapTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTipSwap(arg0) {
  let presentation;
  let render;
  const obj = react2;
  const cResult = obj.c(6);
  ({ presentation, render } = arg0);
  if (cResult[0] === presentation) {
    let tmp2;
    if (cResult[1] === render) {
      tmp2 = cResult[2];
    }
    if (cResult[3] === presentation) {
      let tmp4;
      if (cResult[4] === tmp2) {
        tmp4 = cResult[5];
      }
      return tmp4;
    }
    const tmp7 = <closure_7 key={presentation}>{tmp2}</closure_7>;
    cResult[3] = presentation;
    cResult[4] = tmp2;
    cResult[5] = tmp7;
    tmp4 = tmp7;
  }
  const renderResult = render(presentation);
  cResult[0] = presentation;
  cResult[1] = render;
  cResult[2] = renderResult;
  tmp2 = renderResult;
}) : (function ConjureTipSwap(presentation) {
  presentation = presentation.presentation;
  return <closure_7 key={presentation}>{arg0.render(presentation)}</closure_7>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function TipFade(children) {
  let sharedValue;
  let tmp5;
  let tmp6;
  const tmp = sharedValue;
  let obj = sharedValue(576);
  const cResult = obj.c(6);
  children = children.children;
  const obj2 = sharedValue(5038);
  sharedValue = obj2.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function s() {
      let Easing;
      set = sharedValue.set;
      let obj = { duration: 260, easing: Easing.out(ReanimatedRexport.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport.Easing;
      const result = set(withTiming(1, obj));
      return () => {
        const obj = sharedValue(dependencyMap[4]);
        return obj.cancelAnimation(closure_1_0);
      };
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  const fn2 = function f() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn2.__closure = { opacity: sharedValue };
  fn2.__workletHash = 14074417751279;
  fn2.__initData = __initData;
  const tmpResult = tmp(5038);
  const animatedStyle = tmpResult.useAnimatedStyle(fn2);
  if (cResult[3] === children) {
    let tmp9;
    if (cResult[4] === animatedStyle) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmp10 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children });
  cResult[3] = children;
  cResult[4] = animatedStyle;
  cResult[5] = tmp10;
  tmp9 = tmp10;
}) : (function TipFade(children) {
  let sharedValue;
  children = children.children;
  let obj = sharedValue(5038);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    let Easing;
    set = sharedValue.set;
    let obj = { duration: 260, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    const result = set(withTiming(1, obj));
    return () => {
      const obj = sharedValue(dependencyMap[4]);
      return obj.cancelAnimation(closure_1_0);
    };
  }, items);
  const fn = function u() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 13445232887916;
  fn.__initData = __initData2;
  const obj2 = sharedValue(5038);
  const style = obj2.useAnimatedStyle(fn);
  return jsx(ReanimatedRexportDefault.View, { style, children });
});
let result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipSwap.tsx");

export default tmp2;
