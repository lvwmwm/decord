// Module ID: 10837
// Function ID: 84119
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1347, 10524, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 10837 (leaveCurrentEmbeddedActivity)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    let obj = importDefault(10524)();
    obj = {};
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    obj.showFeedback = false;
    obj.leaveActivity(obj);
  }
};
