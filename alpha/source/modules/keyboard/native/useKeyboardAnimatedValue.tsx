// Module ID: 7049
// Function ID: 7050
// Name: useKeyboardAnimatedValue
// Dependencies: [19, 1654, 1379, 5253, 7050, 2]
// Exports: default

// Module 7049 (useKeyboardAnimatedValue)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import _mod1654 from "module_1654" /* 1654 */;
import timing_timing from "timing/timing" /* 5253 */;
import useKeyboardDuration from "useKeyboardDuration" /* 7050 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Easing = _mod1654.Easing;
const bezierResult = Easing.bezier(0.2, 0, 0, 1);
let c3 = bezierResult;
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardAnimatedValue.tsx");

export default function useKeyboardAnimatedValue(point) {
  let easing;
  _require = point;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = require("module_1654");
  const sharedValue = obj.useSharedValue(point);
  const items = [sharedValue, point, flag];
  const effect = sharedValue.useEffect(() => {
    let tmp4Result2;
    const tmp3 = flag;
    if (tmp3) {
      let withTimingResult;
      const obj = PlatformUtils;
      if (!obj.isAndroid()) {
        const obj2 = { duration: tmp4Result2.getKeyboardDuration(), easing };
        const withTiming = timing_timing.withTiming;
        timing_timing;
        tmp4Result2 = useKeyboardDuration;
        withTimingResult = withTiming(point, obj2);
      }
      tmp2(withTimingResult);
    }
    withTimingResult = point;
  }, items);
  return sharedValue;
};
export const KEYBOARD_EASING = bezierResult;
