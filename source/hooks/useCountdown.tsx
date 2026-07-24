// Module ID: 6678
// Function ID: 51447
// Name: useCountdown
// Dependencies: [31, 3800, 6679, 6684, 2]
// Exports: default

// Module 6678 (useCountdown)
require("result").useCallback;
const result = require("useForceUpdate").fileFinishedImporting("hooks/useCountdown.tsx");

export default function useCountdown(closure_0) {
  let num = arg1;
  let flag = arg3;
  const _require = closure_0;
  if (arg1 === undefined) {
    num = 1000;
  }
  const importDefault = arg2;
  if (flag === undefined) {
    flag = false;
  }
  let forceUpdate;
  const obj = _require(flag[1]);
  let diffAsUnitsResult = _require(flag[1]).diffAsUnits(Date.now(), closure_0);
  forceUpdate = _require(flag[2]).useForceUpdate();
  const items = [closure_0, flag, forceUpdate, arg2];
  const obj2 = _require(flag[2]);
  let tmp5 = null;
  const tmp3 = forceUpdate(() => {
    const diffAsUnitsResult = callback(flag[1]).diffAsUnits(Date.now(), callback);
    if (!tmp2) {
      forceUpdate();
      if (null != callback2) {
        callback2();
      }
    }
  }, items);
  if (!flag) {
    tmp5 = num;
  }
  importDefault(flag[3])(tmp3, tmp5);
  return diffAsUnitsResult;
};
