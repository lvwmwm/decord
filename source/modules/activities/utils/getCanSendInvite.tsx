// Module ID: 12687
// Function ID: 12688
// Name: getCanSendInvite
// Dependencies: [676, 11202, 5971, 11203, 11204, 11205, 2]
// Exports: getCanSendInvite

// Module 12687 (getCanSendInvite)
import ME from "ME";

let c3;
let c4;
({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (importDefault(11202)(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(5971)(findActivityResult, constants.JOIN)) {
        const partySize = require(11203) /* getPartySize */.getPartySize(findActivityResult);
        const obj = require(11203) /* getPartySize */;
        const tmp5 = require;
        const hasPartySizeResult = require(11204) /* hasPartySize */.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(11205).isPartyFull(partySize);
          const tmp5Result = tmp5(11205);
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
