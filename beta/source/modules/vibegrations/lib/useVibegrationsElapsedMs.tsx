// Module ID: 16402
// Function ID: 16403
// Name: useVibegrationsElapsedMs
// Dependencies: [32, 19, 2]
// Exports: useVibegrationsElapsedMs

// Module 16402 (useVibegrationsElapsedMs)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
let closure_2 = { second: 1000, minute: 60000 };
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsElapsedMs.tsx");

export const useVibegrationsElapsedMs = function useVibegrationsElapsedMs(startedAt) {
  let first;
  _slicedToArray = startedAt;
  let str = arg1;
  if (arg1 === undefined) {
    str = "second";
  }
  closure_2 = undefined;
  [first, closure_2] = str.useState(() => Date.now());
  const items = [startedAt, str];
  const effect = str.useEffect(() => {
    let closure_0;
    let timeout;
    if (null != timeout) {
      let closure_1 = tmp4;
      function tick() {
        let timeout;
        const timestamp = Date.now();
        tick(timestamp);
        timeout = setTimeout(tick, closure_1 - ((timestamp - timeout) % closure_1 + closure_1) % closure_1);
      }
      const _Date = Date;
      let timestamp = Date.now();
      tick(timestamp);
      const _setTimeout = setTimeout;
      timeout = setTimeout(tick, tmp4 - ((timestamp - tmp) % tmp4 + tmp4) % tmp4);
      return () => clearTimeout(closure_0);
    }
  }, items);
  let bound;
  if (null != startedAt) {
    const _Math = Math;
    bound = Math.max(0, first - startedAt);
  }
  return bound;
};
