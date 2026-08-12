// Module ID: 15165
// Function ID: 15166
// Name: useAuthFlowBackHandler
// Dependencies: [19, 15150, 15147, 5315, 2]
// Exports: default

// Module 15165 (useAuthFlowBackHandler)
import noop from "noop";
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes";

const require = arg1;
const result = require("NavigatorWithCaptchaHook").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  const dependencyMap = React.useContext(_require(15147).TrackRegistrationContext);
  _require(5315).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: outer1_3.VIEWED });
    return false;
  });
};
