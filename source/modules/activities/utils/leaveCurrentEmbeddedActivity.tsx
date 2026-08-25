// Module ID: 10684
// Function ID: 10685
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1390, 10685, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 10684 (leaveCurrentEmbeddedActivity)
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager" /* 10685 */;
import closure_2 from "participantFromServer" /* 1390 */;

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
