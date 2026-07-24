// Module ID: 11033
// Function ID: 85810
// Name: getPromiseableActionHandlers
// Dependencies: [31, 11034, 33, 4337, 11038, 1934, 4471, 11041, 2]
// Exports: getPromiseableActionHandlers, openAutomodProfileQuarantineAlert, openConfirmRemoveMentionRaid, openRaidResolveModal, openSubmitFeedback

// Module 11033 (getPromiseableActionHandlers)
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
  let obj = importDefault(4337);
  obj = {
    onCloseModal() {
      outer1_1(outer1_2[3]).popWithKey(outer1_4);
    },
    automodDecision: obj
  };
  obj = { messageId, messageContent: content, decisionId, channel };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(11038, dependencyMap.paths), obj, closure_4);
};
export function openRaidResolveModal() {

}
export function openConfirmRemoveMentionRaid(arg0) {

}
export const openAutomodProfileQuarantineAlert = function openAutomodProfileQuarantineAlert(guildId) {
  let closure_0 = guildId;
  let obj = importDefault(4471);
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
