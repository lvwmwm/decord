// Module ID: 16998
// Function ID: 16999
// Name: useShouldDisplayCancelConsoleTransfer
// Dependencies: [32, 19, 2]
// Exports: default

// Module 16998 (useShouldDisplayCancelConsoleTransfer)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx");

export default function useShouldDisplayCancelConsoleTransfer(arg0) {
  let closure_1;
  let first;
  let closure_0 = arg0;
  [first, closure_1] = react.useState(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const _Date = Date;
      tmp2 = Date.now() - tmp.startedAt > 6000;
    }
    return tmp2;
  });
  const items = [arg0];
  const effect = react.useEffect(() => {
    let timeout;
    let tmp = timeout;
    let tmp2 = null != timeout;
    if (tmp2) {
      let tmp3 = globalThis;
      let _Date = Date;
      tmp2 = Date.now() - tmp.startedAt > 6000;
    }
    closure_1(tmp2);
    if (null != tmp) {
      if (!tmp2) {
        const _setTimeout = setTimeout;
        const _Date2 = Date;
        timeout = setTimeout(() => {
          let tmp3 = null != closure_0;
          const tmp = closure_1_1;
          if (tmp3) {
            const _Date = Date;
            tmp3 = Date.now() - tmp2.startedAt > 6000;
          }
          return tmp(tmp3);
        }, 6000 - (Date.now() - tmp.startedAt));
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
  }, items);
  return first;
};
