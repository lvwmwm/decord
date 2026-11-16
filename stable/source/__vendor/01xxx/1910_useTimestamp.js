// Module ID: 1910
// Function ID: 1911
// Name: useTimestamp
// Dependencies: [19, 1891, 1905]
// Exports: useTimestamp

// Module 1910 (useTimestamp)
import react from "react" /* 19 */;
import _mod1891 from "module_1891" /* 1891 */;
import react2 from "react" /* 1905 */;

const useEffect = react.useEffect;
let closure_3 = { code: "(function pnpm_useTimestampTs1({timeSinceFirstFrame:timeSinceFirstFrame}){let[timestamp]=this.__closure;timestamp.value=timeSinceFirstFrame;})" };

export function useTimestamp(flag) {
  let tmp2;
  let tmp3;
  if (flag === undefined) {
    flag = true;
  }
  const obj = _mod1891;
  const sharedValue = obj.useSharedValue(0);
  const items = [closure_3, sharedValue];
  let c0;
  [tmp2, tmp3] = items;
  function pnpm_useTimestampTs1(timeSinceFirstFrame) {
    c0.value = timeSinceFirstFrame.timeSinceFirstFrame;
  }
  const items1 = [tmp3];
  pnpm_useTimestampTs1.__closure = items1;
  pnpm_useTimestampTs1.__workletHash = 17202738437951;
  pnpm_useTimestampTs1.__initData = tmp2;
  const obj2 = react2;
  const frameCallback = obj2.useFrameCallback(pnpm_useTimestampTs1, flag);
  const items2 = [flag, frameCallback];
  useEffect(() => {
    frameCallback.setActive(flag);
  }, items2);
  return sharedValue;
}
