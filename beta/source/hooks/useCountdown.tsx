// Module ID: 6859
// Function ID: 6860
// Name: useCountdown
// Dependencies: [19, 4512, 6860, 6865, 2]
// Exports: default

// Module 6859 (useCountdown)
import react from "react" /* 19 */;
import DateUtils from "DateUtils" /* 4512 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

react.useCallback;
const result = size.fileFinishedImporting("hooks/useCountdown.tsx");

export default function useCountdown(expiresAt) {
  let closure_1;
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
  let obj = require("DateUtils");
  const diffAsUnitsResult = obj.diffAsUnits(Date.now(), expiresAt);
  const obj2 = require("module_6860");
  const forceUpdate = obj2.useForceUpdate();
  const items = [expiresAt, flag, forceUpdate, arg2];
  let tmp5 = null;
  const tmp3 = forceUpdate(() => {
    const obj = DateUtils;
    const time = obj.diffAsUnits(Date.now(), expiresAt);
    const tmp = 0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds || flag;
    if (!tmp) {
      forceUpdate();
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  const tmp4 = require("useInterval");
  if (!flag) {
    tmp5 = num;
  }
  tmp4(tmp3, tmp5);
  return diffAsUnitsResult;
};
