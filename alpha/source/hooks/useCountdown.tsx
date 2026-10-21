// Module ID: 7531
// Function ID: 7532
// Name: useCountdown
// Dependencies: [32, 19, 558, 576, 4794, 7532, 2]

// Module 7531 (useCountdown)
import DateUtils from "DateUtils" /* 4794 */;
import useIntervalDefault from "useInterval" /* 7532 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, tmp8;

let closure_4;
let hasOwnProperty;
let _slicedToArray = _slicedToArray_mod;
({ useCallback: closure_4, useState: hasOwnProperty } = react);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCountdown(expiresAt, arg1, arg2, arg3) {
  let closure_1;
  let closure_2;
  let tmp6;
  _require = expiresAt;
  importDefault = arg2;
  let tmp2 = dependencyMap;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  let num = 1000;
  if (undefined !== arg1) {
    num = arg1;
  }
  dependencyMap = tmp4;
  const tmp5 = _slicedToArray(closure_5(Date.now), 2);
  [tmp6, _slicedToArray] = tmp5;
  if (cResult[0] === expiresAt) {
    let tmp7;
    if (cResult[1] === tmp6) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === expiresAt) {
      if (cResult[4] === (undefined !== arg3 && arg3)) {
        let tmp9;
        let tmp12;
        if (cResult[5] === arg2) {
          tmp9 = cResult[6];
        }
        class A {
          constructor() {
            obj = closure_0(closure_2[4]);
            tmp = closure_0;
            time = obj.diffAsUnits(Date.now(), closure_0);
            tmp2 = 0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds;
            if (tmp2) {
              tmp3 = closure_3;
              _Number = Number;
              tmp4 = closure_3(Number(tmp));
            }
            if (!tmp2) {
              tmp2 = closure_2;
            }
            if (!tmp2) {
              tmp5 = closure_3;
              _Date = Date;
              tmp6 = closure_3(Date.now());
              tmp7 = null;
              if (closure_1 != null) {
                tmp8 = closure_1();
              }
            }
            return;
          }
        }
        const tmp11 = useIntervalDefault;
        if (!(undefined !== arg3 && arg3)) {
          tmp12 = num;
        }
        tmp11(tmp9, tmp12);
        return tmp7;
      }
    }
    class A {
      constructor() {
        obj = closure_0(closure_2[4]);
        tmp = closure_0;
        time = obj.diffAsUnits(Date.now(), closure_0);
        tmp2 = 0 === time.days && 0 === time.hours && 0 === time.minutes && 0 === time.seconds;
        if (tmp2) {
          tmp3 = closure_3;
          _Number = Number;
          tmp4 = closure_3(Number(tmp));
        }
        if (!tmp2) {
          tmp2 = closure_2;
        }
        if (!tmp2) {
          tmp5 = closure_3;
          _Date = Date;
          tmp6 = closure_3(Date.now());
          tmp7 = null;
          if (closure_1 != null) {
            tmp8 = closure_1();
          }
        }
        return;
      }
    }
    cResult[3] = expiresAt;
    cResult[4] = undefined !== arg3 && arg3;
    cResult[5] = arg2;
    cResult[6] = A;
    tmp9 = A;
  }
  const tmpResult = tmp(4794);
  const diffAsUnitsResult = tmpResult.diffAsUnits(tmp6, expiresAt);
  cResult[0] = expiresAt;
  cResult[1] = tmp6;
  cResult[2] = diffAsUnitsResult;
  tmp7 = diffAsUnitsResult;
}) : (function useCountdown(expiresAt) {
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
});
const result = size.fileFinishedImporting("hooks/useCountdown.tsx");

export default tmp3;
