// Module ID: 10621
// Function ID: 10622
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [2062, 10622, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 10621 (leaveCurrentEmbeddedActivity)
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager" /* 10622 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    const obj3 = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    const obj = getEmbeddedActivitiesManagerDefault();
    obj.leaveActivity(obj3);
  }
};
