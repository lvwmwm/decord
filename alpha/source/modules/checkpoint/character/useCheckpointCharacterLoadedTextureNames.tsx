// Module ID: 13579
// Function ID: 13580
// Name: useCheckpointCharacterLoadedTextureNames
// Dependencies: [32, 19, 2]
// Exports: useCheckpointCharacterLoadedTextureNames

// Module 13579 (useCheckpointCharacterLoadedTextureNames)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterLoadedTextureNames.tsx");

export function useCheckpointCharacterLoadedTextureNames(memo1) {
  let tmp2;
  let tmp3;
  let closure_0 = memo1;
  [tmp2, tmp3] = react.useState(memo1);
  let closure_1 = tmp3;
  _slicedToArray(react.useState(memo1), 2);
  const tmp4 = _slicedToArray(react.useState(memo1), 2);
  const obj = react;
  if (memo1 !== tmp4[0]) {
    tmp4[1](memo1);
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(tmp2);
    const item = memo1.forEach((item) => set.add(item));
    tmp3(set);
  }
  const items = [memo1];
  const effect = obj.useEffect(() => {
    const timeout = setTimeout(() => closure_1_1(closure_0), 600);
    return () => clearTimeout(closure_0);
  }, items);
  return tmp2;
}
