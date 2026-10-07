// Module ID: 13074
// Function ID: 13075
// Name: getCanSendInvite
// Dependencies: [1085, 11386, 6816, 11387, 11388, 11389, 2]
// Exports: getCanSendInvite

// Module 13074 (getCanSendInvite)
import isInviteActiveDefault from "isInviteActive" /* 11386 */;
import _slicedToArray from "_slicedToArray" /* 11387 */;
import hasPartySize from "hasPartySize" /* 11388 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ActivityFlags: c3, ActivityActionTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(applicationActivity, author, application1, id4) {
  if (author.author.id === id4) {
    return false;
  } else {
    const tmp11 = importDefault;
    if (isInviteActiveDefault(applicationActivity, author, application1.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(6816)(applicationActivity, constants.JOIN)) {
        const obj = _slicedToArray;
        const partySize = obj.getPartySize(applicationActivity);
        const obj2 = hasPartySize;
        const hasPartySizeResult = obj2.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        const tmp5 = require;
        if (hasPartySizeResult) {
          const tmp5Result = tmp5(11389);
          isPartyFullResult = tmp5Result.isPartyFull(partySize);
        }
        return !isPartyFullResult;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
};
