// Module ID: 14505
// Function ID: 14506
// Name: CheckpointCountUpStatNumber
// Dependencies: [32, 19, 17, 5307, 21, 504, 14506, 14479, 2]
// Exports: default

// Module 14505 (CheckpointCountUpStatNumber)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CheckpointStatNumber from "CheckpointStatNumber" /* 14479 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import size_mod from "module_2" /* 2 */;

const CheckpointStatNumberDefault = CheckpointStatNumber;
let importDefault;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ useEffect: closure_4, useMemo: hasOwnProperty, useState: metroRequire } = react);
const View = react_native.View;
const jsx = Fragment.jsx;
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCountUpStatNumber.tsx");

export default function CheckpointCountUpStatNumber(start) {
  let c1;
  let c3;
  let end;
  let tmp5;
  let tmpResult2;
  let useReducedMotion;
  let num = start.start;
  if (num === undefined) {
    num = 0;
  }
  ({ end, size } = start);
  if (size === undefined) {
    size = 100;
  }
  importDefault = undefined;
  c3 = undefined;
  let tmp = size;
  let tmp2 = dependencyMap;
  let obj = size(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [tmp5, c3] = _slicedToArray(closure_6(num), 2);
  const items1 = [end, stateFromStores, num];
  const tmp4 = _slicedToArray(closure_6(num), 2);
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
    tmp5 = end;
  }
  const tmpResult = tmp(14506);
  const result = tmpResult.formatCheckpointStatNumber(end);
  importDefault = result;
  const items2 = [result, size];
  ({ value: tmpResult2.formatCheckpointStatNumber(tmp5), size });
  CheckpointStatNumberDefault;
  tmpResult2 = tmp(14506);
  return <View style={closure_5(() => {
    let obj2;
    const obj = { width: obj2.getCheckpointStatNumberWidth(c1, size) };
    obj2 = CheckpointStatNumber;
    return obj;
  }, items2)}>{null}</View>;
};
