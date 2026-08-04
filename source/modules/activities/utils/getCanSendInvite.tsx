// Module ID: 12528
// Function ID: 12529
// Name: getCanSendInvite
// Dependencies: [676, 11067, 5837, 11068, 11069, 11070, 2]
// Exports: getCanSendInvite

// Module 12528 (getCanSendInvite)
import ME from "ME";

let c3;
let c4;
({ ActivityFlags: c3, ActivityActionTypes: c4 } = ME);
const result = require("hasFlag").fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application, id1) {
  if (author.author.id === id1) {
    return false;
  } else {
    if (importDefault(11067)(findActivityResult, author, application.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(5837)(findActivityResult, constants.JOIN)) {
        const partySize = require(11068) /* getPartySize */.getPartySize(findActivityResult);
        const obj = require(11068) /* getPartySize */;
        const tmp5 = require;
        const hasPartySizeResult = require(11069) /* hasPartySize */.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(11070).isPartyFull(partySize);
          const tmp5Result = tmp5(11070);
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
