// Module ID: 10571
// Function ID: 10572
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1390, 10572, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 10571 (leaveCurrentEmbeddedActivity)
import participantFromServer from "participantFromServer";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    let obj = importDefault(10572)();
    obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2[0], applicationId: obj2[1] } = currentEmbeddedActivity);
    obj.leaveActivity(obj);
  }
};
