// Module ID: 12185
// Function ID: 93678
// Name: isMostRecentDeadEndInvite
// Dependencies: []
// Exports: isMostRecentDeadEndInvite

// Module 12185 (isMostRecentDeadEndInvite)
const ActivityActionTypes = require(dependencyMap[0]).ActivityActionTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activities/utils/isMostRecentDeadEndInvite.tsx");

export const isMostRecentDeadEndInvite = function isMostRecentDeadEndInvite(id, applicationFromMessage, id2, arg3) {
  const importDefault = id2;
  const dependencyMap = arg3;
  return !applicationFromMessage.hasAnyAfter(id, (activity) => {
    let tmp = null != activity.activity;
    if (tmp) {
      const application = activity.application;
      let id;
      if (null != application) {
        id = application.id;
      }
      tmp = id === arg2;
    }
    if (tmp) {
      tmp = activity.activity.type === constants.JOIN;
    }
    if (tmp) {
      tmp = !arg2(arg3[1])(arg3, activity, arg2);
    }
    return tmp;
  }, 25);
};
