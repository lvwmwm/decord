// Module ID: 15137
// Function ID: 15138
// Name: isMostRecentDeadEndInvite
// Dependencies: [1072, 11679, 2]
// Exports: isMostRecentDeadEndInvite

// Module 15137 (isMostRecentDeadEndInvite)
import Constants from "Constants" /* 1072 */;
import isInviteActiveDefault from "isInviteActive" /* 11679 */;
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
