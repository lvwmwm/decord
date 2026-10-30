// Module ID: 10906
// Function ID: 10907
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [4857, 10907, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 10906 (leaveCurrentEmbeddedActivity)
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10907 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export function leaveCurrentEmbeddedActivity() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    const obj3 = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    const obj = leaveEmbeddedActivity;
    const result = obj.leaveEmbeddedActivity(obj3);
  }
}
