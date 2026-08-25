// Module ID: 15322
// Function ID: 15323
// Name: useAuthFlowBackHandler
// Dependencies: [19, 15307, 15304, 5382, 2]
// Exports: default

// Module 15322 (useAuthFlowBackHandler)
import closure_2 from "noop" /* 19 */;
import { RegistrationTransitionActionTypes as closure_3 } from "RegistrationTransitionActionTypes" /* 15307 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const _require = arg0;
  dependencyMap = React.useContext(_require(15304).TrackRegistrationContext);
  _require(5382).useNavigatorBackPressHandler(() => {
    callback({ step: closure_0, actionType: closure_1_3.VIEWED });
    return false;
  });
};
