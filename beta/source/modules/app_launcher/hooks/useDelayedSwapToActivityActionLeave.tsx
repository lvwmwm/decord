// Module ID: 11510
// Function ID: 11511
// Name: useDelayedSwapToActivityActionLeave
// Dependencies: [32, 19, 558, 576, 11415, 2]

// Module 11510 (useDelayedSwapToActivityActionLeave)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp3;
  let tmp4;
  let tmp5;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  [tmp3, dependencyMap] = _slicedToArray(react.useState(arg0), 2);
  const obj2 = react;
  const tmp2 = _slicedToArray(react.useState(arg0), 2);
  if (cResult[0] !== arg0) {
    const fn = function c() {
      let timeout;
      const tmp = timeout;
      if (timeout === timeout(dependencyMap[4]).ActivityAction.LEAVE) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => closure_1_1(closure_0), 100);
        return () => clearTimeout(closure_0);
      } else {
        dependencyMap(tmp);
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp4, tmp5);
  return tmp3;
}) : ((arg0) => {
  let closure_1;
  let first;
  let closure_0 = arg0;
  [first, closure_1] = react.useState(arg0);
  const items = [arg0];
  const layoutEffect = react.useLayoutEffect(() => {
    let timeout;
    const tmp = timeout;
    if (timeout === timeout(closure_1[4]).ActivityAction.LEAVE) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1(closure_0), 100);
      return () => clearTimeout(closure_0);
    } else {
      closure_1(tmp);
    }
  }, items);
  return first;
});
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx");

export const useDelayedSwapToActivityActionLeave = tmp2;
