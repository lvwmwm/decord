// Module ID: 14734
// Function ID: 14735
// Name: BalanceCounter
// Dependencies: [32, 19, 21, 1652, 5157, 5773, 1705, 14735, 5763, 2]

// Module 14734 (BalanceCounter)
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import react2 from "react" /* 5157 */;
import spring_spring from "spring/spring" /* 5773 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const Text_Text = tmp(5763);
let react = react_mod;
({ useState: closure_4, useEffect: hasOwnProperty, useRef: metroRequire, useCallback: metroImportDefault } = react);
react = react_mod;
const jsx = Fragment.jsx;
let closure_10 = { code: "(function BalanceCounterTsx1(){let[scheduleOnRN,setIsAnimating]=this.__closure;scheduleOnRN(setIsAnimating,false);})" };
let closure_11 = { code: "(function BalanceCounterTsx2(){let[isAnimating,animatedValue,scheduleOnRN,setDisplayValue,setMaxDigits]=this.__closure;if(isAnimating){const roundedValue=Math.round(animatedValue.get());scheduleOnRN(setDisplayValue,roundedValue);scheduleOnRN(setMaxDigits,roundedValue.toString().length);}return{};})" };
class BalanceCounter {
  constructor(value) {
    let Text;
    let _undefined;
    let closure_8;
    let items3;
    let obj2;
    let obj5;
    let onValueReached;
    let ref;
    let style;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp5;
    let tmp7;
    let tmp8;
    value = value.value;
    require = value;
    const onValueChange = value.onValueChange;
    let str = value.textVariant;
    ({ onValueReached, style } = value);
    if (str === undefined) {
      str = "body-sm/semibold";
    }
    let c6;
    react = undefined;
    function clearAnimationTimeout() {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
      closure_7(false);
    }
    const textColor = value.textColor;
    dependencyMap = c6(null);
    const tmp2 = dependencyMap;
    let tmp = require;
    let obj = _mod1652;
    const sharedValue = obj.useSharedValue(0);
    const ref2 = c6(null);
    const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
    const tmp4 = sharedValue(ref2(0), 2);
    [obj2, tmp5] = tmp4;
    c6 = tmp5;
    [tmp7, tmp8] = sharedValue(ref2(1), 2);
    const tmp6 = sharedValue(ref2(1), 2);
    const tmp9 = sharedValue(ref2(false), 2);
    let closure_7 = tmp9[1];
    const first = tmp9[0];
    const tmp11 = closure_7((set, point2, duration) => {
      let tmp3;
      let tmp4;
      let tmp5;
      closure_7(true);
      const items = [, , ];
      const obj = { duration, damping: 15, stiffness: 150, mass: 1 };
      set = set.set;
      items[0] = closure_10;
      const withSpring = spring_spring.withSpring;
      spring_spring;
      items[1] = _mod1705.scheduleOnRN;
      items[2] = closure_7;
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
      const result = set(withSpring(point2, obj, "respect-motion-settings", BalanceCounterTsx1));
    }, []);
    react = tmp11;
    let items = [value, onValueChange, onValueReached, sharedValue, tmp11, enabled];
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
              closure_7(false);
              const _setTimeout = setTimeout;
              ref2.current = setTimeout(() => {
                closure_8(sharedValue, require, duration);
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
    _mod1652;
    let items1 = [closure_11, first, sharedValue, _mod1705.scheduleOnRN, tmp5, tmp8];
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items1;
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
    const items2 = [tmp15, tmp16, tmp17, tmp18, tmp19];
    BalanceCounterTsx2.__closure = items2;
    BalanceCounterTsx2.__workletHash = 10121586392867;
    BalanceCounterTsx2.__initData = tmp14;
    let tmp21 = null;
    if (null !== value) {
      let tmp23 = onValueChange;
      const obj3 = { style: items3, children: clearAnimationTimeout(Text, obj5) };
      items3 = [tmp20, ];
      const obj4 = { minWidth: 7 * tmp7 };
      items3[1] = obj4;
      const View = onValueChange(1652).View;
      obj5 = { variant: str, color: textColor, style, maxFontSizeMultiplier: 2, children: obj2.toFixed(0) };
      Text = Text_Text.Text;
      tmp21 = clearAnimationTimeout(View, obj3);
    }
    return tmp21;
  }
}
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceCounter.tsx");

export default BalanceCounter;
export { BalanceCounter };
