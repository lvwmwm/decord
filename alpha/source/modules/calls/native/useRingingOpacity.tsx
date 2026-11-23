// Module ID: 18014
// Function ID: 18015
// Name: useRingingOpacity
// Dependencies: [19, 1653, 5123, 2]
// Exports: default

// Module 18014 (useRingingOpacity)
import _mod1653 from "module_1653" /* 1653 */;
import timing_timing from "timing/timing" /* 5123 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set, set2;

let Easing;
let obj = { duration: 1000, easing: Easing.inOut(_mod1653.Easing.ease) };
Easing = _mod1653.Easing;
let result = size.fileFinishedImporting("modules/calls/native/useRingingOpacity.tsx");

export default function useRingingOpacity(arg0) {
  let closure_0;
  _require = arg0;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let num = obj.initialOpacity;
  if (num === undefined) {
    num = 0.1;
  }
  let num2 = obj.pulseOpacity;
  if (num2 === undefined) {
    num2 = 1;
  }
  let num3 = obj.startDelay;
  if (num3 === undefined) {
    num3 = 1000;
  }
  let obj2 = require("module_1653");
  const sharedValue = obj2.useSharedValue(num);
  const items = [sharedValue, arg0, num, num2, num3];
  const effect = num2.useEffect(() => {
    const tmp = closure_0;
    if (tmp) {
      const result = sharedValue.set(num);
      const obj2 = timing_timing;
      const withTimingResult = obj2.withTiming(num2, obj);
      const obj3 = timing_timing;
      const withTimingResult1 = obj3.withTiming(num, obj);
      const withRepeat = _mod1653.withRepeat;
      _mod1653;
      const obj4 = _mod1653;
      set = sharedValue.set;
      const withRepeatResult = withRepeat(obj4.withSequence(withTimingResult, withTimingResult1), -1);
      const obj5 = _mod1653;
      const result1 = set(obj5.withDelay(num3, withRepeatResult));
    } else {
      obj = _mod1653;
      obj.cancelAnimation(sharedValue);
      const tmp4 = sharedValue;
      if (0.1 !== 0.1) {
        set2 = tmp4.set;
        const obj6 = timing_timing;
        set2(obj6.withTiming(tmp6, obj));
      }
    }
  }, items);
  return sharedValue;
};
export const RINGING_LOW_OPACITY = 0.1;
