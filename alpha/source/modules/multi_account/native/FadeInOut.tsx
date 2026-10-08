// Module ID: 16618
// Function ID: 16619
// Name: FadeInOut
// Dependencies: [19, 21, 558, 576, 4810, 5091, 2]

// Module 16618 (FadeInOut)
import Fragment from "Fragment" /* 21 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let react = react_mod;
const jsx = Fragment.jsx;
const __initData = { code: "function FadeInOutTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_6 = { code: "function FadeInOutTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const __initData2 = { code: "function FadeInOutTsx3(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_8 = { code: "function FadeInOutTsx4(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function FadeInOut(arg0) {
  let children;
  let duration;
  let first;
  let ref;
  let style;
  let tmp = dependencyMap;
  let obj = duration(576);
  const cResult = obj.c(10);
  ({ children, duration } = arg0);
  ({ style, ref } = arg0);
  let obj2 = duration(4810);
  const sharedValue = obj2.useSharedValue(0);
  const obj3 = duration(4810);
  let fn = function c() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 8749472415282;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  dependencyMap = first.useRef(null);
  const obj4 = first;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l() {
      const current = ref.current;
      if (current != null) {
        current();
      }
    };
    cResult[0] = fn2;
    first = fn2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === duration) {
    let tmp6;
    if (cResult[2] === sharedValue) {
      tmp6 = cResult[3];
    }
    const imperativeHandle = obj4.useImperativeHandle(ref, tmp6);
    if (cResult[4] === animatedStyle) {
      let tmp8;
      if (cResult[5] === style) {
        tmp8 = cResult[6];
      }
      if (cResult[7] === children) {
        let tmp9;
        if (cResult[8] === tmp8) {
          tmp9 = cResult[9];
        }
        return tmp9;
      }
      const tmp12 = jsx(sharedValue(4810).View, { style: tmp8, children });
      cResult[7] = children;
      cResult[8] = tmp8;
      cResult[9] = tmp12;
      tmp9 = tmp12;
    }
    const items = [style, animatedStyle];
    cResult[4] = animatedStyle;
    cResult[5] = style;
    cResult[6] = items;
    tmp8 = items;
  }
  class F {
    constructor() {
      obj = {
        componentDidAppear() {
              set = sharedValue.set;
              const obj = duration(ref[5]);
              const obj2 = { duration };
              const result = set(obj.withTiming(1, obj2));
            },
        componentDidEnter() {
              set = sharedValue.set;
              const obj = duration(ref[5]);
              const obj2 = { duration };
              const result = set(obj.withTiming(1, obj2));
            },
        componentWillLeave(current) {
              closure_1_2.current = current;
              set = sharedValue.set;
              let obj = duration(closure_2[5]);
              const fn = function t() { /* body not rendered: F155145 */ };
              const obj2 = { duration };
              fn.__closure = { runOnJS: duration(closure_2[4]).runOnJS, handleTransitionFinished };
              fn.__workletHash = 7644958904451;
              fn.__initData = __initData;
              ({ runOnJS: duration(closure_2[4]).runOnJS, handleTransitionFinished });
              const result = set(obj.withTiming(0, obj2, "respect-motion-settings", fn));
            }
      };
      return obj;
    }
  }
  cResult[1] = duration;
  cResult[2] = sharedValue;
  cResult[3] = F;
  tmp6 = F;
}) : (function FadeInOut(duration) {
  let children;
  let closure_3;
  let ref;
  let style;
  duration = duration.duration;
  let ref1;
  react = undefined;
  ({ children, style, ref } = duration);
  let obj = duration(ref1[4]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = duration(ref1[4]);
  let fn = function h() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 13243381431792;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  ref1 = react.useRef(null);
  const items = [ref1];
  react = react.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = react.useImperativeHandle(ref, () => {
    let handleTransitionFinished;
    let obj = {
      componentDidAppear() {
        set = sharedValue.set;
        const obj = duration(ref1[5]);
        const obj2 = { duration };
        const result = set(obj.withTiming(1, obj2));
      },
      componentDidEnter() {
        set = sharedValue.set;
        const obj = duration(ref1[5]);
        const obj2 = { duration };
        const result = set(obj.withTiming(1, obj2));
      },
      componentWillLeave(current) {
        closure_1_2.current = current;
        set = sharedValue.set;
        let obj = duration(ref1[5]);
        const fn = function t(arg0) {
          const tmp = arg0;
          if (tmp) {
            const obj = duration(ref1[4]);
            obj.runOnJS(handleTransitionFinished)();
          }
        };
        const obj2 = { duration };
        fn.__closure = { runOnJS: duration(ref1[4]).runOnJS, handleTransitionFinished };
        fn.__workletHash = 14250676490181;
        fn.__initData = __initData;
        ({ runOnJS: duration(ref1[4]).runOnJS, handleTransitionFinished });
        const result = set(obj.withTiming(0, obj2, "respect-motion-settings", fn));
      }
    };
    return obj;
  });
  const items1 = [style, animatedStyle];
  return jsx(sharedValue(ref1[4]).View, { style: items1, children });
});
let result = size.fileFinishedImporting("modules/multi_account/native/FadeInOut.tsx");

export default tmp2;
