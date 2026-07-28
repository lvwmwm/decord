// Module ID: 12355
// Function ID: 96110
// Name: getCanSendInvite
// Dependencies: [653, 10922, 6007, 10923, 10924, 10925, 2]
// Exports: getCanSendInvite

// Module 12355 (getCanSendInvite)
import ME from "ME";

let closure_3;
let closure_4;
({ ActivityFlags: closure_3, ActivityActionTypes: closure_4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(activity, author, applicationFromMessage, id1) {
  if (author.author.id === id1) {
    return false;
  } else if (importDefault(10922)(activity, author, applicationFromMessage.id)) {
    activity = author.activity;
    let type;
    if (null != activity) {
      type = activity.type;
    }
    if (type !== constants2.JOIN_REQUEST) {
      return false;
    } else if (importDefault(6007)(activity, constants.JOIN)) {
      const partySize = require(10923) /* getPartySize */.getPartySize(activity);
      const obj = require(10923) /* getPartySize */;
      let isPartyFullResult = !require(10924) /* hasPartySize */.hasPartySize(partySize);
      if (!isPartyFullResult) {
        isPartyFullResult = require(10925) /* isPartyFull */.isPartyFull(partySize);
        const obj3 = require(10925) /* isPartyFull */;
      }
      return !isPartyFullResult;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
