// Module ID: 9132
// Function ID: 71573
// Name: markAnalyticsFeedItemSeen
// Dependencies: []
// Exports: flushAnalyticsFeedItems, markAnalyticsFeedItemSeen, markAnalyticsFeedItemUnseen

// Module 9132 (markAnalyticsFeedItemSeen)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/AnalyticsFeedItemSeenActionCreators.tsx");

export const markAnalyticsFeedItemSeen = function markAnalyticsFeedItemSeen(forumPostSeenManagerId, feedItemId, timestampMillis) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "ANALYTICS_FEED_ITEM_SEEN", id: forumPostSeenManagerId, feedItemId, timestampMillis };
  obj.dispatch(obj);
};
export const markAnalyticsFeedItemUnseen = function markAnalyticsFeedItemUnseen(forumPostSeenManagerId, feedItemId, timestampMillis) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "ANALYTICS_FEED_ITEM_UNSEEN", id: forumPostSeenManagerId, feedItemId, timestampMillis };
  obj.dispatch(obj);
};
export const flushAnalyticsFeedItems = function flushAnalyticsFeedItems(forumPostSeenManagerId, IMMEDIATE_WITH_COOLDOWN) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "ANALYTICS_FEED_FLUSH", id: forumPostSeenManagerId, force: IMMEDIATE_WITH_COOLDOWN };
  obj.dispatch(obj);
};
