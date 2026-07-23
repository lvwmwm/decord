// Module ID: 12200
// Function ID: 95368
// Name: useThrottledActionHandler
// Dependencies: [31, 33, 4543, 2]
// Exports: default

// Module 12200 (useThrottledActionHandler)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
function useThrottledActionHandler(throttleMs) {
  let num = throttleMs;
  if (throttleMs === undefined) {
    num = 500;
  }
  let closure_1;
  closure_1 = React.useRef(null);
  const effect = React.useEffect(() => () => clearTimeout(outer1_1.current), []);
  return (arg0) => {
    let closure_0 = arg0;
    return (arg0) => {
      let tmp = null != callback;
      if (tmp) {
        tmp = null === outer1_1.current;
      }
      if (tmp) {
        callback(arg0);
        const _setTimeout = setTimeout;
        outer1_1.current = setTimeout(() => {
          outer2_1.current = null;
        }, callback);
      }
    };
  };
}
const result = require("Button").fileFinishedImporting("modules/guild_scheduled_events/native/components/ThrottledButton.tsx");

export default function ThrottledButton(throttleMs) {
  let onPress;
  let onPressIn;
  let onPressOut;
  let num = throttleMs.throttleMs;
  ({ onPress, onPressIn, onPressOut } = throttleMs);
  if (num === undefined) {
    num = 500;
  }
  let obj = { onPress: 0, onPressIn: 0, onPressOut: 0, throttleMs: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(throttleMs, obj);
  const tmp3 = useThrottledActionHandler(num);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["onPress"] = tmp3(onPress);
  obj["onPressIn"] = tmp3(onPressIn);
  obj["onPressOut"] = tmp3(onPressOut);
  return jsx(require(4543) /* Button */.Button, {});
};
export { useThrottledActionHandler };
