// Module ID: 15179
// Function ID: 15180
// Name: useAuthFlowBackHandler
// Dependencies: [19, 15164, 15161, 5337, 2]
// Exports: default

// Module 15179 (useAuthFlowBackHandler)
import noop from "noop";
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes";

const require = arg1;
const result = require("NavigatorWithCaptchaHook").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  const dependencyMap = React.useContext(_require(15161).TrackRegistrationContext);
  _require(5337).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: outer1_3.VIEWED });
    return false;
  });
};
