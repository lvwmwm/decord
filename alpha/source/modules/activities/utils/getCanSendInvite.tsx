// Module ID: 13545
// Function ID: 13546
// Name: getCanSendInvite
// Dependencies: [1074, 12011, 7557, 12012, 12013, 12014, 2]
// Exports: getCanSendInvite

// Module 13545 (getCanSendInvite)
import isInviteActiveDefault from "isInviteActive" /* 12011 */;
import getPartySize from "getPartySize" /* 12012 */;
import hasPartySize from "hasPartySize" /* 12013 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ActivityFlags: c3, ActivityActionTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application1, id2) {
  if (author.author.id === id2) {
    return false;
  } else {
    if (isInviteActiveDefault(findActivityResult, author, application1.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(7557)(findActivityResult, constants.JOIN)) {
        const partySize = getPartySize.getPartySize(findActivityResult);
        const tmp5 = require;
        const hasPartySizeResult = hasPartySize.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(12014).isPartyFull(partySize);
          const tmp5Result = tmp5(12014);
        }
        return !isPartyFullResult;
      } else {
        return false;
      }
    } else {
      return false;
    }
    tmp11 = importDefault;
  }
};
