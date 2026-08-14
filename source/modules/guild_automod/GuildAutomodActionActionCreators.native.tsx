// Module ID: 11328
// Function ID: 11329
// Name: getPromiseableActionHandlers
// Dependencies: [19, 11329, 21, 4572, 11333, 2007, 4706, 11336, 2]
// Exports: getPromiseableActionHandlers, openAutomodProfileQuarantineAlert, openConfirmRemoveMentionRaid, openRaidResolveModal, openSubmitFeedback

// Module 11328 (getPromiseableActionHandlers)
import "noop";
import AutomodEventType from "AutomodEventType";
import { jsx } from "jsxProd";

let c3;
let c4;
const require = arg1;
({ AutomodActionType: c3, SUBMIT_FEEDBACK_MODAL_KEY: c4 } = AutomodEventType);
const result = require("jsxProd").fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export const getPromiseableActionHandlers = function getPromiseableActionHandlers() {
  return { [closure_3.BLOCK_MESSAGE]: null, [closure_3.FLAG_TO_CHANNEL]: null, [closure_3.USER_COMMUNICATION_DISABLED]: null };
};
export const openSubmitFeedback = function openSubmitFeedback(messageId, content, decisionId, channel) {
  let obj = importDefault(4572);
  obj = {
    onCloseModal() {
      callback(table[3]).popWithKey(closure_4);
    },
    automodDecision: obj
  };
  obj = { messageId, messageContent: content, decisionId, channel };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(11333, dependencyMap.paths), obj, closure_4);
};
export function openRaidResolveModal() {

}
export function openConfirmRemoveMentionRaid(arg0) {

}
export const openAutomodProfileQuarantineAlert = function openAutomodProfileQuarantineAlert(guildId) {
  let closure_0 = guildId;
  let obj = importDefault(4706);
  obj = {
    importer() {
      return guildId(outer1_2[5])(outer1_2[7], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          return outer2_5(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
