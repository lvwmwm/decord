// Module ID: 16117
// Function ID: 124255
// Name: getDefaultActions
// Dependencies: []
// Exports: getRuleDefaultActionsFromConfig, isActionBlockMessage, isActionFlagToChannel, isActionQuarantineUser, isActionUserCommunicationDisabled

// Module 16117 (getDefaultActions)
function getDefaultActions() {
  let obj = { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: undefined } };
  obj = { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: undefined } };
  obj = { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } };
  return { [closure_0.BLOCK_MESSAGE]: obj, [closure_0.FLAG_TO_CHANNEL]: obj, [closure_0.USER_COMMUNICATION_DISABLED]: obj, [closure_0.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
}
const AutomodActionType = require(dependencyMap[0]).AutomodActionType;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_automod/AutomodActionUtils.tsx");

export const getRuleDefaultActionsFromConfig = function getRuleDefaultActionsFromConfig(defaultActionTypes) {
  let closure_0 = getDefaultActions();
  return Array.from(defaultActionTypes.defaultActionTypes).map((arg0) => closure_0[arg0]);
};
export const isActionFlagToChannel = function isActionFlagToChannel(type) {
  return type.type === AutomodActionType.FLAG_TO_CHANNEL;
};
export const isActionUserCommunicationDisabled = function isActionUserCommunicationDisabled(type) {
  return type.type === AutomodActionType.USER_COMMUNICATION_DISABLED;
};
export const isActionBlockMessage = function isActionBlockMessage(type) {
  return type.type === AutomodActionType.BLOCK_MESSAGE;
};
export const isActionQuarantineUser = function isActionQuarantineUser(type) {
  return type.type === AutomodActionType.QUARANTINE_USER;
};
export { getDefaultActions };
