// Module ID: 6083
// Function ID: 6084
// Name: ThreadNotificationSettings
// Dependencies: [2065, 5966, 4752, 1125, 1085, 1403, 558, 576, 504, 2]

// Module 6083 (ThreadNotificationSettings)
import Constants from "Constants" /* 1085 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4752 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useThreadNotificationSetting(arg0) {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class N {
      constructor() {
        return computeThreadNotificationSetting(closure_0);
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = N;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = N;
  } else {
    class N {
      constructor() {
        return computeThreadNotificationSetting(closure_0);
      }
    }
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp8, tmp9);
}) : (function useThreadNotificationSetting(arg0) {
  let closure_0;
  _require = arg0;
  const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => computeThreadNotificationSetting(closure_0), items1);
});
let result = size.fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = tmp2;
