// Module ID: 11196
// Function ID: 11197
// Name: BalanceCounter
// Dependencies: [32, 19, 21, 558, 576, 4810, 4794, 5374, 11197, 5086, 2]

// Module 11196 (BalanceCounter)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react3 from "react" /* 4794 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import spring from "spring" /* 5374 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const Text_Text = tmp(5086);
let react = react_mod;
({ useState: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useCallback: metroImportDefault } = react);
react = react_mod;
let jsx = Fragment.jsx;
let closure_10 = { code: "function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}" };
let __initData = { code: "function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}" };
let closure_12 = { code: "function BalanceCounterTsx3(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}" };
const __initData2 = { code: "function BalanceCounterTsx4(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((value) => {
  let closure_11;
  let closure_6;
  let first1;
  let first2;
  let obj3;
  let onValueReached;
  let ref;
  let require;
  let setIsAnimating;
  let style;
  let tmp13;
  let tmp6;
  let tmp = require;
  const tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(26);
  value = value.value;
  require = value;
  const onValueChange = value.onValueChange;
  ({ onValueReached, style } = value);
  dependencyMap = tmp6(null);
  let obj2 = ReanimatedRexport;
  const sharedValue = obj2.useSharedValue(0);
  const ref2 = tmp6(null);
  const enabled = first1.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
  [obj3, tmp6] = sharedValue(ref2(0), 2);
  const tmp5 = sharedValue(ref2(0), 2);
  const tmp7 = sharedValue(ref2(1), 2);
  let closure_7 = tmp9;
  const first = tmp7[0];
  const tmp10 = sharedValue(ref2(false), 2);
  first1 = tmp10[0];
  jsx = tmp10[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function o(set, value, duration) {
      setIsAnimating(true);
      set = set.set;
      let obj = spring;
      const fn = function l() {
        const obj = require("ReanimatedRexport");
        obj.runOnJS(setIsAnimating)(false);
      };
      const obj2 = { duration, damping: 15, stiffness: 150, mass: 1 };
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAnimating };
      fn.__workletHash = 16153226572520;
      fn.__initData = __initData;
      ({ runOnJS: ReanimatedRexport.runOnJS, setIsAnimating });
      const result = set(obj.withSpring(value, obj2, "respect-motion-settings", fn));
    };
    cResult[0] = fn;
    first2 = fn;
  } else {
    first2 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    function clearAnimationTimeout() {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      setIsAnimating(false);
    }
    cResult[1] = clearAnimationTimeout;
    tmp13 = clearAnimationTimeout;
  } else {
    tmp13 = cResult[1];
  }
  __initData = tmp13;
  if (cResult[2] === sharedValue) {
    if (cResult[3] === onValueChange) {
      if (cResult[4] === enabled) {
        let tmp14;
        if (cResult[5] === value) {
          tmp14 = cResult[6];
        }
        if (cResult[7] === sharedValue) {
          if (cResult[8] === onValueChange) {
            if (cResult[9] === onValueReached) {
              if (cResult[10] === enabled) {
                let tmp15;
                if (cResult[11] === value) {
                  tmp15 = cResult[12];
                }
                enabled(tmp14, tmp15);
                const tmpResult = ReanimatedRexport;
                class L {
                  constructor() {
                    const tmp = first1;
                    if (tmp) {
                      const _Math = Math;
                      const str = Math.round(sharedValue.get());
                      const obj = ReanimatedRexport;
                      obj.runOnJS(closure_6)(str);
                      const obj2 = ReanimatedRexport;
                      const runOnJSResult = obj2.runOnJS(closure_7);
                      runOnJSResult(str.toString().length);
                    }
                    return {};
                  }
                }
                const useAnimatedStyle = tmpResult.useAnimatedStyle;
                L.__closure = { isAnimating: first1, animatedValue: sharedValue, runOnJS: ReanimatedRexport.runOnJS, setDisplayValue: tmp6, setMaxDigits: tmp7[1] };
                L.__workletHash = 4408542396979;
                L.__initData = __initData;
                const obj4 = { isAnimating: first1, animatedValue: sharedValue, runOnJS: ReanimatedRexport.runOnJS, setDisplayValue: tmp6, setMaxDigits: tmp7[1] };
                const animatedStyle = useAnimatedStyle(L);
                if (null === value) {
                  return null;
                } else {
                  let tmp21;
                  let result = 7 * first;
                  if (cResult[13] !== result) {
                    const obj5 = { minWidth: result };
                    cResult[13] = result;
                    class L {
                      constructor() {
                        const tmp = first1;
                        if (tmp) {
                          const _Math = Math;
                          const str = Math.round(sharedValue.get());
                          const obj = ReanimatedRexport;
                          obj.runOnJS(closure_6)(str);
                          const obj2 = ReanimatedRexport;
                          const runOnJSResult = obj2.runOnJS(closure_7);
                          runOnJSResult(str.toString().length);
                        }
                        return {};
                      }
                    }
                    cResult[14] = obj5;
                    tmp21 = obj5;
                  } else {
                    tmp21 = cResult[14];
                  }
                  if (cResult[15] === animatedStyle) {
                    let tmp22;
                    let tmp24;
                    if (cResult[16] === tmp21) {
                      tmp22 = cResult[17];
                    }
                    if (cResult[18] !== obj3) {
                      cResult[18] = obj3;
                      const toFixedResult = obj3.toFixed(0);
                      class L {
                        constructor() {
                          const tmp = first1;
                          if (tmp) {
                            const _Math = Math;
                            const str = Math.round(sharedValue.get());
                            const obj = ReanimatedRexport;
                            obj.runOnJS(closure_6)(str);
                            const obj2 = ReanimatedRexport;
                            const runOnJSResult = obj2.runOnJS(closure_7);
                            runOnJSResult(str.toString().length);
                          }
                          return {};
                        }
                      }
                      tmp24 = toFixedResult;
                    } else {
                      tmp24 = cResult[19];
                    }
                    if (cResult[20] === style) {
                      let tmp26;
                      if (cResult[21] === tmp24) {
                        tmp26 = cResult[22];
                      }
                      if (cResult[23] === tmp22) {
                        let tmp30;
                        if (cResult[24] === tmp26) {
                          tmp30 = cResult[25];
                        }
                        return tmp30;
                      }
                      class L {
                        constructor() {
                          const tmp = first1;
                          if (tmp) {
                            const _Math = Math;
                            const str = Math.round(sharedValue.get());
                            const obj = ReanimatedRexport;
                            obj.runOnJS(closure_6)(str);
                            const obj2 = ReanimatedRexport;
                            const runOnJSResult = obj2.runOnJS(closure_7);
                            runOnJSResult(str.toString().length);
                          }
                          return {};
                        }
                      }
                      tmp33[0] = tmp22;
                      tmp33[1] = tmp26;
                      const tmp34 = jsx(onValueChange(4810).View, tmp33);
                      cResult[23] = tmp22;
                      cResult[24] = tmp26;
                      cResult[25] = tmp34;
                      tmp30 = tmp34;
                    }
                    class L {
                      constructor() {
                        const tmp = first1;
                        if (tmp) {
                          const _Math = Math;
                          const str = Math.round(sharedValue.get());
                          const obj = ReanimatedRexport;
                          obj.runOnJS(closure_6)(str);
                          const obj2 = ReanimatedRexport;
                          const runOnJSResult = obj2.runOnJS(closure_7);
                          runOnJSResult(str.toString().length);
                        }
                        return {};
                      }
                    }
                    tmp28[1] = style;
                    tmp28[3] = tmp24;
                    const tmp29 = jsx(Text_Text.Text, tmp28);
                    cResult[20] = style;
                    cResult[21] = tmp24;
                    cResult[22] = tmp29;
                    tmp26 = tmp29;
                  }
                  class L {
                    constructor() {
                      const tmp = first1;
                      if (tmp) {
                        const _Math = Math;
                        const str = Math.round(sharedValue.get());
                        const obj = ReanimatedRexport;
                        obj.runOnJS(closure_6)(str);
                        const obj2 = ReanimatedRexport;
                        const runOnJSResult = obj2.runOnJS(closure_7);
                        runOnJSResult(str.toString().length);
                      }
                      return {};
                    }
                  }
                  tmp23[0] = animatedStyle;
                  tmp23[1] = tmp21;
                  cResult[15] = animatedStyle;
                  cResult[16] = tmp21;
                  cResult[17] = tmp23;
                  tmp22 = tmp23;
                }
              }
            }
          }
        }
        const items = [value, , onValueReached, sharedValue, first2, enabled];
        cResult[7] = sharedValue;
        cResult[8] = onValueChange;
        cResult[9] = onValueReached;
        cResult[10] = enabled;
        cResult[11] = value;
        cResult[12] = items;
        tmp15 = items;
      }
    }
  }
  class H {
    constructor() {
      let duration;
      if (null !== duration) {
        if (null !== ref.current) {
          const tmp20 = enabled;
          if (!tmp20) {
            if (duration !== ref.current) {
              const diff = tmp - tmp2.current;
              onValueChange(diff);
              ref.current = duration;
              const obj = { targetTime: require("AnimationUtils").EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS };
              const getOrbBalanceCounterAnimationConfigs = require("AnimationUtils").getOrbBalanceCounterAnimationConfigs;
              require("AnimationUtils");
              const orbBalanceCounterAnimationConfigs = getOrbBalanceCounterAnimationConfigs(diff, obj);
              duration = orbBalanceCounterAnimationConfigs.duration;
              const delay = orbBalanceCounterAnimationConfigs.delay;
              closure_11();
              const _setTimeout = setTimeout;
              closure_4.current = setTimeout(() => {
                first2(sharedValue, require, duration);
                ref2.current = null;
              }, delay);
              return closure_11;
            } else {
              tmp6(duration);
            }
          }
        }
        tmp6(duration);
        const result = sharedValue.set(tmp);
        ref.current = duration;
      }
    }
  }
  cResult[2] = sharedValue;
  cResult[3] = onValueChange;
  cResult[4] = enabled;
  cResult[5] = value;
  cResult[6] = H;
  tmp14 = H;
}) : ((value) => {
  let _undefined;
  let obj2;
  let onValueReached;
  let ref;
  let setIsAnimating;
  let style;
  let tmp5;
  value = value.value;
  const require = value;
  const onValueChange = value.onValueChange;
  let c6;
  let first1;
  function clearAnimationTimeout() {
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
    setIsAnimating(false);
  }
  ({ onValueReached, style } = value);
  dependencyMap = c6(null);
  const tmp2 = dependencyMap;
  let tmp = require;
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0);
  const ref2 = c6(null);
  const enabled = first1.useContext(react3.AccessibilityPreferencesContext).reducedMotion.enabled;
  [obj2, tmp5] = sharedValue(ref2(0), 2);
  c6 = tmp5;
  const tmp4 = sharedValue(ref2(0), 2);
  const tmp6 = sharedValue(ref2(1), 2);
  let closure_7 = tmp8;
  const first = tmp6[0];
  const tmp9 = sharedValue(ref2(false), 2);
  first1 = tmp9[0];
  jsx = tmp9[1];
  const tmp11 = closure_7((set, value, duration) => {
    setIsAnimating(true);
    set = set.set;
    let obj = spring;
    const fn = function l() {
      const obj = require("ReanimatedRexport");
      obj.runOnJS(setIsAnimating)(false);
    };
    const obj2 = { duration, damping: 15, stiffness: 150, mass: 1 };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setIsAnimating };
    fn.__workletHash = 5640678796522;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setIsAnimating });
    const result = set(obj.withSpring(value, obj2, "respect-motion-settings", fn));
  }, []);
  closure_10 = tmp11;
  const items = [value, onValueChange, onValueReached, sharedValue, tmp11, enabled];
  let tmp12 = enabled(() => {
    let duration;
    if (null !== duration) {
      if (null !== ref.current) {
        const tmp23 = enabled;
        if (!tmp23) {
          if (duration !== ref.current) {
            const diff = tmp - tmp2.current;
            onValueChange(diff);
            ref.current = duration;
            const obj = { targetTime: require("AnimationUtils").EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS };
            const getOrbBalanceCounterAnimationConfigs = require("AnimationUtils").getOrbBalanceCounterAnimationConfigs;
            require("AnimationUtils");
            const orbBalanceCounterAnimationConfigs = getOrbBalanceCounterAnimationConfigs(diff, obj);
            duration = orbBalanceCounterAnimationConfigs.duration;
            const delay = orbBalanceCounterAnimationConfigs.delay;
            const tmp12 = clearAnimationTimeout;
            if (null != ref2.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref2.current);
              ref2.current = null;
            }
            setIsAnimating(false);
            const _setTimeout = setTimeout;
            ref2.current = setTimeout(() => {
              closure_10(sharedValue, require, duration);
              ref2.current = null;
            }, delay);
            return tmp12;
          } else {
            _undefined(duration);
          }
        }
      }
      _undefined(duration);
      const result = sharedValue.set(tmp);
      ref.current = duration;
    }
  }, items);
  ReanimatedRexport;
  let fn = function k() {
    const tmp = first1;
    if (tmp) {
      const _Math = Math;
      const str = Math.round(sharedValue.get());
      const obj = ReanimatedRexport;
      obj.runOnJS(c6)(str);
      const obj2 = ReanimatedRexport;
      const runOnJSResult = obj2.runOnJS(closure_7);
      runOnJSResult(str.toString().length);
    }
    return {};
  };
  const obj3 = { isAnimating: first1, animatedValue: sharedValue, runOnJS: ReanimatedRexport.runOnJS, setDisplayValue: tmp5, setMaxDigits: tmp8 };
  fn.__closure = obj3;
  fn.__workletHash = 3325611842357;
  fn.__initData = __initData2;
  let tmp15 = null;
  if (null !== value) {
    const items1 = [tmp14, ];
    const obj5 = { minWidth: 7 * first };
    items1[1] = obj5;
    const View = onValueChange(4810).View;
    ({ variant: "text-sm/semibold", style, maxFontSizeMultiplier: 2, children: obj2.toFixed(0) });
    const Text = Text_Text.Text;
    tmp15 = <View style={items1}>{null}</View>;
  }
  return tmp15;
});
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default tmp3;
export const BalanceCounter = tmp3;
