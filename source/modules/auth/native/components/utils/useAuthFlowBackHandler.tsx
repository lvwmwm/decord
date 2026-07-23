// Module ID: 14747
// Function ID: 112502
// Name: useAuthFlowBackHandler
// Dependencies: [31, 14732, 14729, 5093, 2]
// Exports: default

// Module 14747 (useAuthFlowBackHandler)
import result from "result";
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes";

const require = arg1;
const result = require("getInitialAuthScreen").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  const dependencyMap = React.useContext(_require(14729).TrackRegistrationContext);
  _require(5093).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: outer1_3.VIEWED });
    return false;
  });
};
