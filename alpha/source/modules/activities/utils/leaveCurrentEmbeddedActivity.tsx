// Module ID: 9022
// Function ID: 9023
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [2050, 9023, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 9022 (leaveCurrentEmbeddedActivity)
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager" /* 9023 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
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
