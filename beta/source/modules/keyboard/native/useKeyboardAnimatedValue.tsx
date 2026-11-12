// Module ID: 7050
// Function ID: 7051
// Name: useKeyboardAnimatedValue
// Dependencies: [19, 1652, 1377, 5402, 7051, 2]
// Exports: default

// Module 7050 (useKeyboardAnimatedValue)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import useKeyboardDuration from "useKeyboardDuration" /* 7051 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Easing = _mod1652.Easing;
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
  let obj = require("module_1652");
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
