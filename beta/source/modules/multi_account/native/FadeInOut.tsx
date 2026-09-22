// Module ID: 16719
// Function ID: 16720
// Name: FadeInOut
// Dependencies: [19, 21, 558, 568, 4497, 4759, 2]

// Module 16719 (FadeInOut)
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const __initData = { code: "function FadeInOutTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_6 = { code: "function FadeInOutTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const __initData2 = { code: "function FadeInOutTsx3(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_8 = { code: "function FadeInOutTsx4(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/native/FadeInOut.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((style, ref) => {
  const cResult = duration(568).c(10);
  ({ children, duration } = style);
  style = style.style;
  let obj = duration(568);
  const sharedValue = duration(4497).useSharedValue(0);
  let obj2 = duration(4497);
  let fn = function l() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 8749472415282;
  fn.__initData = __initData;
  const animatedStyle = duration(4497).useAnimatedStyle(fn);
  dependencyMap = first.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _() {
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
    if (cResult[2] === sharedValue) {
      let tmp6 = cResult[3];
    }
    const imperativeHandle = first.useImperativeHandle(ref, tmp6);
    if (cResult[4] === animatedStyle) {
      if (cResult[5] === style) {
        let tmp9 = cResult[6];
      }
      if (cResult[7] === children) {
        if (cResult[8] === tmp9) {
          let tmp10 = cResult[9];
        }
        return tmp10;
      }
      const obj5 = { style: tmp9, children };
      const tmp13 = jsx(sharedValue(4497).View, { style: tmp9, children });
      cResult[7] = children;
      cResult[8] = tmp9;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    const items = [style, animatedStyle];
    cResult[4] = animatedStyle;
    cResult[5] = style;
    cResult[6] = items;
    tmp9 = items;
  }
  const fn3 = function w() {
    return {
      componentDidAppear() {
        const result = sharedValue.set(duration(4759).withTiming(1, { duration }));
      },
      componentDidEnter() {
        const result = sharedValue.set(duration(4759).withTiming(1, { duration }));
      },
      componentWillLeave(current) {
        dependencyMap.current = current;
        const fn = function t(arg0) {
          if (arg0) {
            duration(4497).runOnJS(handleTransitionFinished)();
            const obj = duration(4497);
          }
        };
        let obj = duration(4759);
        const obj2 = { duration };
        fn.__closure = { runOnJS: duration(4497).runOnJS, handleTransitionFinished };
        fn.__workletHash = 7644958904451;
        fn.__initData = __initData;
        const result = sharedValue.set(obj.withTiming(0, obj2, "respect-motion-settings", fn));
      }
    };
  };
  cResult[1] = duration;
  cResult[2] = sharedValue;
  cResult[3] = fn3;
  tmp6 = fn3;
}) : ((duration, ref) => {
  duration = duration.duration;
  ref = undefined;
  noop = undefined;
  ({ children, style } = duration);
  const sharedValue = duration(ref[4]).useSharedValue(0);
  let obj = duration(ref[4]);
  let fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 13243381431792;
  fn.__initData = __initData2;
  const animatedStyle = duration(ref[4]).useAnimatedStyle(fn);
  ref = noop.useRef(null);
  const items = [ref];
  noop = noop.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    componentDidAppear() {
      const result = sharedValue.set(duration(ref[5]).withTiming(1, { duration }));
    },
    componentDidEnter() {
      const result = sharedValue.set(duration(ref[5]).withTiming(1, { duration }));
    },
    componentWillLeave(current) {
      closure_1_2.current = current;
      const fn = function t(arg0) {
        if (arg0) {
          duration(ref[4]).runOnJS(handleTransitionFinished)();
          const obj = duration(ref[4]);
        }
      };
      let obj = duration(ref[5]);
      const obj2 = { duration };
      fn.__closure = { runOnJS: duration(ref[4]).runOnJS, handleTransitionFinished };
      fn.__workletHash = 14250676490181;
      fn.__initData = __initData;
      const result = sharedValue.set(obj.withTiming(0, obj2, "respect-motion-settings", fn));
    }
  }));
  const obj3 = { style: null, children };
  const items1 = [style, animatedStyle];
  obj3.style = items1;
  return jsx(sharedValue(ref[4]).View, { style: null, children });
}));
