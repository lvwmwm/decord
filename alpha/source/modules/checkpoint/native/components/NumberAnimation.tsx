// Module ID: 15940
// Function ID: 15941
// Name: NumberAnimation
// Dependencies: [32, 19, 17, 5080, 5434, 21, 5091, 558, 576, 504, 15934, 4875, 2]

// Module 15940 (NumberAnimation)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CheckpointConstants from "CheckpointConstants" /* 5434 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: closure_4, useState: hasOwnProperty } = react);
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ animation: { height: 100, justifyContent: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NumberAnimation(arg0) {
  let end;
  let start;
  let stateFromStores;
  let tmp10;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let tmp = end;
  let tmp2 = stateFromStores;
  const obj = end(stateFromStores[8]);
  const cResult = obj.c(19);
  ({ start, end } = arg0);
  let num = 0;
  if (undefined !== start) {
    num = start;
  }
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class M {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = M;
    tmp5 = items;
    tmp6 = M;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[9]);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp9 = _slicedToArray(closure_5(num), 2);
  [tmp10, _slicedToArray] = tmp9;
  if (cResult[2] === end) {
    if (cResult[3] === stateFromStores) {
      let tmp11;
      let tmp12;
      let tmp16;
      let tmp18;
      let tmp20;
      if (cResult[4] === num) {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      closure_4(tmp11, tmp12);
      class M {
        constructor() {
          return closure_1_7.useReducedMotion;
        }
      }
      if (cResult[7] !== tmp10) {
        const obj2 = { DisplayValue: tmp10, TextColor: null };
        class M {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
        cResult[7] = tmp10;
        cResult[8] = obj2;
        tmp16 = obj2;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] !== end) {
        const toLocaleStringResult = end.toLocaleString();
        cResult[9] = end;
        class M {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
        cResult[10] = toLocaleStringResult;
        tmp18 = toLocaleStringResult;
      } else {
        tmp18 = cResult[10];
      }
      if (cResult[11] !== tmp18) {
        class M {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
        const tmp23 = jsx(num(tmp2[10]), { variant: "display-lg", children: null });
        cResult[11] = tmp18;
        cResult[12] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[12];
      }
      if (cResult[13] === tmp16) {
        let tmp24;
        if (cResult[14] === tmp20) {
          tmp24 = cResult[15];
        }
        if (cResult[16] === tmp4.animation) {
          let tmp27;
          if (cResult[17] === tmp24) {
            tmp27 = cResult[18];
          }
          return tmp27;
        }
        class M {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
        const tmp29 = <View style={tmp15}>{tmp24}</View>;
        cResult[16] = tmp4.animation;
        cResult[17] = tmp24;
        cResult[18] = tmp29;
        tmp27 = tmp29;
      }
      const tmp26 = jsx(tmp(tmp2[11]).CheckpointNumbersRive, { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: tmp16, fallback: tmp20 });
      cResult[13] = tmp16;
      cResult[14] = tmp20;
      cResult[15] = tmp26;
      tmp24 = tmp26;
    }
  }
  class C {
    constructor() {
      tmp = closure_2;
      if (tmp) {
        return;
      } else {
        tmp2 = globalThis;
        _Date = Date;
        closure_0 = Date.now();
        _setInterval = setInterval;
        num = 32;
        closure_1 = setInterval(() => { /* body not rendered: F146857 */ }, 32);
        return () => { /* body not rendered: F146858 */ };
      }
    }
  }
  const items1 = [end, stateFromStores, num];
  cResult[2] = end;
  cResult[3] = stateFromStores;
  cResult[4] = num;
  cResult[5] = C;
  cResult[6] = items1;
  tmp12 = items1;
  tmp11 = C;
}) : (function NumberAnimation(start) {
  let c3;
  let tmp6;
  let useReducedMotion;
  let num = start.start;
  if (num === undefined) {
    num = 0;
  }
  const end = start.end;
  let stateFromStores;
  _slicedToArray = undefined;
  let tmp = closure_10();
  let tmp2 = num;
  const items = [AccessibilityStore];
  const obj = num(stateFromStores[9]);
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [tmp6, c3] = _slicedToArray(closure_5(num), 2);
  const tmp5 = _slicedToArray(closure_5(num), 2);
  if (stateFromStores) {
    tmp6 = end;
  }
  const items1 = [end, stateFromStores, num];
  closure_4(() => {
    let closure_1;
    const tmp = stateFromStores;
    if (!tmp) {
      let tmp2 = globalThis;
      const _Date = Date;
      let closure_0 = Date.now();
      const _setInterval = setInterval;
      num = 32;
      const interval = setInterval(() => {
        let rounded;
        const bound = Math.min((Date.now() - closure_0) / 500, 1);
        const tmp2 = c3;
        if (1 === bound) {
          rounded = end;
        } else {
          const _Math = Math;
          rounded = Math.round((end - num) * bound + num);
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
  const obj4 = { DisplayValue: tmp6, TextColor: CHECKPOINT_PRIMARY };
  const CheckpointNumbersRive = tmp2(tmp3[11]).CheckpointNumbersRive;
  ({ variant: "display-lg", children: end.toLocaleString() });
  end(stateFromStores[10]);
  return <View style={tmp.animation}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/NumberAnimation.tsx");

export default tmp3;
