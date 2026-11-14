// Module ID: 7475
// Function ID: 7476
// Name: useKeyboardAnimatedValue
// Dependencies: [19, 1655, 1380, 5548, 7476, 2]
// Exports: default

// Module 7475 (useKeyboardAnimatedValue)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import useKeyboardDuration from "useKeyboardDuration" /* 7476 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Easing = _mod1655.Easing;
const bezierResult = Easing.bezier(0.2, 0, 0, 1);
let c3 = bezierResult;
const result = size.fileFinishedImporting("modules/keyboard/native/useKeyboardAnimatedValue.tsx");

export default function useKeyboardAnimatedValue(UNDETERMINED) {
  let easing;
  _require = UNDETERMINED;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = require("module_1655");
  const sharedValue = obj.useSharedValue(UNDETERMINED);
  const items = [sharedValue, UNDETERMINED, flag];
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
        withTimingResult = withTiming(UNDETERMINED, obj2);
      }
      tmp2(withTimingResult);
    }
    withTimingResult = UNDETERMINED;
  }, items);
  return sharedValue;
};
export const KEYBOARD_EASING = bezierResult;
