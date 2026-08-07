// Module ID: 11093
// Function ID: 11094
// Name: getCurrentUserPresenceActivity
// Dependencies: [2]
// Exports: default

// Module 11093 (getCurrentUserPresenceActivity)
const result = require("set").fileFinishedImporting("modules/activities/utils/getCurrentUserPresenceActivity.tsx");

export default function getCurrentUserPresenceActivity(getApplicationActivity, getApplicationActivity2) {
  let closure_0 = arg2;
  let tmp = null;
  if (null != arg2) {
    let applicationActivity = getApplicationActivity.getApplicationActivity(arg2);
    if (applicationActivity == null) {
      applicationActivity = getApplicationActivity2.getApplicationActivity(arg2, true);
    }
    if (applicationActivity == null) {
      const hiddenActivities = getApplicationActivity2.getHiddenActivities();
      applicationActivity = hiddenActivities.find((application_id) => application_id.application_id === closure_0);
    }
    tmp = applicationActivity;
  }
  return tmp;
};
