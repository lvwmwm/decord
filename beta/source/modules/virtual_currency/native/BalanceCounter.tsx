// Module ID: 10561
// Function ID: 10562
// Name: BalanceCounter
// Dependencies: [32, 19, 21, 4566, 4550, 5280, 10562, 4832, 2]

// Module 10561 (BalanceCounter)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 4550 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let __initData, dependencyMap, set;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const Text_Text = tmp(4832);
let react = react_mod;
({ useState: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useCallback: metroImportDefault } = react);
react = react_mod;
let jsx = Fragment.jsx;
let closure_10 = { code: "function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}" };
let closure_11 = { code: "function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}" };
class BalanceCounter {
  constructor(value) {
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
    const enabled = first1.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
    [obj2, tmp5] = sharedValue(ref2(0), 2);
    c6 = tmp5;
    const tmp4 = sharedValue(ref2(0), 2);
    const tmp6 = sharedValue(ref2(1), 2);
    let closure_7 = tmp8;
    const first = tmp6[0];
    const tmp9 = sharedValue(ref2(false), 2);
    first1 = tmp9[0];
    jsx = tmp9[1];
    const tmp11 = closure_7((set, targetHeight, duration) => {
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
      const result = set(obj.withSpring(targetHeight, obj2, "respect-motion-settings", fn));
    }, []);
    __initData = tmp11;
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
                __initData(sharedValue, require, duration);
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
    class F {
      constructor() {
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
      }
    }
    const obj3 = { isAnimating: first1, animatedValue: sharedValue, runOnJS: ReanimatedRexport.runOnJS, setDisplayValue: tmp5, setMaxDigits: tmp8 };
    F.__closure = obj3;
    F.__workletHash = 4408542396979;
    F.__initData = clearAnimationTimeout;
    let tmp15 = null;
    if (null !== value) {
      const items1 = [tmp14, ];
      const obj5 = { minWidth: 7 * first };
      items1[1] = obj5;
      const View = onValueChange(4566).View;
      ({ variant: "text-sm/semibold", style, maxFontSizeMultiplier: 2, children: obj2.toFixed(0) });
      const Text = Text_Text.Text;
      tmp15 = <View style={items1}>{null}</View>;
    }
    return tmp15;
  }
}
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default BalanceCounter;
export { BalanceCounter };
