// Module ID: 12784
// Function ID: 12785
// Name: getCanSendInvite
// Dependencies: [676, 10917, 7260, 10918, 10919, 10920, 2]
// Exports: getCanSendInvite

// Module 12784 (getCanSendInvite)
import ME from "ME";

let c3;
let c4;
({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (importDefault(10917)(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(7260)(findActivityResult, constants.JOIN)) {
        const partySize = require(10918) /* getPartySize */.getPartySize(findActivityResult);
        const obj = require(10918) /* getPartySize */;
        const tmp5 = require;
        const hasPartySizeResult = require(10919) /* hasPartySize */.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(10920).isPartyFull(partySize);
          const tmp5Result = tmp5(10920);
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
