// Module ID: 18375
// Function ID: 18376
// Name: useFavoritesGuildUnreads
// Dependencies: [6841, 4948, 4863, 6886, 4946, 6842, 6775, 504, 11, 2]
// Exports: default

// Module 18375 (useFavoritesGuildUnreads)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6841 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4948 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6886 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import ReadStateStore from "ReadStateStore" /* 6842 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6775 */;
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
