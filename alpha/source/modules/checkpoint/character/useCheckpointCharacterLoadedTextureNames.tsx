// Module ID: 13197
// Function ID: 13198
// Name: useCheckpointCharacterLoadedTextureNames
// Dependencies: [32, 19, 558, 576, 2]

// Module 13197 (useCheckpointCharacterLoadedTextureNames)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckpointCharacterLoadedTextureNames(arr) {
  let tmp13;
  let tmp14;
  let tmp3;
  let tmp4;
  let closure_0 = arr;
  const obj = react2;
  const cResult = obj.c(3);
  [tmp3, tmp4] = react.useState(arr);
  let closure_1 = tmp4;
  _slicedToArray(react.useState(arr), 2);
  const tmp5 = _slicedToArray(react.useState(arr), 2);
  const obj2 = react;
  if (arr !== tmp5[0]) {
    tmp5[1](arr);
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(tmp3);
    const item = arr.forEach((item) => set.add(item));
    tmp4(set);
  }
  if (cResult[0] !== arr) {
    const fn = function o() {
      const timeout = setTimeout(() => closure_1_1(closure_0), 600);
      return () => clearTimeout(closure_0);
    };
    const items = [arr];
    cResult[0] = arr;
    cResult[1] = fn;
    cResult[2] = items;
    tmp14 = items;
    tmp13 = fn;
  } else {
    tmp13 = cResult[1];
    tmp14 = cResult[2];
  }
  const effect = obj2.useEffect(tmp13, tmp14);
  return tmp3;
}) : (function useCheckpointCharacterLoadedTextureNames(arr) {
  let tmp2;
  let tmp3;
  let closure_0 = arr;
  [tmp2, tmp3] = react.useState(arr);
  let closure_1 = tmp3;
  _slicedToArray(react.useState(arr), 2);
  const tmp4 = _slicedToArray(react.useState(arr), 2);
  const obj = react;
  if (arr !== tmp4[0]) {
    tmp4[1](arr);
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(tmp2);
    const item = arr.forEach((item) => set.add(item));
    tmp3(set);
  }
  const items = [arr];
  const effect = obj.useEffect(() => {
    const timeout = setTimeout(() => closure_1_1(closure_0), 600);
    return () => clearTimeout(closure_0);
  }, items);
  return tmp2;
});
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterLoadedTextureNames.tsx");

export const useCheckpointCharacterLoadedTextureNames = tmp2;
