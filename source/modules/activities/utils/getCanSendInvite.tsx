// Module ID: 12500
// Function ID: 12501
// Name: getCanSendInvite
// Dependencies: [676, 11039, 5822, 11040, 11041, 11042, 2]
// Exports: getCanSendInvite

// Module 12500 (getCanSendInvite)
import ME from "ME";

let c3;
let c4;
({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (importDefault(11039)(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(5822)(findActivityResult, constants.JOIN)) {
        const partySize = require(11040) /* getPartySize */.getPartySize(findActivityResult);
        const obj = require(11040) /* getPartySize */;
        const tmp5 = require;
        const hasPartySizeResult = require(11041) /* hasPartySize */.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(11042).isPartyFull(partySize);
          const tmp5Result = tmp5(11042);
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
