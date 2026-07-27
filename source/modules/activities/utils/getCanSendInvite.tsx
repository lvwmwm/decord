// Module ID: 12312
// Function ID: 95940
// Name: getCanSendInvite
// Dependencies: [653, 10884, 5973, 10885, 10886, 10887, 2]
// Exports: getCanSendInvite

// Module 12312 (getCanSendInvite)
import ME from "ME";

let closure_3;
let closure_4;
({ ActivityFlags: closure_3, ActivityActionTypes: closure_4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(activity, author, applicationFromMessage, id1) {
  if (author.author.id === id1) {
    return false;
  } else if (importDefault(10884)(activity, author, applicationFromMessage.id)) {
    activity = author.activity;
    let type;
    if (null != activity) {
      type = activity.type;
    }
    if (type !== constants2.JOIN_REQUEST) {
      return false;
    } else if (importDefault(5973)(activity, constants.JOIN)) {
      const partySize = require(10885) /* getPartySize */.getPartySize(activity);
      const obj = require(10885) /* getPartySize */;
      let isPartyFullResult = !require(10886) /* hasPartySize */.hasPartySize(partySize);
      if (!isPartyFullResult) {
        isPartyFullResult = require(10887) /* isPartyFull */.isPartyFull(partySize);
        const obj3 = require(10887) /* isPartyFull */;
      }
      return !isPartyFullResult;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
