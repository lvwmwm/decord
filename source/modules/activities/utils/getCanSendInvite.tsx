// Module ID: 12190
// Function ID: 93697
// Name: getCanSendInvite
// Dependencies: []
// Exports: getCanSendInvite

// Module 12190 (getCanSendInvite)
const _module = require(dependencyMap[0]);
({ ActivityFlags: closure_3, ActivityActionTypes: closure_4 } = _module);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(activity, author, applicationFromMessage, id1) {
  if (author.author.id === id1) {
    return false;
  } else if (importDefault(dependencyMap[1])(activity, author, applicationFromMessage.id)) {
    activity = author.activity;
    let type;
    if (null != activity) {
      type = activity.type;
    }
    if (type !== constants2.JOIN_REQUEST) {
      return false;
    } else if (importDefault(dependencyMap[2])(activity, constants.JOIN)) {
      const partySize = require(dependencyMap[3]).getPartySize(activity);
      const obj = require(dependencyMap[3]);
      let isPartyFullResult = !require(dependencyMap[4]).hasPartySize(partySize);
      if (!isPartyFullResult) {
        isPartyFullResult = require(dependencyMap[5]).isPartyFull(partySize);
        const obj3 = require(dependencyMap[5]);
      }
      return !isPartyFullResult;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
