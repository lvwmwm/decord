// Module ID: 12546
// Function ID: 97068
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1347, 10545, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 12546 (leaveCurrentEmbeddedActivity)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    let obj = importDefault(10545)();
    obj = {};
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    obj.showFeedback = false;
    obj.leaveActivity(obj);
  }
};
