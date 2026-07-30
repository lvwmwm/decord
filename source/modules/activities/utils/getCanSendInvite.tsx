// Module ID: 12371
// Function ID: 12372
// Name: getCanSendInvite
// Dependencies: [676, 10942, 6023, 10943, 10944, 10945, 2]
// Exports: getCanSendInvite

// Module 12371 (getCanSendInvite)
import ME from "ME";

let c3;
let c4;
({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (importDefault(10942)(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(6023)(findActivityResult, constants.JOIN)) {
        const partySize = require(10943) /* getPartySize */.getPartySize(findActivityResult);
        const obj = require(10943) /* getPartySize */;
        const tmp5 = require;
        const hasPartySizeResult = require(10944) /* hasPartySize */.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(10945).isPartyFull(partySize);
          const tmp5Result = tmp5(10945);
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
