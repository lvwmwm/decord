// Module ID: 15879
// Function ID: 15880
// Name: useAuthFlowBackHandler
// Dependencies: [19, 15864, 558, 576, 15860, 6016, 2]

// Module 15879 (useAuthFlowBackHandler)
import RegistrationConstants from "RegistrationConstants" /* 15864 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_3 = RegistrationConstants.RegistrationTransitionActionTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((step) => {
  let context;
  _require = step;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp2 = context;
  context = react.useContext(require("Auth").TrackRegistrationContext);
  const tmp = _require;
  if (cResult[0] === step) {
    let tmp5;
    if (cResult[1] === context) {
      tmp5 = cResult[2];
    }
    const tmpResult = tmp(tmp2[5]);
    tmpResult.useNavigatorBackPressHandler(tmp5);
  }
  const fn = function o() {
    const obj = { step, actionType: constants.VIEWED };
    context(obj);
    return false;
  };
  cResult[0] = step;
  cResult[1] = context;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((step) => {
  let closure_1;
  _require = step;
  dependencyMap = react.useContext(require("Auth").TrackRegistrationContext);
  let obj = require("useNavigatorBackPressHandler");
  obj.useNavigatorBackPressHandler(() => {
    const obj = { step, actionType: constants.VIEWED };
    closure_1(obj);
    return false;
  });
});
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default tmp2;
