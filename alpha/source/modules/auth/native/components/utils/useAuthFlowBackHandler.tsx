// Module ID: 16304
// Function ID: 16305
// Name: useAuthFlowBackHandler
// Dependencies: [19, 16289, 16285, 5849, 2]
// Exports: default

// Module 16304 (useAuthFlowBackHandler)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(16289).RegistrationTransitionActionTypes;
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
