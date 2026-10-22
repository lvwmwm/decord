// Module ID: 10746
// Function ID: 10747
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [4820, 10747, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 10746 (leaveCurrentEmbeddedActivity)
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10747 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
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
