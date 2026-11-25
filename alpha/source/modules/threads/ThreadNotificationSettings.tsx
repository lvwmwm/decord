// Module ID: 6951
// Function ID: 6952
// Name: ThreadNotificationSettings
// Dependencies: [4861, 6136, 4946, 1111, 1071, 1404, 504, 2]
// Exports: useThreadNotificationSetting

// Module 6951 (ThreadNotificationSettings)
import Constants from "Constants" /* 1071 */;
import ThreadConstants from "ThreadConstants" /* 1111 */;
import FlagUtils from "FlagUtils" /* 1404 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6136 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4946 */;
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
export function useThreadNotificationSetting(channel) {
  _require = channel;
  const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
  const items1 = [channel];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => computeThreadNotificationSetting(channel), items1);
}
