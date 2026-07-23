// Module ID: 12308
// Function ID: 95886
// Name: getCanSendInvite
// Dependencies: [653, 10906, 5689, 10907, 10908, 10909, 2]
// Exports: getCanSendInvite

// Module 12308 (getCanSendInvite)
import ME from "ME";

let closure_3;
let closure_4;
({ ActivityFlags: closure_3, ActivityActionTypes: closure_4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(activity, author, applicationFromMessage, id1) {
  if (author.author.id === id1) {
    return false;
  } else if (importDefault(10906)(activity, author, applicationFromMessage.id)) {
    activity = author.activity;
    let type;
    if (null != activity) {
      type = activity.type;
    }
    if (type !== constants2.JOIN_REQUEST) {
      return false;
    } else if (importDefault(5689)(activity, constants.JOIN)) {
      const partySize = require(10907) /* getPartySize */.getPartySize(activity);
      const obj = require(10907) /* getPartySize */;
      let isPartyFullResult = !require(10908) /* hasPartySize */.hasPartySize(partySize);
      if (!isPartyFullResult) {
        isPartyFullResult = require(10909) /* isPartyFull */.isPartyFull(partySize);
        const obj3 = require(10909) /* isPartyFull */;
      }
      return !isPartyFullResult;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
