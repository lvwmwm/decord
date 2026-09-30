// Module ID: 15786
// Function ID: 15787
// Name: useAuthFlowBackHandler
// Dependencies: [19, 15771, 15767, 6138, 2]
// Exports: default

// Module 15786 (useAuthFlowBackHandler)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(15771).RegistrationTransitionActionTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(step) {
  _require = step;
  dependencyMap = noop.useContext(require("Auth").TrackRegistrationContext);
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    closure_1({ step, actionType: constants.VIEWED });
    return false;
  });
};
