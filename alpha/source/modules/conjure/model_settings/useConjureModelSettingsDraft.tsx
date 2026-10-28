// Module ID: 12256
// Function ID: 12257
// Name: useConjureModelSettingsDraft
// Dependencies: [32, 19, 558, 576, 2]

// Module 12256 (useConjureModelSettingsDraft)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureModelSettingsDraft(arg0, arg1) {
  let tmp3;
  let tmp4;
  let tmp8;
  let closure_0 = arg1;
  const obj = react2;
  const cResult = obj.c(5);
  [tmp3, tmp4] = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp4;
  const tmp2 = _slicedToArray(react.useState(null), 2);
  const tmp5 = _slicedToArray(react.useState(arg0), 2);
  if (arg0 !== tmp5[0]) {
    tmp5[1](arg0);
    tmp4(null);
  }
  if (cResult[0] !== arg1) {
    const fn = function s(arg0) {
      tmp4(arg0);
      closure_0(arg0);
    };
    cResult[0] = arg1;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    let tmp9;
    if (cResult[3] === tmp8) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const items = [tmp3, tmp8];
  cResult[2] = tmp3;
  cResult[3] = tmp8;
  cResult[4] = items;
  tmp9 = items;
}) : (function useConjureModelSettingsDraft(arg0, arg1) {
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
});
const result = size.fileFinishedImporting("modules/conjure/model_settings/useConjureModelSettingsDraft.tsx");

export default tmp2;
