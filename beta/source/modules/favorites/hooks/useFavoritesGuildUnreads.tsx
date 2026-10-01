// Module ID: 15948
// Function ID: 15949
// Name: useFavoritesGuildUnreads
// Dependencies: [5818, 4471, 2045, 7050, 4469, 4851, 5017, 504, 11, 2]
// Exports: default

// Module 15948 (useFavoritesGuildUnreads)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5818 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4471 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7050 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, activeJoinedRelevantThreadsForParent, channel, set;

const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildUnreads.tsx");

export default function useFavoritesGuildUnreads(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ActiveJoinedThreadsStore, ChannelStore, GuildReadStateStore, JoinedThreadsStore, PermissionStore, ReadStateStore, UserGuildSettingsStore];
  return obj.useStateFromStoresObject(items, () => {
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(closure_0);
    set = new Set();
    return keys.reduce((badge, item) => {
      channel = channel.getChannel(item);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const mentionCount = closure_2_8.getMentionCount(item);
      const obj2 = closure_2_8;
      const obj3 = set;
      if (!set.has(item)) {
        obj3.add(item);
        badge.badge = badge.badge + mentionCount;
      }
      let unread = badge.unread;
      if (!unread) {
        unread = obj2.hasUnread(item) && closure_2_6.shouldCountChannelUnread(channel, mentionCount);
        const hasUnreadResult = obj2.hasUnread(item) && closure_2_6.shouldCountChannelUnread(channel, mentionCount);
      }
      badge.unread = unread;
      if (null != guildId) {
        activeJoinedRelevantThreadsForParent = activeJoinedRelevantThreadsForParent.getActiveJoinedRelevantThreadsForParent(guildId, item);
        for (const key10024 in activeJoinedRelevantThreadsForParent) {
          let obj4 = closure_2_8;
          let mentionCount1 = closure_2_8.getMentionCount(key10024);
          let obj5 = set;
          if (!set.has(key10024)) {
            let addResult1 = obj5.add(key10024);
            badge.badge = badge.badge + mentionCount1;
          }
          let unread2 = badge.unread;
          if (!unread2) {
            let hasUnreadResult1 = obj4.hasUnread(key10024);
            if (hasUnreadResult1) {
              hasUnreadResult1 = closure_2_6.shouldCountChannelUnread(tmp8, mentionCount1);
            }
            unread2 = hasUnreadResult1;
          }
          badge.unread = unread2;
          continue;
        }
      }
      return badge;
    }, { badge: 0, unread: false });
  });
};
