// Module ID: 10826
// Function ID: 84046
// Name: leaveCurrentEmbeddedActivity
// Dependencies: []
// Exports: leaveCurrentEmbeddedActivity

// Module 10826 (leaveCurrentEmbeddedActivity)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  const currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    let obj = importDefault(dependencyMap[1])();
    obj = {};
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    obj.showFeedback = false;
    obj.leaveActivity(obj);
  }
};
