// Module ID: 18670
// Function ID: 18671
// Name: useAuthFlowBackHandler
// Dependencies: [19, 18653, 18649, 7499, 2]
// Exports: default

// Module 18670 (useAuthFlowBackHandler)
import RegistrationConstants from "RegistrationConstants" /* 18653 */;
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
