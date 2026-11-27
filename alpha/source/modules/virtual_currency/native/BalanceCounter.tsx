// Module ID: 9453
// Function ID: 9454
// Name: BalanceCounter
// Dependencies: [32, 19, 21, 1654, 5057, 5644, 1707, 9454, 5634, 2]

// Module 9453 (BalanceCounter)
import Fragment from "Fragment" /* 21 */;
import _mod1654 from "module_1654" /* 1654 */;
import _mod1707 from "module_1707" /* 1707 */;
import react2 from "react" /* 5057 */;
import spring_spring from "spring/spring" /* 5644 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const Text_Text = tmp(5634);
let react = react_mod;
({ useState: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useCallback: metroImportDefault } = react);
react = react_mod;
let jsx = Fragment.jsx;
let closure_10 = { code: "(function BalanceCounterTsx1(){let[scheduleOnRN,setIsAnimating]=this.__closure;scheduleOnRN(setIsAnimating,false);})" };
let closure_11 = { code: "(function BalanceCounterTsx2(){let[isAnimating,animatedValue,scheduleOnRN,setDisplayValue,setMaxDigits]=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());scheduleOnRN(setDisplayValue,roundedValue);scheduleOnRN(setMaxDigits,roundedValue.toString().length);}return{};})" };
class BalanceCounter {
  constructor(value) {
    let Text;
    let _undefined;
    let _undefined2;
    let c8;
    let closure_9;
    let num;
    let obj2;
    let obj5;
    let onValueReached;
    let ref;
    let style;
    let textColor;
    let tmp10;
    let tmp11;
    let tmp13;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp22;
    let tmp23;
    let tmp25;
    let tmp8;
    let trimBottomFontSpace;
    value = value.value;
    require = value;
    const onValueChange = value.onValueChange;
    let str = value.textVariant;
    ({ onValueReached, style } = value);
    if (str === undefined) {
      str = "body-sm/semibold";
    }
    ({ trimBottomFontSpace, textColor } = value);
    if (trimBottomFontSpace === undefined) {
      trimBottomFontSpace = false;
    }
    let closure_6;
    let c7;
    react = undefined;
    function clearAnimationTimeout() {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      _undefined2(false);
    }
    dependencyMap = closure_6(null);
    const tmp2 = dependencyMap;
    let tmp = require;
    let obj = _mod1654;
    const sharedValue = obj.useSharedValue(0);
    const ref2 = closure_6(null);
    const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
    const tmp4 = sharedValue(ref2(0), 2);
    closure_6 = tmp4[1];
    const first = tmp4[0];
    const tmp6 = c7((nativeEvent) => {
      const lines = nativeEvent.nativeEvent.lines;
      if (null != lines[lines.length - 1]) {
        const _Math = Math;
        closure_6(Math.abs(lines[lines.length - 1].descender));
      }
    }, []);
    [obj2, tmp8] = sharedValue(ref2(0), 2);
    c7 = tmp8;
    const tmp7 = sharedValue(ref2(0), 2);
    [tmp10, tmp11] = sharedValue(ref2(1), 2);
    const tmp9 = sharedValue(ref2(1), 2);
    let tmp12 = sharedValue(ref2(false), 2);
    [tmp13, c8] = tmp12;
    const tmp14 = c7((set, bound, duration) => {
      let tmp3;
      let tmp4;
      let tmp5;
      _undefined2(true);
      const items = [, , ];
      const obj = { duration, damping: 15, stiffness: 150, mass: 1 };
      set = set.set;
      items[0] = closure_10;
      const withSpring = spring_spring.withSpring;
      spring_spring;
      items[1] = _mod1707.scheduleOnRN;
      items[2] = _undefined2;
      let c0;
      let c1;
      [tmp3, tmp4, tmp5] = items;
      class BalanceCounterTsx1 {
        constructor() {
          tmp = closure_0(closure_1, false);
          return;
        }
      }
      const items1 = [tmp4, tmp5];
      BalanceCounterTsx1.__closure = items1;
      BalanceCounterTsx1.__workletHash = 2321092596604;
      BalanceCounterTsx1.__initData = tmp3;
      const result = set(withSpring(bound, obj, "respect-motion-settings", BalanceCounterTsx1));
    }, []);
    jsx = tmp14;
    let items = [value, onValueChange, onValueReached, sharedValue, tmp14, enabled];
    enabled(() => {
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
              _undefined2(false);
              const _setTimeout = setTimeout;
              ref2.current = setTimeout(() => {
                closure_9(sharedValue, require, duration);
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
    _mod1654;
    let items1 = [closure_11, tmp13, sharedValue, _mod1707.scheduleOnRN, tmp8, tmp11];
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items1;
    class BalanceCounterTsx2 {
      constructor() {
        const tmp = c0;
        if (tmp) {
          const _Math = Math;
          const str = Math.round(_undefined.get());
          _undefined2(c3, str);
          _undefined2(c4, str.toString().length);
        }
        return {};
      }
    }
    const items2 = [tmp18, tmp19, tmp20, tmp21, tmp22];
    BalanceCounterTsx2.__closure = items2;
    BalanceCounterTsx2.__workletHash = 10121586392867;
    BalanceCounterTsx2.__initData = tmp17;
    let tmp26Result = null;
    if (null !== value) {
      const items3 = [tmp23, ];
      const obj3 = { minWidth: 7 * tmp10, marginBottom: num };
      num = 0;
      const View = onValueChange(1654).View;
      if (trimBottomFontSpace) {
        num = -first;
      }
      items3[1] = obj3;
      const obj4 = { style: items3, children: jsx(Text, obj5) };
      obj5 = { variant: str, color: textColor, style, maxFontSizeMultiplier: 2, onTextLayout: tmp25, children: obj2.toFixed(0) };
      tmp25 = undefined;
      Text = Text_Text.Text;
      if (trimBottomFontSpace) {
        tmp25 = tmp6;
      }
      tmp26Result = tmp26(View, obj4);
    }
    return tmp26Result;
  }
}
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default BalanceCounter;
export { BalanceCounter };
