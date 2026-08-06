// Module ID: 15011
// Function ID: 15012
// Name: useAuthFlowBackHandler
// Dependencies: [19, 14996, 14993, 5259, 2]
// Exports: default

// Module 15011 (useAuthFlowBackHandler)
import noop from "noop";
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes";

const require = arg1;
const result = require("NavigatorWithCaptchaHook").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  const dependencyMap = React.useContext(_require(14993).TrackRegistrationContext);
  _require(5259).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: outer1_3.VIEWED });
    return false;
  });
};
