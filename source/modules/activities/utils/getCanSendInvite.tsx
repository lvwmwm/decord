// Module ID: 13165
// Function ID: 13166
// Name: getCanSendInvite
// Dependencies: [673, 11686, 7251, 11687, 11688, 11689, 2]
// Exports: getCanSendInvite

// Module 13165 (getCanSendInvite)
import set from "set" /* 2 */;
import resultDefault from "result" /* 11686 */;
import getPartySize from "getPartySize" /* 11687 */;
import hasPartySize from "hasPartySize" /* 11688 */;
import ME from "ME" /* 673 */;

({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = set.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (resultDefault(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(7251)(findActivityResult, constants.JOIN)) {
        const partySize = getPartySize.getPartySize(findActivityResult);
        const obj = getPartySize;
        const tmp5 = require;
        const hasPartySizeResult = hasPartySize.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(11689).isPartyFull(partySize);
          const tmp5Result = tmp5(11689);
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
