// Module ID: 11028
// Function ID: 85558
// Name: getPromiseableActionHandlers
// Dependencies: [31, 11029, 33, 4372, 11033, 1935, 4506, 11036, 2]
// Exports: getPromiseableActionHandlers, openAutomodProfileQuarantineAlert, openConfirmRemoveMentionRaid, openRaidResolveModal, openSubmitFeedback

// Module 11028 (getPromiseableActionHandlers)
import "result";
import AutomodEventType from "AutomodEventType";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ AutomodActionType: closure_3, SUBMIT_FEEDBACK_MODAL_KEY: closure_4 } = AutomodEventType);
const result = require("jsxProd").fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export const getPromiseableActionHandlers = function getPromiseableActionHandlers() {
  return { [closure_3.BLOCK_MESSAGE]: null, [closure_3.FLAG_TO_CHANNEL]: null, [closure_3.USER_COMMUNICATION_DISABLED]: null };
};
export const openSubmitFeedback = function openSubmitFeedback(messageId, content, decisionId, channel) {
  let obj = importDefault(4372);
  obj = {
    onCloseModal() {
      outer1_1(outer1_2[3]).popWithKey(outer1_4);
    },
    automodDecision: obj
  };
  obj = { messageId, messageContent: content, decisionId, channel };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(11033, dependencyMap.paths), obj, closure_4);
};
export function openRaidResolveModal() {

}
export function openConfirmRemoveMentionRaid(arg0) {

}
export const openAutomodProfileQuarantineAlert = function openAutomodProfileQuarantineAlert(guildId) {
  let closure_0 = guildId;
  let obj = importDefault(4506);
  obj = {
    importer() {
      return guildId(outer1_2[5])(outer1_2[7], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = outer2_0;
          return outer3_5(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
