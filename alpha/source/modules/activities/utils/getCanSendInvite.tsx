// Module ID: 14376
// Function ID: 14377
// Name: getCanSendInvite
// Dependencies: [1087, 11233, 7358, 11235, 11236, 11237, 2]
// Exports: getCanSendInvite

// Module 14376 (getCanSendInvite)
import isInviteActiveDefault from "isInviteActive" /* 11233 */;
import _slicedToArray from "_slicedToArray" /* 11235 */;
import hasPartySize from "hasPartySize" /* 11236 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ActivityFlags: c3, ActivityActionTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(applicationActivity, author, application1, id3) {
  if (author.author.id === id3) {
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
      } else if (tmp11(7358)(applicationActivity, constants.JOIN)) {
        const obj = _slicedToArray;
        const partySize = obj.getPartySize(applicationActivity);
        const obj2 = hasPartySize;
        const hasPartySizeResult = obj2.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        const tmp5 = require;
        if (hasPartySizeResult) {
          const tmp5Result = tmp5(11237);
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
