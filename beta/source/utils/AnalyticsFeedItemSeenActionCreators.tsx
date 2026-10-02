// Module ID: 7329
// Function ID: 7330
// Name: AnalyticsFeedItemSeenActionCreators
// Dependencies: [585, 2]
// Exports: flushAnalyticsFeedItems, markAnalyticsFeedItemSeen, markAnalyticsFeedItemUnseen

// Module 7329 (AnalyticsFeedItemSeenActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/AnalyticsFeedItemSeenActionCreators.tsx");

export const markAnalyticsFeedItemSeen = function markAnalyticsFeedItemSeen(forumPostSeenManagerId, feedItemId, timestampMillis) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ANALYTICS_FEED_ITEM_SEEN", id: forumPostSeenManagerId, feedItemId, timestampMillis };
  obj.dispatch(obj2);
};
export const markAnalyticsFeedItemUnseen = function markAnalyticsFeedItemUnseen(forumPostSeenManagerId, feedItemId, timestampMillis) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ANALYTICS_FEED_ITEM_UNSEEN", id: forumPostSeenManagerId, feedItemId, timestampMillis };
  obj.dispatch(obj2);
};
export const flushAnalyticsFeedItems = function flushAnalyticsFeedItems(forumPostSeenManagerId, IMMEDIATE_WITH_COOLDOWN) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ANALYTICS_FEED_FLUSH", id: forumPostSeenManagerId, force: IMMEDIATE_WITH_COOLDOWN };
  obj.dispatch(obj2);
};
