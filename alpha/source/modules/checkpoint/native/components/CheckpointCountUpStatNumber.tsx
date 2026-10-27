// Module ID: 12997
// Function ID: 12998
// Name: CheckpointCountUpStatNumber
// Dependencies: [32, 19, 17, 4973, 21, 558, 576, 504, 12996, 2]

// Module 12997 (CheckpointCountUpStatNumber)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 12996 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp;
const CheckpointStatNumber = tmp(12996);
({ useEffect: closure_4, useMemo: hasOwnProperty, useState: metroRequire } = react);
const View = react_native.View;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCountUpValue(arg0, arg1) {
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp9;
  let useReducedMotion;
  _require = arg0;
  let closure_1 = arg1;
  let tmp = _require;
  let tmp2 = stateFromStores;
  const obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function v() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[7]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = _slicedToArray(closure_6(arg1), 2);
  [tmp9, _slicedToArray] = tmp8;
  if (cResult[2] === arg0) {
    if (cResult[3] === stateFromStores) {
      let tmp10;
      let tmp11;
      if (cResult[4] === arg1) {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      closure_4(tmp10, tmp11);
      if (stateFromStores) {
        tmp9 = arg0;
      }
      return tmp9;
    }
  }
  const fn2 = function p() {
    const tmp = stateFromStores;
    if (!tmp) {
      let tmp2 = globalThis;
      const _Date = Date;
      closure_0 = Date.now();
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        let rounded;
        const bound = Math.min((Date.now() - closure_0) / 500, 1);
        const tmp2 = _slicedToArray;
        if (1 === bound) {
          rounded = closure_0;
        } else {
          const _Math = Math;
          rounded = Math.round((closure_0 - closure_1) * bound + closure_1);
        }
        tmp2(rounded);
        if (1 === bound) {
          const _clearInterval = clearInterval;
          clearInterval(closure_1);
        }
      }, 32);
      return () => clearInterval(closure_1);
    }
  };
  const items1 = [arg0, stateFromStores, arg1];
  cResult[2] = arg0;
  cResult[3] = stateFromStores;
  cResult[4] = arg1;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp11 = items1;
  tmp10 = fn2;
}) : (function useCountUpValue(arg0, arg1) {
  let stateFromStores;
  let tmp3;
  let useReducedMotion;
  _require = arg0;
  let closure_1 = arg1;
  const items = [AccessibilityStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp2 = _slicedToArray(closure_6(arg1), 2);
  [tmp3, _slicedToArray] = tmp2;
  const items1 = [arg0, stateFromStores, arg1];
  closure_4(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      let tmp2 = globalThis;
      const _Date = Date;
      closure_0 = Date.now();
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        let rounded;
        const bound = Math.min((Date.now() - closure_0) / 500, 1);
        const tmp2 = _slicedToArray;
        if (1 === bound) {
          rounded = closure_0;
        } else {
          const _Math = Math;
          rounded = Math.round((closure_0 - closure_1) * bound + closure_1);
        }
        tmp2(rounded);
        if (1 === bound) {
          const _clearInterval = clearInterval;
          clearInterval(closure_1);
        }
      }, 32);
      return () => clearInterval(closure_1);
    }
  }, items1);
  if (stateFromStores) {
    tmp3 = arg0;
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCountUpStatNumber(arg0) {
  let end;
  let start;
  const obj = react2;
  const cResult = obj.c(11);
  ({ start, end, size } = arg0);
  let num = 100;
  if (undefined !== size) {
    num = size;
  }
  let num2 = 0;
  const tmp4 = closure_10;
  if (undefined !== start) {
    num2 = start;
  }
  const tmp4Result = tmp4(end, num2);
  if (cResult[0] === end) {
    let tmp6;
    let tmp8;
    if (cResult[1] === num) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const obj2 = { width: tmp6 };
      cResult[3] = tmp6;
      cResult[4] = obj2;
      tmp8 = obj2;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4Result) {
      let tmp9;
      if (cResult[6] === num) {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp9) {
        let tmp13;
        if (cResult[9] === tmp8) {
          tmp13 = cResult[10];
        }
        return tmp13;
      }
      const tmp16 = <View style={tmp8}>{tmp9}</View>;
      cResult[8] = tmp9;
      cResult[9] = tmp8;
      cResult[10] = tmp16;
      tmp13 = tmp16;
    }
    const tmp12 = jsx(CheckpointStatNumberDefault, { value: tmp4Result, size: num });
    cResult[5] = tmp4Result;
    cResult[6] = num;
    cResult[7] = tmp12;
    tmp9 = tmp12;
  }
  const tmpResult = CheckpointStatNumber;
  const checkpointStatNumberWidth = tmpResult.getCheckpointStatNumberWidth(end, num);
  cResult[0] = end;
  cResult[1] = num;
  cResult[2] = checkpointStatNumberWidth;
  tmp6 = checkpointStatNumberWidth;
}) : (function CheckpointCountUpStatNumber(start) {
  let num = start.start;
  if (num === undefined) {
    num = 0;
  }
  const end = start.end;
  let num2 = start.size;
  if (num2 === undefined) {
    num2 = 100;
  }
  const items = [end, num2];
  const tmp = closure_10(end, num);
  return <View style={closure_5(() => {
    let obj2;
    const obj = { width: obj2.getCheckpointStatNumberWidth(end, num2) };
    obj2 = CheckpointStatNumber;
    return obj;
  }, items)}>{jsx(num2(12996), { value: tmp, size: num2 })}</View>;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCountUpStatNumber.tsx");

export default tmp3;
