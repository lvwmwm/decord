// Module ID: 10995
// Function ID: 85558
// Name: getPromiseableActionHandlers
// Dependencies: []
// Exports: getPromiseableActionHandlers, openAutomodProfileQuarantineAlert, openConfirmRemoveMentionRaid, openRaidResolveModal, openSubmitFeedback

// Module 10995 (getPromiseableActionHandlers)
importAll(dependencyMap[0]);
({ AutomodActionType: closure_3, SUBMIT_FEEDBACK_MODAL_KEY: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_automod/GuildAutomodActionActionCreators.native.tsx");

export const getPromiseableActionHandlers = function getPromiseableActionHandlers() {
  return { [closure_3.BLOCK_MESSAGE]: null, [closure_3.FLAG_TO_CHANNEL]: null, [closure_3.USER_COMMUNICATION_DISABLED]: null };
};
export const openSubmitFeedback = function openSubmitFeedback(messageId, content, decisionId, channel) {
  let obj = importDefault(dependencyMap[3]);
  obj = {
    onCloseModal() {
      callback(closure_2[3]).popWithKey(closure_4);
    },
    automodDecision: obj
  };
  obj = { messageId, messageContent: content, decisionId, channel };
  obj.pushLazy(content(dependencyMap[5])(dependencyMap[4], dependencyMap.paths), obj, closure_4);
};
export function openRaidResolveModal() {

}
export function openConfirmRemoveMentionRaid(arg0) {

}
export const openAutomodProfileQuarantineAlert = function openAutomodProfileQuarantineAlert(guildId) {
  const arg1 = guildId;
  let obj = importDefault(dependencyMap[6]);
  obj = {
    importer() {
      return arg0(paths[5])(paths[7], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = closure_0;
          return callback(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};
