// Module ID: 12478
// Function ID: 96664
// Name: useScheduledForcedUpdate
// Dependencies: [31, 6215, 2]
// Exports: default

// Module 12478 (useScheduledForcedUpdate)
import result from "result";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/hooks/useScheduledForcedUpdate.tsx");

export default function useScheduledForcedUpdate(delay) {
  delay = delay.delay;
  let flag = delay.disable;
  if (flag === undefined) {
    flag = false;
  }
  let forceUpdate;
  forceUpdate = delay(flag[1]).useForceUpdate();
  const items = [delay, flag, forceUpdate];
  const effect = forceUpdate.useEffect(() => {
    if (timeout > 0) {
      if (!flag) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          outer1_2();
        }, timeout);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
};
