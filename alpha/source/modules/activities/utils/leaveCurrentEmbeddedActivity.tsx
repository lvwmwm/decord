// Module ID: 10776
// Function ID: 10777
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [2063, 10777, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 10776 (leaveCurrentEmbeddedActivity)
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10777 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    const obj3 = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    const obj = leaveEmbeddedActivity;
    const result = obj.leaveEmbeddedActivity(obj3);
  }
};
