// Module ID: 12075
// Function ID: 93156
// Name: useThrottledActionHandler
// Dependencies: []
// Exports: default

// Module 12075 (useThrottledActionHandler)
function useThrottledActionHandler(throttleMs) {
  let num = throttleMs;
  if (throttleMs === undefined) {
    num = 500;
  }
  const arg1 = num;
  let closure_1;
  closure_1 = React.useRef(null);
  const effect = React.useEffect(() => () => clearTimeout(ref.current), []);
  return (arg0) => (arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = null === ref.current;
    }
    if (tmp) {
      arg0(arg0);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1.current = null;
      }, arg0);
    }
  };
}
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_scheduled_events/native/components/ThrottledButton.tsx");

export default function ThrottledButton(throttleMs) {
  let onPress;
  let onPressIn;
  let onPressOut;
  let num = throttleMs.throttleMs;
  ({ onPress, onPressIn, onPressOut } = throttleMs);
  if (num === undefined) {
    num = 500;
  }
  let obj = { "Bool(true)": "r", "Bool(true)": "onRequireModeratorMFAClick", "Bool(true)": "Array", "Bool(true)": "isSpamMessageRequest" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(throttleMs, obj);
  const tmp3 = useThrottledActionHandler(num);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["onPress"] = tmp3(onPress);
  obj["onPressIn"] = tmp3(onPressIn);
  obj["onPressOut"] = tmp3(onPressOut);
  return jsx(arg1(dependencyMap[2]).Button, obj);
};
export { useThrottledActionHandler };
