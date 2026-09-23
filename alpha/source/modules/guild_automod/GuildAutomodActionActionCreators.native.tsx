// Module ID: 12197
// Function ID: 12198
// Name: GuildAutomodActionActionCreators
// Dependencies: [19, 12198, 21, 5030, 12202, 1980, 5194, 12205, 2]
// Exports: getPromiseableActionHandlers, openAutomodProfileQuarantineAlert, openConfirmRemoveMentionRaid, openRaidResolveModal, openSubmitFeedback

// Module 12197 (GuildAutomodActionActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5194 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(12198);
({ AutomodActionType: c3, SUBMIT_FEEDBACK_MODAL_KEY: closure_4 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export const getPromiseableActionHandlers = function getPromiseableActionHandlers() {
  return { [closure_1_3.BLOCK_MESSAGE]: null, [closure_1_3.FLAG_TO_CHANNEL]: null, [closure_1_3.USER_COMMUNICATION_DISABLED]: null };
};
export const openSubmitFeedback = function openSubmitFeedback(messageId, content, decisionId, channel) {
  const obj2 = {
    onCloseModal() {
      ModalActionCreatorsDefault.popWithKey(closure_1_4);
    },
    automodDecision: { messageId, messageContent: content, decisionId, channel }
  };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12202, dependencyMap.paths), obj2, React4);
};
export function openRaidResolveModal() {

}
export function openConfirmRemoveMentionRaid() {

}
export const openAutomodProfileQuarantineAlert = function openAutomodProfileQuarantineAlert(guildId) {
  closure_0 = guildId;
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(12205, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          return <closure_0 />;
        };
      });
    },
    isDismissable: false
  });
};
