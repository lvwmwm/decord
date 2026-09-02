// Module ID: 9481
// Function ID: 9482
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1385, 9465, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 9481 (leaveCurrentEmbeddedActivity)
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager" /* 9465 */;
import closure_2 from "participantFromServer" /* 1385 */;

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    let obj = getEmbeddedActivitiesManagerDefault();
    obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2[0], applicationId: obj2[1] } = currentEmbeddedActivity);
    obj.leaveActivity(obj);
  }
};
