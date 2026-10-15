// Module ID: 10952
// Function ID: 10953
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [2064, 10953, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 10952 (leaveCurrentEmbeddedActivity)
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10953 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
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
