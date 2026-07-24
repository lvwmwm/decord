// Module ID: 14794
// Function ID: 112823
// Name: useAuthFlowBackHandler
// Dependencies: [31, 14779, 14776, 5093, 2]
// Exports: default

// Module 14794 (useAuthFlowBackHandler)
import result from "result";
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes";

const require = arg1;
const result = require("getInitialAuthScreen").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  const dependencyMap = React.useContext(_require(14776).TrackRegistrationContext);
  _require(5093).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: outer1_3.VIEWED });
    return false;
  });
};
