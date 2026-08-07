// Module ID: 12129
// Function ID: 12130
// Name: GameProfileReportButton
// Dependencies: [19, 21, 4270, 9218, 4507, 12130, 1988, 12130, 4712, 1236, 2]
// Exports: default

// Module 12129 (GameProfileReportButton)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/game_profile/native/components/GameProfileReportButton.tsx");

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
  let obj = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl = applicationId(1236).intl;
  obj[2] = intl.string(applicationId(1236).t.qP2cXd);
  obj[3] = callback;
  return jsx(applicationId(4712).Button, { variant: "secondary", size: "md", text: null, onPress: null });
};
