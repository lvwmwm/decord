// Module ID: 10228
// Function ID: 79018
// Name: computeThreadNotificationSetting
// Dependencies: [1348, 4325, 3760, 1211, 653, 1360, 566, 2]
// Exports: useThreadNotificationSetting

// Module 10228 (computeThreadNotificationSetting)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { ThreadMemberFlags } from "AbortCodes";
import { UserNotificationSettings } from "ME";

const require = arg1;
function computeThreadNotificationSetting(channel) {
  let obj = arg1;
  let obj2 = arg2;
  let obj3 = arg3;
  if (arg1 === undefined) {
    obj = closure_4;
  }
  if (obj2 === undefined) {
    obj2 = closure_3;
  }
  if (obj3 === undefined) {
    obj3 = _isNativeReflectConstruct;
  }
  const flagsResult = obj.flags(channel.id);
  if (null == flagsResult) {
    return ThreadMemberFlags.NO_MESSAGES;
  } else {
    if (obj6.hasFlag(flagsResult, ThreadMemberFlags.ALL_MESSAGES)) {
      return ThreadMemberFlags.ALL_MESSAGES;
    } else {
      if (obj4.hasFlag(flagsResult, ThreadMemberFlags.ONLY_MENTIONS)) {
        return ThreadMemberFlags.ONLY_MENTIONS;
      } else {
        if (obj5.hasFlag(flagsResult, ThreadMemberFlags.NO_MESSAGES)) {
          return ThreadMemberFlags.NO_MESSAGES;
        } else {
          channel = obj3.getChannel(channel.parent_id);
          if (null == channel) {
            return ThreadMemberFlags.NO_MESSAGES;
          } else if (obj2.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id)) {
            return ThreadMemberFlags.NO_MESSAGES;
          } else {
            const result = obj2.resolvedMessageNotifications(channel);
            if (result === UserNotificationSettings.NO_MESSAGES) {
              let ALL_MESSAGES = ThreadMemberFlags.NO_MESSAGES;
            } else if (result === UserNotificationSettings.ONLY_MENTIONS) {
              ALL_MESSAGES = ThreadMemberFlags.ONLY_MENTIONS;
            } else {
              ALL_MESSAGES = ThreadMemberFlags.ALL_MESSAGES;
            }
            return ALL_MESSAGES;
          }
        }
        obj5 = require(1360) /* hasFlag */;
      }
      obj4 = require(1360) /* hasFlag */;
    }
    obj6 = require(1360) /* hasFlag */;
  }
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = function useThreadNotificationSetting(channel) {
  const _require = channel;
  const items = [closure_4, closure_3, _isNativeReflectConstruct];
  const items1 = [channel];
  return _require(566).useStateFromStores(items, () => outer1_7(closure_0), items1);
};
