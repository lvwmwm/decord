// Module ID: 11544
// Function ID: 11545
// Name: ThreadNotificationSettings
// Dependencies: [2045, 4939, 4401, 1118, 1078, 1389, 558, 568, 504, 2]

// Module 11544 (ThreadNotificationSettings)
import FlagUtils from "FlagUtils" /* 1389 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4939 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4401 */;

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
        tmp6Result2 = tmp6(1389);
      }
      tmp6Result = tmp6(1389);
    }
    obj6 = FlagUtils;
  }
}
const ThreadMemberFlags = fn(1118).ThreadMemberFlags;
const UserNotificationSettings = fn(1078).UserNotificationSettings;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
    cResult[0] = items;
    let first = items;
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
    let tmp9 = items1;
    const tmp8 = N;
  } else {
    class N {
      constructor() {
        return computeThreadNotificationSetting(closure_0);
      }
    }
    tmp9 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => computeThreadNotificationSetting(closure_0), items1);
});
