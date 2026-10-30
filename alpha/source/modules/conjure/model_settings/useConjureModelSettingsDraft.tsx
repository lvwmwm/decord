// Module ID: 12471
// Function ID: 12472
// Name: useConjureModelSettingsDraft
// Dependencies: [32, 19, 2]
// Exports: default

// Module 12471 (useConjureModelSettingsDraft)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/model_settings/useConjureModelSettingsDraft.tsx");

export default function useConjureModelSettingsDraft(arg0, arg1) {
  let tmp2;
  let tmp3;
  let closure_0 = arg1;
  [tmp2, tmp3] = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp3;
  const tmp = _slicedToArray(react.useState(null), 2);
  const tmp4 = _slicedToArray(react.useState(arg0), 2);
  const obj = react;
  if (arg0 !== tmp4[0]) {
    tmp4[1](arg0);
    tmp3(null);
  }
  const items = [tmp2, ];
  const items1 = [arg1];
  items[1] = obj.useCallback((arg0) => {
    tmp3(arg0);
    closure_0(arg0);
  }, items1);
  return items;
};
