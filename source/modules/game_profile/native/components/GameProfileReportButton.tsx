// Module ID: 11874
// Function ID: 91929
// Name: GameProfileReportButton
// Dependencies: [31, 33, 4099, 8418, 4338, 11875, 1935, 11875, 4544, 1212, 2]
// Exports: default

// Module 11874 (GameProfileReportButton)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("showActionSheet").fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

export default function GameProfileReportButton(applicationId) {
  applicationId = applicationId.applicationId;
  const trackAction = applicationId.trackAction;
  const items = [applicationId, trackAction];
  const callback = React.useCallback(() => {
    let obj = trackAction(outer1_2[2]);
    obj.hideActionSheet();
    trackAction(applicationId(outer1_2[3]).GameProfileTrackActionActions.Feedback);
    obj = { applicationId };
    const obj2 = trackAction(outer1_2[4]);
    obj2.pushLazy(applicationId(outer1_2[6])(outer1_2[5], outer1_2.paths), obj, applicationId(outer1_2[7]).MODAL_KEY);
  }, items);
  let obj = { variant: "secondary", size: "md" };
  const intl = applicationId(1212).intl;
  obj.text = intl.string(applicationId(1212).t.qP2cXd);
  obj.onPress = callback;
  return jsx(applicationId(4544).Button, { variant: "secondary", size: "md" });
};
