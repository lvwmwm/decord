// Module ID: 13616
// Function ID: 13617
// Name: useCheckpointCharacterLoadedTextureNames
// Dependencies: [32, 19, 2]
// Exports: useCheckpointCharacterLoadedTextureNames

// Module 13616 (useCheckpointCharacterLoadedTextureNames)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterLoadedTextureNames.tsx");

export function useCheckpointCharacterLoadedTextureNames(visibleTextureNames) {
  visibleTextureNames = visibleTextureNames.visibleTextureNames;
  const requestedTextureNames = visibleTextureNames.requestedTextureNames;
  set = undefined;
  const tmp = _slicedToArray(react.useState(visibleTextureNames), 2);
  const first = tmp[0];
  let closure_3 = tmp3;
  const tmp4 = _slicedToArray(react.useState(visibleTextureNames), 2);
  if (visibleTextureNames !== tmp4[0]) {
    tmp4[1](visibleTextureNames);
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(first);
    const item = visibleTextureNames.forEach((item) => set.add(item));
    tmp[1](set);
  }
  let items = [visibleTextureNames];
  const effect = obj.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => closure_1_3(closure_0), 600);
    return () => clearTimeout(closure_0);
  }, items);
  const items1 = [first, requestedTextureNames];
  return react.useMemo(() => {
    const items = [...requestedTextureNames];
    set = new Set(items);
    return set;
  }, items1);
}
