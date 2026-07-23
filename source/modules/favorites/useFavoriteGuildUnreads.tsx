// Module ID: 14841
// Function ID: 113228
// Name: useFavoriteGuildUnreads
// Dependencies: [5039, 3760, 1348, 6879, 3758, 4142, 4325, 566, 21, 2]
// Exports: default

// Module 14841 (useFavoriteGuildUnreads)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/favorites/useFavoriteGuildUnreads.tsx");

export default function useFavoriteGuildUnreads(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_5, closure_6, closure_4, closure_7, closure_8, closure_9];
  return _require(566).useStateFromStoresObject(items, () => {
    const keys = outer1_1(outer1_2[8]).keys(set);
    set = new Set();
    return keys.reduce((badge, channelId) => {
      const channel = outer2_5.getChannel(channelId);
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      const mentionCount = outer2_8.getMentionCount(channelId);
      if (!set.has(channelId)) {
        set.add(channelId);
        badge.badge = badge.badge + mentionCount;
      }
      let unread = badge.unread;
      if (!unread) {
        let hasUnreadResult = outer2_8.hasUnread(channelId);
        if (hasUnreadResult) {
          hasUnreadResult = outer2_6.shouldCountChannelUnread(channel, mentionCount);
        }
        unread = hasUnreadResult;
      }
      badge.unread = unread;
      if (null != guildId) {
        const activeJoinedRelevantThreadsForParent = outer2_3.getActiveJoinedRelevantThreadsForParent(guildId, channelId);
        for (const key10026 in activeJoinedRelevantThreadsForParent) {
          let tmp18 = key10026;
          let tmp19 = outer2_8;
          let mentionCount1 = outer2_8.getMentionCount(key10026);
          let tmp21 = set;
          if (!set.has(key10026)) {
            let tmp8 = set;
            let addResult1 = set.add(key10026);
            arg0.badge = arg0.badge + mentionCount1;
          }
          let tmp10 = outer2_5;
          let unread2 = arg0.unread;
          if (!unread2) {
            let tmp12 = outer2_8;
            let hasUnreadResult1 = outer2_8.hasUnread(key10026);
            if (hasUnreadResult1) {
              let tmp14 = outer2_6;
              hasUnreadResult1 = outer2_6.shouldCountChannelUnread(tmp11, mentionCount1);
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
