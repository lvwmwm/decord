// Module ID: 9548
// Function ID: 9549
// Name: ThreadNotificationSettings
// Dependencies: [2045, 5017, 4471, 1114, 1074, 1385, 504, 2]
// Exports: useThreadNotificationSetting

// Module 9548 (ThreadNotificationSettings)
import Constants from "Constants" /* 1074 */;
import ThreadConstants from "ThreadConstants" /* 1114 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4471 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function computeThreadNotificationSetting(channel) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = JoinedThreadsStore;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = UserGuildSettingsStore;
  }
  let obj3 = arg3;
  if (arg3 === undefined) {
    obj3 = ChannelStore;
  }
  const flagsResult = obj.flags(channel.id);
  if (null == flagsResult) {
    return ThreadMemberFlags.NO_MESSAGES;
  } else {
    const obj6 = FlagUtils;
    if (obj6.hasFlag(flagsResult, ThreadMemberFlags.ALL_MESSAGES)) {
      return ThreadMemberFlags.ALL_MESSAGES;
    } else {
      const tmp6Result = FlagUtils;
      if (tmp6Result.hasFlag(flagsResult, ThreadMemberFlags.ONLY_MENTIONS)) {
        return ThreadMemberFlags.ONLY_MENTIONS;
      } else {
        const tmp6Result2 = FlagUtils;
        if (tmp6Result2.hasFlag(flagsResult, ThreadMemberFlags.NO_MESSAGES)) {
          return ThreadMemberFlags.NO_MESSAGES;
        } else {
          channel = obj3.getChannel(channel.parent_id);
          if (null == channel) {
            return ThreadMemberFlags.NO_MESSAGES;
          } else if (obj2.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id)) {
            return ThreadMemberFlags.NO_MESSAGES;
          } else {
            let NO_MESSAGES;
            const result = obj2.resolvedMessageNotifications(channel);
            if (result === UserNotificationSettings.NO_MESSAGES) {
              NO_MESSAGES = tmp8.NO_MESSAGES;
            } else {
              NO_MESSAGES = result === tmp4.ONLY_MENTIONS ? tmp8.ONLY_MENTIONS : tmp8.ALL_MESSAGES;
            }
            return NO_MESSAGES;
          }
        }
      }
    }
  }
}
const ThreadMemberFlags = ThreadConstants.ThreadMemberFlags;
const UserNotificationSettings = Constants.UserNotificationSettings;
let result = size.fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = function useThreadNotificationSetting(channel) {
  _require = channel;
  const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
  const items1 = [channel];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => computeThreadNotificationSetting(channel), items1);
};
