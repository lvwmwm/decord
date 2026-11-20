// Module ID: 17342
// Function ID: 17343
// Name: useAuthFlowBackHandler
// Dependencies: [19, 17325, 17321, 6981, 2]
// Exports: default

// Module 17342 (useAuthFlowBackHandler)
import RegistrationConstants from "RegistrationConstants" /* 17325 */;
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
