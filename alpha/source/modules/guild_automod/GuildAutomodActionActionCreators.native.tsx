// Module ID: 12308
// Function ID: 12309
// Name: GuildAutomodActionActionCreators
// Dependencies: [19, 12309, 21, 6308, 12313, 2121, 5740, 12316, 2]
// Exports: getPromiseableActionHandlers, openAutomodProfileQuarantineAlert, openConfirmRemoveMentionRaid, openRaidResolveModal, openSubmitFeedback

// Module 12308 (GuildAutomodActionActionCreators)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5740 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 12309 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ AutomodActionType: c3, SUBMIT_FEEDBACK_MODAL_KEY: closure_4 } = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export function getPromiseableActionHandlers() {
  return { [closure_1_3.BLOCK_MESSAGE]: null, [closure_1_3.FLAG_TO_CHANNEL]: null, [closure_1_3.USER_COMMUNICATION_DISABLED]: null };
}
export function openSubmitFeedback(messageId, content, decisionId, channel) {
  let obj3;
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onCloseModal: function handleClose() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_1_4);
    },
    automodDecision: obj3
  };
  obj3 = { messageId, messageContent: content, decisionId, channel };
  obj.pushLazy(asyncRequire(12313, dependencyMap.paths), obj2, React3);
}
export function openRaidResolveModal() {

}
export function openConfirmRemoveMentionRaid() {

}
export function openAutomodProfileQuarantineAlert(guildId) {
  let closure_0 = guildId;
  const obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      const promise = asyncRequire(12316, dependencyMap.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return <closure_0 guildId={guildId} />;
        };
      });
    },
    isDismissable: false
  };
  obj.openLazy(obj2);
}
