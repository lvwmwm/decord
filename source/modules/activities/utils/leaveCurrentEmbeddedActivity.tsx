// Module ID: 12590
// Function ID: 97243
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1347, 10584, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 12590 (leaveCurrentEmbeddedActivity)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    let obj = importDefault(10584)();
    obj = {};
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    obj.showFeedback = false;
    obj.leaveActivity(obj);
  }
};
