// Module ID: 14718
// Function ID: 111021
// Name: useFavoriteGuildUnreads
// Dependencies: []
// Exports: default

// Module 14718 (useFavoriteGuildUnreads)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/favorites/useFavoriteGuildUnreads.tsx");

export default function useFavoriteGuildUnreads(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_5, closure_6, closure_4, closure_7, closure_8, closure_9];
  return arg1(dependencyMap[7]).useStateFromStoresObject(items, () => {
    const keys = callback(closure_2[8]).keys(arg0);
    const obj = callback(closure_2[8]);
    const arg0 = new Set();
    return keys.reduce((badge, channelId) => {
      const channel = channel.getChannel(channelId);
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      const mentionCount = closure_8.getMentionCount(channelId);
      if (!set.has(channelId)) {
        set.add(channelId);
        badge.badge = badge.badge + mentionCount;
      }
      let unread = badge.unread;
      if (!unread) {
        let hasUnreadResult = closure_8.hasUnread(channelId);
        if (hasUnreadResult) {
          hasUnreadResult = closure_6.shouldCountChannelUnread(channel, mentionCount);
        }
        unread = hasUnreadResult;
      }
      badge.unread = unread;
      if (null != guildId) {
        const activeJoinedRelevantThreadsForParent = activeJoinedRelevantThreadsForParent.getActiveJoinedRelevantThreadsForParent(guildId, channelId);
        for (const key10026 in activeJoinedRelevantThreadsForParent) {
          let tmp18 = key10026;
          let tmp19 = closure_8;
          let mentionCount1 = closure_8.getMentionCount(key10026);
          let tmp21 = closure_0;
          if (!closure_0.has(key10026)) {
            let tmp8 = closure_0;
            let addResult1 = closure_0.add(key10026);
            arg0.badge = arg0.badge + mentionCount1;
          }
          let tmp10 = closure_5;
          let unread2 = arg0.unread;
          if (!unread2) {
            let tmp12 = closure_8;
            let hasUnreadResult1 = closure_8.hasUnread(key10026);
            if (hasUnreadResult1) {
              let tmp14 = closure_6;
              hasUnreadResult1 = closure_6.shouldCountChannelUnread(tmp11, mentionCount1);
            }
            unread2 = hasUnreadResult1;
          }
          arg0.unread = unread2;
        }
      }
      return badge;
    }, { <string:80643072>: 1715544575, <string:80649984>: 1409286699 });
  });
};
