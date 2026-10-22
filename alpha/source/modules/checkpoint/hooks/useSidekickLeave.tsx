// Module ID: 12934
// Function ID: 12935
// Name: useSidekickLeave
// Dependencies: [19, 558, 576, 6349, 2]

// Module 12934 (useSidekickLeave)
import CheckpointNavigation from "CheckpointNavigation" /* 6349 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSidekickLeave(arg0, arg1, arg2, arg3) {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
  dependencyMap = arg1;
  react = arg2;
  let closure_3 = arg3;
  const obj = require("react");
  const cResult = obj.c(6);
  const ref = react.useRef(true);
  const obj2 = react;
  if (cResult[0] === arg2) {
    if (cResult[1] === arg3) {
      if (cResult[2] === arg1) {
        let tmp2;
        let tmp3;
        if (cResult[3] === arg0) {
          tmp2 = cResult[4];
          tmp3 = cResult[5];
        }
        const effect = obj2.useEffect(tmp2, tmp3);
      }
    }
  }
  const fn = function o() {
    let timeout;
    if (timeout === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
      if (ref.current) {
        closure_3();
      } else {
        const tmp3 = closure_1;
        if (tmp3) {
          closure_2();
        } else {
          const _setTimeout = setTimeout;
          timeout = setTimeout(closure_2, 1000);
          return () => clearTimeout(closure_0);
        }
      }
    } else {
      ref.current = false;
    }
  };
  const items = [arg2, arg3, arg1, arg0];
  cResult[0] = arg2;
  cResult[1] = arg3;
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn;
  cResult[5] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useSidekickLeave(arg0, arg1, arg2, arg3) {
  let closure_2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  react = arg2;
  let closure_3 = arg3;
  const ref = react.useRef(true);
  const items = [arg2, arg3, arg1, arg0];
  const effect = react.useEffect(() => {
    let timeout;
    if (timeout === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
      if (ref.current) {
        closure_3();
      } else {
        const tmp3 = closure_1;
        if (tmp3) {
          closure_2();
        } else {
          const _setTimeout = setTimeout;
          timeout = setTimeout(closure_2, 1000);
          return () => clearTimeout(closure_0);
        }
      }
    } else {
      ref.current = false;
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useSidekickLeave.tsx");

export const useSidekickLeave = tmp2;
