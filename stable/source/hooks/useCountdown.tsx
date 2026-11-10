// Module ID: 7624
// Function ID: 7625
// Name: useCountdown
// Dependencies: [32, 19, 4836, 7625, 2]
// Exports: default

// Module 7624 (useCountdown)
import DateUtils from "DateUtils" /* 4836 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_4;
let hasOwnProperty;
let _slicedToArray = _slicedToArray_mod;
({ useCallback: closure_4, useState: hasOwnProperty } = react);
const result = size.fileFinishedImporting("hooks/useCountdown.tsx");

export default function useCountdown(expiresAt) {
  let closure_1;
  let closure_3;
  let first;
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
  _slicedToArray = undefined;
  [first, _slicedToArray] = closure_5(Date.now);
  let obj = require("DateUtils");
  const items = [expiresAt, flag, arg2];
  const diffAsUnitsResult = obj.diffAsUnits(first, expiresAt);
  let tmp6 = null;
  const tmp4 = closure_4(() => {
    const obj = DateUtils;
    const time = obj.diffAsUnits(Date.now(), expiresAt);
    let tmp2 = 0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds;
    const tmp = expiresAt;
    if (tmp2) {
      const _Number = Number;
      closure_3(Number(tmp));
    }
    if (!tmp2) {
      tmp2 = flag;
    }
    if (!tmp2) {
      const _Date = Date;
      closure_3(Date.now());
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  const tmp5 = require("useInterval");
  if (!flag) {
    tmp6 = num;
  }
  tmp5(tmp4, tmp6);
  return diffAsUnitsResult;
};
