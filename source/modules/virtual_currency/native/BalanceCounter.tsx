// Module ID: 9787
// Function ID: 76042
// Name: BalanceCounter
// Dependencies: []

// Module 9787 (BalanceCounter)
let closure_3 = importDefault(dependencyMap[0]);
({ useState: closure_4, useEffect: closure_5, useRef: closure_6, useCallback: closure_7 } = arg1(dependencyMap[1]));
let closure_8 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_10 = { code: "function BalanceCounterTsx1(){const{runOnJS,setIsAnimating}=this.__closure;runOnJS(setIsAnimating)(false);}" };
let closure_11 = { code: "function BalanceCounterTsx2(){const{isAnimating,animatedValue,runOnJS,setDisplayValue,setMaxDigits}=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());runOnJS(setDisplayValue)(roundedValue);runOnJS(setMaxDigits)(roundedValue.toString().length);}return{};}" };
class BalanceCounter {
  constructor(arg0) {
    value = global.value;
    arg1 = value;
    onValueChange = global.onValueChange;
    importDefault = onValueChange;
    closure_4 = undefined;
    closure_9 = undefined;
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
    dependencyMap = useRef(null);
    obj = arg1(dependencyMap[3]);
    sharedValue = require("module_0");
    closure_3 = sharedValue;
    closure_4 = useRef(null);
    enabled = closure_8.useContext(arg1(dependencyMap[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
    useEffect = enabled;
    tmp3 = closure_3(require("module_0"), 2);
    first = tmp3[0];
    tmp4 = tmp3[1];
    useRef = tmp4;
    tmp5 = closure_3(require("module_1"), 2);
    tmp6 = tmp5[1];
    useCallback = tmp6;
    tmp7 = closure_3(closure_4(false), 2);
    first1 = tmp7[0];
    closure_8 = first1;
    closure_9 = tmp7[1];
    tmp9 = useCallback((set, targetHeight, duration) => {
      callback(true);
      let obj = value(closure_2[5]);
      obj = { "Bool(false)": "ASYNC_OP_IN_PROGRESS", "Bool(false)": "UNABLE_TO_OPEN_FILE_TYPE", "Bool(false)": "import", "Bool(false)": false, duration };
      const fn = function l() {
        callback(closure_2[3]).runOnJS(closure_9)(false);
      };
      obj = { runOnJS: value(closure_2[3]).runOnJS, setIsAnimating: callback };
      fn.__closure = obj;
      fn.__workletHash = 16153226572520;
      fn.__initData = tmp9;
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
    tmp10 = useEffect(() => {
      if (null !== value) {
        if (null !== ref.current) {
          if (!enabled) {
            if (value !== ref.current) {
              const diff = value - ref.current;
              onValueChange(diff);
              ref.current = value;
              const desiredAnimationConfigs = value(ref[6]).getDesiredAnimationConfigs(diff, value(ref[6]).EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS);
              const value = desiredAnimationConfigs.duration;
              clearAnimationTimeout();
              const _setTimeout = setTimeout;
              closure_4.current = setTimeout(() => {
                callback(closure_3, duration, duration);
                closure_4.current = null;
              }, desiredAnimationConfigs.delay);
              return clearAnimationTimeout;
            } else {
              tmp4(value);
            }
          }
        }
        tmp4(value);
        const result = sharedValue.set(value);
        ref.current = value;
      }
    }, items);
    tmp11 = arg1(dependencyMap[3]);
    class F {
      constructor() {
        if (closure_8) {
          tmp = globalThis;
          _Math = Math;
          tmp2 = closure_3;
          str = Math.round(closure_3.get());
          tmp3 = value;
          tmp4 = closure_2;
          num = 3;
          obj = value(closure_2[3]);
          tmp5 = closure_6;
          tmp6 = obj.runOnJS(closure_6)(str);
          obj2 = value(closure_2[3]);
          tmp7 = closure_7;
          runOnJSResult = obj2.runOnJS(closure_7);
          tmp8Result = runOnJSResult(str.toString().length);
        }
        return {};
      }
    }
    obj = { isAnimating: first1, animatedValue: sharedValue, runOnJS: arg1(dependencyMap[3]).runOnJS, setDisplayValue: tmp4, setMaxDigits: tmp6 };
    F.__closure = obj;
    F.__workletHash = 4408542396979;
    F.__initData = clearAnimationTimeout;
    if (null !== value) {
      tmp13 = closure_9;
      tmp14 = importDefault;
      tmp15 = dependencyMap;
      obj1 = {};
      items1 = [, ];
      items1[0] = tmp12;
      obj2 = {};
      num = 7;
      obj2.minWidth = 7 * tmp5[0];
      items1[1] = obj2;
      obj1.style = items1;
      tmp16 = arg1;
      obj3 = {};
      obj3.style = style;
      obj3.children = require("module_0");
      obj1.children = closure_9(arg1(dependencyMap[7]).Text, obj3);
      tmp = closure_9(importDefault(dependencyMap[3]).View, obj1);
    }
    return tmp;
  }
}
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default BalanceCounter;
export { BalanceCounter };
