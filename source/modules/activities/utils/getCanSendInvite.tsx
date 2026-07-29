// Module ID: 12377
// Function ID: 12378
// Name: getCanSendInvite
// Dependencies: [676, 10946, 6025, 10947, 10948, 10949, 2]
// Exports: getCanSendInvite

// Module 12377 (getCanSendInvite)
import ME from "ME";

let c3;
let c4;
({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (importDefault(10946)(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(6025)(findActivityResult, constants.JOIN)) {
        const partySize = require(10947) /* getPartySize */.getPartySize(findActivityResult);
        const obj = require(10947) /* getPartySize */;
        const tmp5 = require;
        const hasPartySizeResult = require(10948) /* hasPartySize */.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(10949).isPartyFull(partySize);
          const tmp5Result = tmp5(10949);
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
