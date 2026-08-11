// Module ID: 12628
// Function ID: 12629
// Name: getCanSendInvite
// Dependencies: [676, 11158, 5930, 11159, 11160, 11161, 2]
// Exports: getCanSendInvite

// Module 12628 (getCanSendInvite)
import ME from "ME";

let c3;
let c4;
({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (importDefault(11158)(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(5930)(findActivityResult, constants.JOIN)) {
        const partySize = require(11159) /* getPartySize */.getPartySize(findActivityResult);
        const obj = require(11159) /* getPartySize */;
        const tmp5 = require;
        const hasPartySizeResult = require(11160) /* hasPartySize */.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(11161).isPartyFull(partySize);
          const tmp5Result = tmp5(11161);
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
