// Module ID: 18281
// Function ID: 18282
// Name: useAuthFlowBackHandler
// Dependencies: [19, 18264, 18260, 7095, 2]
// Exports: default

// Module 18281 (useAuthFlowBackHandler)
import RegistrationConstants from "RegistrationConstants" /* 18264 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_3 = RegistrationConstants.RegistrationTransitionActionTypes;
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(step) {
  let closure_1;
  _require = step;
  dependencyMap = react.useContext(require("Auth").TrackRegistrationContext);
  let obj = require("useNavigatorBackPressHandler");
  obj.useNavigatorBackPressHandler(() => {
    const obj = { step, actionType: constants.VIEWED };
    closure_1(obj);
    return false;
  });
};
