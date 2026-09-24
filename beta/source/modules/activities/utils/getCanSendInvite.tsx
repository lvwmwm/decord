// Module ID: 13576
// Function ID: 13577
// Name: getCanSendInvite
// Dependencies: [1078, 11918, 7589, 11919, 11920, 11921, 2]
// Exports: getCanSendInvite

// Module 13576 (getCanSendInvite)
import isInviteActiveDefault from "isInviteActive" /* 11918 */;
import getPartySize from "getPartySize" /* 11919 */;
import hasPartySize from "hasPartySize" /* 11920 */;
import Constants from "Constants" /* 1078 */;
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
      } else if (tmp11(7589)(findActivityResult, constants.JOIN)) {
        const partySize = getPartySize.getPartySize(findActivityResult);
        const tmp5 = require;
        const hasPartySizeResult = hasPartySize.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(11921).isPartyFull(partySize);
          const tmp5Result = tmp5(11921);
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
