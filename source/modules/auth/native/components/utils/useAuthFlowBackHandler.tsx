// Module ID: 15484
// Function ID: 15485
// Name: useAuthFlowBackHandler
// Dependencies: [19, 15469, 15466, 5466, 2]
// Exports: default

// Module 15484 (useAuthFlowBackHandler)
import closure_2 from "noop" /* 19 */;
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes" /* 15469 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  dependencyMap = React.useContext(_require(15466).TrackRegistrationContext);
  _require(5466).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: closure_1_3.VIEWED });
    return false;
  });
};
