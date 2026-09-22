// Module ID: 10217
// Function ID: 10218
// Name: ThreadNotificationSettings
// Dependencies: [1957, 4817, 4277, 1113, 1074, 1384, 504, 2]
// Exports: useThreadNotificationSetting

// Module 10217 (ThreadNotificationSettings)
import FlagUtils from "FlagUtils" /* 1384 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4817 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4277 */;

const require = globalThis.__r;

require = fn;
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
    if (obj6.hasFlag(flagsResult, ThreadMemberFlags.ALL_MESSAGES)) {
      return tmp8.ALL_MESSAGES;
    } else {
      if (tmp6Result.hasFlag(flagsResult, tmp8.ONLY_MENTIONS)) {
        return tmp8.ONLY_MENTIONS;
      } else {
        if (tmp6Result2.hasFlag(flagsResult, tmp8.NO_MESSAGES)) {
          return tmp8.NO_MESSAGES;
        } else {
          channel = obj3.getChannel(channel.parent_id);
          if (null == channel) {
            return tmp8.NO_MESSAGES;
          } else if (obj2.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id)) {
            return tmp8.NO_MESSAGES;
          } else {
            const result = obj2.resolvedMessageNotifications(channel);
            if (result === UserNotificationSettings.NO_MESSAGES) {
              let NO_MESSAGES = tmp8.NO_MESSAGES;
            } else {
              NO_MESSAGES = result === tmp4.ONLY_MENTIONS ? tmp8.ONLY_MENTIONS : tmp8.ALL_MESSAGES;
            }
            return NO_MESSAGES;
          }
        }
        tmp6Result2 = tmp6(1384);
      }
      tmp6Result = tmp6(1384);
    }
    obj6 = FlagUtils;
  }
}
const ThreadMemberFlags = fn(1113).ThreadMemberFlags;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = function useThreadNotificationSetting(channel) {
  _require = channel;
  const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
  const items1 = [channel];
  return require("initialize").useStateFromStores(items, () => computeThreadNotificationSetting(closure_0), items1);
};
