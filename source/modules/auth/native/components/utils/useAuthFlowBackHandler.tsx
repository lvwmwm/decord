// Module ID: 14624
// Function ID: 110295
// Name: useAuthFlowBackHandler
// Dependencies: [0, 0, 0, 0, 0]
// Exports: default

// Module 14624 (useAuthFlowBackHandler)
import closure_2 from "result";
import { RegistrationTransitionActionTypes as closure_3 } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/auth/native/components/utils/useAuthFlowBackHandler.tsx");

export default function useAuthFlowBackHandler(arg0) {
  const arg1 = arg0;
  closure_1 = React.useContext(arg1(closure_1[2]).TrackRegistrationContext);
  arg1(closure_1[3]).useNavigatorBackPressHandler(() => {
    callback({ step: arg0, actionType: constants.VIEWED });
    return false;
  });
};
