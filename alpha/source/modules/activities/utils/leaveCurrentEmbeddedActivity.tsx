// Module ID: 11024
// Function ID: 11025
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [2067, 11025, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 11024 (leaveCurrentEmbeddedActivity)
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 11025 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2067 */;
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
