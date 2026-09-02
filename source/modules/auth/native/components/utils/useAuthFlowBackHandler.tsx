// Module ID: 15784
// Function ID: 15785
// Name: useAuthFlowBackHandler
// Dependencies: [19, 15769, 15765, 5509, 2]
// Exports: default

// Module 15784 (useAuthFlowBackHandler)
import closure_2 from "noop" /* 19 */;
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes" /* 15769 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  dependencyMap = React.useContext(_require(15765).TrackRegistrationContext);
  _require(5509).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: closure_1_3.VIEWED });
    return false;
  });
};
