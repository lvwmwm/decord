// Module ID: 14850
// Function ID: 113129
// Name: useAuthFlowBackHandler
// Dependencies: [31, 14835, 14832, 5127, 2]
// Exports: default

// Module 14850 (useAuthFlowBackHandler)
import result from "result";
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes";

const require = arg1;
const result = require("getInitialAuthScreen").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  const dependencyMap = React.useContext(_require(14832).TrackRegistrationContext);
  _require(5127).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: outer1_3.VIEWED });
    return false;
  });
};
