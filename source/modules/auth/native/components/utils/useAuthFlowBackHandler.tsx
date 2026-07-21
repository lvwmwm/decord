// Module ID: 14621
// Function ID: 110263
// Name: useAuthFlowBackHandler
// Dependencies: [0, 0, 0, 0, 0]
// Exports: default

// Module 14621 (useAuthFlowBackHandler)
import __exportStarResult1 from "__exportStarResult1";
import { RegistrationTransitionActionTypes as closure_3 } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const arg1 = arg0;
  closure_1 = React.useContext(arg1(closure_1[2]).TrackRegistrationContext);
  arg1(closure_1[3]).useNavigatorBackPressHandler(() => {
    callback({ step: arg0, actionType: constants.VIEWED });
    return false;
  });
};
