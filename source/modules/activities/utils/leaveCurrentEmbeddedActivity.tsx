// Module ID: 12606
// Function ID: 12607
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1371, 10604, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 12606 (leaveCurrentEmbeddedActivity)
import participantFromServer from "participantFromServer";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    let obj = importDefault(10604)();
    obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2[0], applicationId: obj2[1] } = currentEmbeddedActivity);
    obj.leaveActivity(obj);
  }
};
