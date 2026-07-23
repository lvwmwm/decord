// Module ID: 9795
// Function ID: 76107
// Name: BalanceCounter
// Dependencies: [57, 31, 33, 3991, 3849, 4542, 9796, 4126, 2]

// Module 9795 (BalanceCounter)
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_8 from "result";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let require = arg1;
({ useState: closure_4, useEffect: closure_5, useRef: closure_6, useCallback: closure_7 } = result);
let closure_10 = { code: "function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}" };
let closure_11 = { code: "function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}" };
class BalanceCounter {
  constructor(arg0) {
    value = global.value;
    closure_0 = value;
    onValueChange = global.onValueChange;
    c4 = undefined;
    c9 = undefined;
    clearAnimationTimeout = function clearAnimationTimeout() {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      callback(false);
    };
    tmp = null;
    ({ onValueReached, style } = global);
    closure_2 = useRef(null);
    obj = require("module_3991");
    sharedValue = require("_slicedToArray");
    _slicedToArray = sharedValue;
    c4 = useRef(null);
    enabled = c8.useContext(require("context").AccessibilityPreferencesContext).reducedMotion.enabled;
    tmp3 = _slicedToArray(require("_slicedToArray"), 2);
    first = tmp3[0];
    tmp4 = tmp3[1];
    useRef = tmp4;
    tmp5 = _slicedToArray(require("result"), 2);
    tmp6 = tmp5[1];
    useCallback = tmp6;
    tmp7 = _slicedToArray(c4(false), 2);
    first1 = tmp7[0];
    c8 = first1;
    c9 = tmp7[1];
    tmp9 = useCallback((set, targetHeight, duration) => {
      callback(true);
      let obj = value(ref[5]);
      obj = { duration, damping: 15, stiffness: 150, mass: 1 };
      const fn = function l() {
        value(table[3]).runOnJS(outer1_9)(false);
      };
      obj = { runOnJS: value(ref[3]).runOnJS, setIsAnimating: callback };
      fn.__closure = obj;
      fn.__workletHash = 16153226572520;
      fn.__initData = closure_10;
      const result = set.set(obj.withSpring(targetHeight, obj, "respect-motion-settings", fn));
    }, []);
    jsx = tmp9;
    items = [, , , , , ];
    items[0] = value;
    items[1] = onValueChange;
    items[2] = onValueReached;
    items[3] = sharedValue;
    items[4] = tmp9;
    items[5] = enabled;
    tmp10 = enabled(() => {
      if (null !== duration) {
        if (null !== ref.current) {
          if (!enabled) {
            if (duration !== ref.current) {
              const diff = duration - ref.current;
              onValueChange(diff);
              ref.current = duration;
              const desiredAnimationConfigs = value(ref[6]).getDesiredAnimationConfigs(diff, value(ref[6]).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS);
              duration = desiredAnimationConfigs.duration;
              clearAnimationTimeout();
              const _setTimeout = setTimeout;
              closure_4.current = setTimeout(() => {
                outer1_10(outer1_3, duration, duration);
                outer1_4.current = null;
              }, desiredAnimationConfigs.delay);
              return clearAnimationTimeout;
            } else {
              tmp4(duration);
            }
          }
        }
        tmp4(duration);
        const result = sharedValue.set(duration);
        ref.current = duration;
      }
    }, items);
    tmp11 = require("module_3991");
    class F {
      constructor() {
        if (c8) {
          tmp = globalThis;
          _Math = Math;
          tmp2 = _slicedToArray;
          str = Math.round(_slicedToArray.get());
          tmp3 = value;
          tmp4 = outer1_2;
          num = 3;
          obj = require("module_3991");
          tmp5 = closure_6;
          tmp6 = obj.runOnJS(closure_6)(str);
          obj2 = require("module_3991");
          tmp7 = closure_7;
          runOnJSResult = obj2.runOnJS(closure_7);
          tmp8Result = runOnJSResult(str.toString().length);
        }
        return {};
      }
    }
    obj = { isAnimating: first1, animatedValue: sharedValue, runOnJS: require("module_3991").runOnJS, setDisplayValue: tmp4, setMaxDigits: tmp6 };
    F.__closure = obj;
    F.__workletHash = 4408542396979;
    F.__initData = clearAnimationTimeout;
    if (null !== value) {
      tmp13 = c9;
      tmp14 = onValueChange;
      tmp15 = closure_2;
      obj1 = {};
      items1 = [, ];
      items1[0] = tmp12;
      obj2 = {};
      num = 7;
      obj2.minWidth = 7 * tmp5[0];
      items1[1] = obj2;
      obj1.style = items1;
      tmp16 = closure_0;
      obj3 = { variant: "text-sm/semibold", style: null, maxFontSizeMultiplier: 2 };
      obj3.style = style;
      obj3.children = require("_slicedToArray");
      obj1.children = c9(require("Text").Text, obj3);
      tmp = c9(require("module_3991").View, obj1);
    }
    return tmp;
  }
}
result = require("jsxProd").fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default BalanceCounter;
export { BalanceCounter };
