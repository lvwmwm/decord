// Module ID: 14870
// Function ID: 14871
// Name: useAuthFlowBackHandler
// Dependencies: [19, 14855, 14852, 5149, 2]
// Exports: default

// Module 14870 (useAuthFlowBackHandler)
import noop from "noop";
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes";

const require = arg1;
const result = require("NavigatorWithCaptchaHook").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  const dependencyMap = React.useContext(_require(14852).TrackRegistrationContext);
  _require(5149).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: outer1_3.VIEWED });
    return false;
  });
};
