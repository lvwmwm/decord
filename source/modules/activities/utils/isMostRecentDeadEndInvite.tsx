// Module ID: 12337
// Function ID: 96130
// Name: isMostRecentDeadEndInvite
// Dependencies: [653, 10933, 2]
// Exports: isMostRecentDeadEndInvite

// Module 12337 (isMostRecentDeadEndInvite)
import { ActivityActionTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isMostRecentDeadEndInvite.tsx");

export const isMostRecentDeadEndInvite = function isMostRecentDeadEndInvite(id, applicationFromMessage, id2, arg3) {
  let closure_0 = id2;
  let closure_1 = arg3;
  return !applicationFromMessage.hasAnyAfter(id, (activity) => {
    let tmp = null != activity.activity;
    if (tmp) {
      const application = activity.application;
      let id;
      if (null != application) {
        id = application.id;
      }
      tmp = id === id2;
    }
    if (tmp) {
      tmp = activity.activity.type === outer1_2.JOIN;
    }
    if (tmp) {
      tmp = !id2(table[1])(table, activity, id2);
    }
    return tmp;
  }, 25);
};
