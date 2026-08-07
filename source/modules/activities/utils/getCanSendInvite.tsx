// Module ID: 12552
// Function ID: 12553
// Name: getCanSendInvite
// Dependencies: [676, 11086, 5868, 11087, 11088, 11089, 2]
// Exports: getCanSendInvite

// Module 12552 (getCanSendInvite)
import ME from "ME";

let c3;
let c4;
({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (importDefault(11086)(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(5868)(findActivityResult, constants.JOIN)) {
        const partySize = require(11087) /* getPartySize */.getPartySize(findActivityResult);
        const obj = require(11087) /* getPartySize */;
        const tmp5 = require;
        const hasPartySizeResult = require(11088) /* hasPartySize */.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(11089).isPartyFull(partySize);
          const tmp5Result = tmp5(11089);
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
