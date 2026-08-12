// Module ID: 10657
// Function ID: 10658
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1390, 10658, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 10657 (leaveCurrentEmbeddedActivity)
import participantFromServer from "participantFromServer";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    let obj = importDefault(10658)();
    obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2[0], applicationId: obj2[1] } = currentEmbeddedActivity);
    obj.leaveActivity(obj);
  }
};
