// Module ID: 15056
// Function ID: 15057
// Name: isMostRecentDeadEndInvite
// Dependencies: [1084, 11442, 2]
// Exports: isMostRecentDeadEndInvite

// Module 15056 (isMostRecentDeadEndInvite)
import Constants from "Constants" /* 1084 */;
import isInviteActiveDefault from "isInviteActive" /* 11442 */;
import size from "module_2" /* 2 */;

const ActivityActionTypes = Constants.ActivityActionTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isMostRecentDeadEndInvite.tsx");

export function isMostRecentDeadEndInvite(id, messages, id2, applicationActivity) {
  let closure_0 = id2;
  let closure_1 = applicationActivity;
  return !messages.hasAnyAfter(id, (activity) => {
    let tmp = null != activity.activity;
    if (tmp) {
      const application = activity.application;
      let id;
      if (application != null) {
        id = application.id;
      }
      tmp = id === id2;
    }
    if (tmp) {
      tmp = activity.activity.type === ActivityActionTypes.JOIN;
    }
    if (tmp) {
      tmp = !isInviteActiveDefault(applicationActivity, activity, id2);
    }
    return tmp;
  }, 25);
}
