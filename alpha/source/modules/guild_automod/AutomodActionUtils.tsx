// Module ID: 19552
// Function ID: 19553
// Name: AutomodActionUtils
// Dependencies: [13091, 19549, 1385, 2]
// Exports: getDefaultActions, getRuleActionsInOrder, getRuleDefaultActionsFromConfig, isActionBlockMessage, isActionFlagToChannel, isActionQuarantineUser, isActionUserCommunicationDisabled, setRuleAction

// Module 19552 (AutomodActionUtils)
import GlobalUtils from "GlobalUtils" /* 1385 */;
import Constants from "Constants" /* 13091 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 19549 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/AutomodActionUtils.tsx");

export function getRuleDefaultActionsFromConfig(defaultActionTypes) {
  let closure_0 = { [closure_1_2.BLOCK_MESSAGE]: { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: "r" } }, [closure_1_2.FLAG_TO_CHANNEL]: { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: "r" } }, [closure_1_2.USER_COMMUNICATION_DISABLED]: { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } }, [closure_1_2.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
  const arr = Array.from(defaultActionTypes.defaultActionTypes);
  return arr.map((item) => closure_0[item]);
}
export function getRuleActionsInOrder(rule) {
  let closure_0 = rule;
  const obj = AutomodTriggerConfigs;
  const availableActionTypes = obj.getAvailableActionTypes(rule.triggerType);
  const mapped = availableActionTypes.map((item) => {
    actions = item;
    actions = actions.actions;
    return actions.find((type) => type.type === closure_0);
  });
  return mapped.filter(GlobalUtils.isNotNullish);
}
export function setRuleAction(rule, BLOCK_MESSAGE, arg2) {
  let tmp4;
  let closure_0 = BLOCK_MESSAGE;
  const actions = rule.actions;
  const found = actions.filter((type) => type.type !== BLOCK_MESSAGE);
  const obj = { actions: tmp4 };
  const merged = Object.assign(rule);
  tmp4 = found;
  if (null != arg2) {
    const items = [];
    items[HermesBuiltin.arraySpread(items, found, 0)] = arg2;
    tmp4 = items;
  }
  return obj;
}
export function isActionFlagToChannel(type) {
  return type.type === AutomodActionType.FLAG_TO_CHANNEL;
}
export function isActionUserCommunicationDisabled(type) {
  return type.type === AutomodActionType.USER_COMMUNICATION_DISABLED;
}
export function isActionBlockMessage(type) {
  return type.type === AutomodActionType.BLOCK_MESSAGE;
}
export function isActionQuarantineUser(type) {
  return type.type === AutomodActionType.QUARANTINE_USER;
}
export function getDefaultActions() {
  return { [closure_1_2.BLOCK_MESSAGE]: { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: "r" } }, [closure_1_2.FLAG_TO_CHANNEL]: { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: "r" } }, [closure_1_2.USER_COMMUNICATION_DISABLED]: { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } }, [closure_1_2.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
}
