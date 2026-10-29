// Module ID: 9794
// Function ID: 9795
// Name: AnalyticsFeedItemSeenActionCreators
// Dependencies: [584, 2]
// Exports: flushAnalyticsFeedItems, markAnalyticsFeedItemSeen, markAnalyticsFeedItemUnseen

// Module 9794 (AnalyticsFeedItemSeenActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/AnalyticsFeedItemSeenActionCreators.tsx");

export function markAnalyticsFeedItemSeen(forumPostSeenManagerId, feedItemId, timestampMillis) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ANALYTICS_FEED_ITEM_SEEN", id: forumPostSeenManagerId, feedItemId, timestampMillis };
  obj.dispatch(obj2);
}
export function markAnalyticsFeedItemUnseen(forumPostSeenManagerId, feedItemId, timestampMillis) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ANALYTICS_FEED_ITEM_UNSEEN", id: forumPostSeenManagerId, feedItemId, timestampMillis };
  obj.dispatch(obj2);
}
export function flushAnalyticsFeedItems(forumPostSeenManagerId, IMMEDIATE_WITH_COOLDOWN) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ANALYTICS_FEED_FLUSH", id: forumPostSeenManagerId, force: IMMEDIATE_WITH_COOLDOWN };
  obj.dispatch(obj2);
}
