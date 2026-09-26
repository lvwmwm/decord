// Module ID: 16654
// Function ID: 16655
// Name: useFavoritesGuildUnreads
// Dependencies: [5755, 4429, 2041, 7904, 4427, 4803, 4969, 504, 11, 2]
// Exports: default

// Module 16654 (useFavoritesGuildUnreads)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5755 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4429 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7904 */;
import PermissionStore from "PermissionStore" /* 4427 */;
import ReadStateStore from "ReadStateStore" /* 4803 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4969 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildUnreads.tsx");

export default function useFavoritesGuildUnreads(arg0) {
  _require = arg0;
  const items = [ActiveJoinedThreadsStore, ChannelStore, GuildReadStateStore, JoinedThreadsStore, PermissionStore, ReadStateStore, UserGuildSettingsStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    const keys = SnowflakeUtilsDefault.keys(closure_0);
    const set = new Set();
    return keys.reduce((badge, item) => {
      channel = channel.getChannel(item);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const mentionCount = ReadStateStore.getMentionCount(item);
      if (!set.has(item)) {
        set.add(item);
        badge.badge = badge.badge + mentionCount;
      }
      let unread = badge.unread;
      if (!unread) {
        let hasUnreadResult = ReadStateStore.hasUnread(item);
        if (hasUnreadResult) {
          hasUnreadResult = GuildReadStateStore.shouldCountChannelUnread(channel, mentionCount);
        }
        unread = hasUnreadResult;
      }
      badge.unread = unread;
      if (null != guildId) {
        activeJoinedRelevantThreadsForParent = activeJoinedRelevantThreadsForParent.getActiveJoinedRelevantThreadsForParent(guildId, item);
        for (const key10024 in activeJoinedRelevantThreadsForParent) {
          let obj4 = ReadStateStore;
          let mentionCount1 = ReadStateStore.getMentionCount(key10024);
          let obj5 = set;
          if (!set.has(key10024)) {
            let addResult1 = obj5.add(key10024);
            arg0.badge = arg0.badge + mentionCount1;
          }
          let unread2 = arg0.unread;
          if (!unread2) {
            let hasUnreadResult1 = obj4.hasUnread(key10024);
            if (hasUnreadResult1) {
              hasUnreadResult1 = GuildReadStateStore.shouldCountChannelUnread(tmp8, mentionCount1);
            }
            unread2 = hasUnreadResult1;
          }
          arg0.unread = unread2;
          continue;
        }
      }
      return badge;
    }, { badge: 0, unread: false });
  });
};
