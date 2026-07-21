// Module ID: 10902
// Function ID: 84726
// Name: getCurrentUserPresenceActivity
// Dependencies: []
// Exports: default

// Module 10902 (getCurrentUserPresenceActivity)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/utils/getCurrentUserPresenceActivity.tsx");

export default function getCurrentUserPresenceActivity(getApplicationActivity, getApplicationActivity2) {
  let tmp = null;
  if (null != arg2) {
    let applicationActivity = getApplicationActivity.getApplicationActivity(arg2);
    if (null == applicationActivity) {
      applicationActivity = getApplicationActivity2.getApplicationActivity(arg2, true);
    }
    if (null == applicationActivity) {
      const hiddenActivities = getApplicationActivity2.getHiddenActivities();
      applicationActivity = hiddenActivities.find((application_id) => application_id.application_id === arg2);
    }
    tmp = applicationActivity;
  }
  return tmp;
};
