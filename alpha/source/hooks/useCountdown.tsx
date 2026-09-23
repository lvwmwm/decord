// Module ID: 7767
// Function ID: 7768
// Name: useCountdown
// Dependencies: [19, 4505, 7768, 7773, 2]
// Exports: default

// Module 7767 (useCountdown)
import _mod19 from "module_19" /* 19 */;
import DateUtils from "DateUtils" /* 4505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

_mod19.useCallback;
const result = size.fileFinishedImporting("hooks/useCountdown.tsx");

export default function useCountdown(expiresAt) {
  _require = expiresAt;
  let num = arg1;
  if (arg1 === undefined) {
    num = 1000;
  }
  importDefault = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const obj = require("DateUtils");
  const diffAsUnitsResult = require("DateUtils").diffAsUnits(Date.now(), expiresAt);
  const forceUpdate = require("areHookInputsEqual").useForceUpdate();
  const items = [expiresAt, flag, forceUpdate, arg2];
  const obj2 = require("areHookInputsEqual");
  let tmp5 = null;
  const tmp3 = forceUpdate(() => {
    const time = DateUtils.diffAsUnits(Date.now(), closure_0);
    if (!tmp) {
      forceUpdate();
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  if (!flag) {
    tmp5 = num;
  }
  require("useInterval")(tmp3, tmp5);
  return diffAsUnitsResult;
};
