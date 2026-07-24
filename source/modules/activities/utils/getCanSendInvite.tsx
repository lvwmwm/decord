// Module ID: 12335
// Function ID: 96126
// Name: getCanSendInvite
// Dependencies: [653, 10933, 5689, 10934, 10935, 10936, 2]
// Exports: getCanSendInvite

// Module 12335 (getCanSendInvite)
import ME from "ME";

let closure_3;
let closure_4;
({ ActivityFlags: closure_3, ActivityActionTypes: closure_4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(activity, author, applicationFromMessage, id1) {
  if (author.author.id === id1) {
    return false;
  } else if (importDefault(10933)(activity, author, applicationFromMessage.id)) {
    activity = author.activity;
    let type;
    if (null != activity) {
      type = activity.type;
    }
    if (type !== constants2.JOIN_REQUEST) {
      return false;
    } else if (importDefault(5689)(activity, constants.JOIN)) {
      const partySize = require(10934) /* getPartySize */.getPartySize(activity);
      const obj = require(10934) /* getPartySize */;
      let isPartyFullResult = !require(10935) /* hasPartySize */.hasPartySize(partySize);
      if (!isPartyFullResult) {
        isPartyFullResult = require(10936) /* isPartyFull */.isPartyFull(partySize);
        const obj3 = require(10936) /* isPartyFull */;
      }
      return !isPartyFullResult;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
