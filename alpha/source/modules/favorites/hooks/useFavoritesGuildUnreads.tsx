// Module ID: 16248
// Function ID: 16249
// Name: useFavoritesGuildUnreads
// Dependencies: [5691, 4511, 2051, 7121, 4509, 4905, 5071, 558, 576, 11, 504, 2]

// Module 16248 (useFavoritesGuildUnreads)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5691 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7121 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, activeJoinedRelevantThreadsForParent, channel, set;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp12;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActiveJoinedThreadsStore, ChannelStore, , , , , ];
    let tmp7 = GuildReadStateStore;
    items[2] = GuildReadStateStore;
    const tmp8 = JoinedThreadsStore;
    items[3] = JoinedThreadsStore;
    items[4] = PermissionStore;
    let tmp10 = ReadStateStore;
    items[5] = ReadStateStore;
    items[6] = UserGuildSettingsStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp12 = fn;
  } else {
    tmp12 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp12);
}) : ((arg0) => {
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
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildUnreads.tsx");

export default tmp2;
