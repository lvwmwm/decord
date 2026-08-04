// Module ID: 10893
// Function ID: 10894
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1371, 10537, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 10893 (leaveCurrentEmbeddedActivity)
import participantFromServer from "participantFromServer";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    let obj = importDefault(10537)();
    obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2[0], applicationId: obj2[1] } = currentEmbeddedActivity);
    obj.leaveActivity(obj);
  }
};
