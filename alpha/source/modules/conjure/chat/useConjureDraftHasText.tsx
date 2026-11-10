// Module ID: 12812
// Function ID: 12813
// Name: useConjureDraftHasText
// Dependencies: [32, 19, 12801, 2]
// Exports: default

// Module 12812 (useConjureDraftHasText)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureComposerDraftStore from "ConjureComposerDraftStore" /* 12801 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureDraftHasText.tsx");

export default function useConjureDraftHasText(arg0) {
  let closure_0;
  let tmp2;
  let tmp3;
  const f104510 = () => {
    const str = ConjureComposerDraftStore.getDraft(closure_0);
    return "" !== str.trim();
  };
  _slicedToArray = arg0;
  [tmp2, tmp3] = react.useState(f104510);
  _slicedToArray(react.useState(f104510), 2);
  const tmp4 = _slicedToArray(react.useState(arg0), 2);
  const tmp5 = tmp4[1];
  if (tmp4[0] !== arg0) {
    let str = ConjureComposerDraftStore.getDraft(arg0);
    tmp2 = "" !== str.trim();
  }
  if (tmp4[0] !== arg0) {
    tmp5(arg0);
    tmp3(tmp2);
  }
  const items = [tmp2, tmp3];
  return items;
};
