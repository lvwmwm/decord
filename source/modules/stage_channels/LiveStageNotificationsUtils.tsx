// Module ID: 8475
// Function ID: 67615
// Name: useCanSendStageStartNotification
// Dependencies: [4051, 3758, 482, 566, 2]
// Exports: useCanSendStageStartNotification, useDefaultSendStartStageNotificationToggle

// Module 8475 (useCanSendStageStartNotification)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
const result = require("sum").fileFinishedImporting("modules/stage_channels/LiveStageNotificationsUtils.tsx");

export const useCanSendStageStartNotification = function useCanSendStageStartNotification(first) {
  const _require = first;
  const items = [closure_3];
  const items1 = [first];
  return _require(566).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_3.can(outer1_4.MENTION_EVERYONE, closure_0);
    }
    return canResult;
  }, items1);
};
export const useDefaultSendStartStageNotificationToggle = function useDefaultSendStartStageNotificationToggle(first) {
  let guild_id;
  if (null != first) {
    guild_id = first.guild_id;
  }
  const items = [_isNativeReflectConstruct];
  const items1 = [guild_id];
  const stateFromStores = guild_id(566).useStateFromStores(items, () => outer1_2.getMemberCount(guild_id), items1);
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
