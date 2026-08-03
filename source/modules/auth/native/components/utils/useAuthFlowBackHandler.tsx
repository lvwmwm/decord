// Module ID: 14960
// Function ID: 14961
// Name: useAuthFlowBackHandler
// Dependencies: [19, 14945, 14942, 5215, 2]
// Exports: default

// Module 14960 (useAuthFlowBackHandler)
import noop from "noop";
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes";

const require = arg1;
const result = require("NavigatorWithCaptchaHook").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  const dependencyMap = React.useContext(_require(14942).TrackRegistrationContext);
  _require(5215).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: outer1_3.VIEWED });
    return false;
  });
};
