// Module ID: 13600
// Function ID: 13601
// Name: CheckpointCountUpStatNumber
// Dependencies: [32, 19, 17, 5010, 21, 504, 13590, 2]
// Exports: default

// Module 13600 (CheckpointCountUpStatNumber)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CheckpointStatNumber from "CheckpointStatNumber" /* 13590 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ useEffect: closure_4, useMemo: hasOwnProperty, useState: metroRequire } = react);
const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCountUpStatNumber.tsx");

export default function CheckpointCountUpStatNumber(start) {
  let c3;
  let tmp4;
  let useReducedMotion;
  let num = start.start;
  if (num === undefined) {
    num = 0;
  }
  const end = start.end;
  let num2 = start.size;
  if (num2 === undefined) {
    num2 = 100;
  }
  c3 = undefined;
  let tmp = dependencyMap;
  let obj = end(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [tmp4, c3] = _slicedToArray(closure_6(num), 2);
  const items1 = [end, stateFromStores, num];
  const tmp3 = _slicedToArray(closure_6(num), 2);
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
  if (stateFromStores) {
    tmp4 = end;
  }
  const items2 = [end, num2];
  return <View style={closure_5(() => {
    let obj2;
    const obj = { width: obj2.getCheckpointStatNumberWidth(end, num2) };
    obj2 = CheckpointStatNumber;
    return obj;
  }, items2)}>{jsx(num2(13590), { value: tmp4, size: num2 })}</View>;
};
