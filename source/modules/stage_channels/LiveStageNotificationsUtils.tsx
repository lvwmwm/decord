// Module ID: 8468
// Function ID: 67555
// Name: useCanSendStageStartNotification
// Dependencies: []
// Exports: useCanSendStageStartNotification, useDefaultSendStartStageNotificationToggle

// Module 8468 (useCanSendStageStartNotification)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const Permissions = arg1(dependencyMap[2]).Permissions;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/stage_channels/LiveStageNotificationsUtils.tsx");

export const useCanSendStageStartNotification = function useCanSendStageStartNotification(first) {
  const arg1 = first;
  const items = [closure_3];
  const items1 = [first];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let canResult = null != arg0;
    if (canResult) {
      canResult = closure_3.can(constants.MENTION_EVERYONE, arg0);
    }
    return canResult;
  }, items1);
};
export const useDefaultSendStartStageNotificationToggle = function useDefaultSendStartStageNotificationToggle(first) {
  let guild_id;
  if (null != first) {
    guild_id = first.guild_id;
  }
  const arg1 = guild_id;
  const items = [closure_2];
  const items1 = [guild_id];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => memberCount.getMemberCount(guild_id), items1);
  let tmp3 = null == first;
  if (!tmp3) {
    let tmp4 = null == stateFromStores;
    if (!tmp4) {
      tmp4 = stateFromStores > 50000;
    }
    tmp3 = !tmp4;
  }
  return tmp3;
};
