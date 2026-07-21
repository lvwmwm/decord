// Module ID: 9133
// Function ID: 71577
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: markForumPostItemAsSeen, markForumPostItemAsUnseen

// Module 9133 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getForumPostSeenManagerId(parent_id) {
  return "" + arg1(dependencyMap[5]).AnalyticsFeedTypes.FORUM_CHANNEL + "_" + parent_id;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const tmp2 = (AnalyticsFeedItemSeenManager) => {
  class ForumChannelSeenManager {
    constructor(arg0) {
      self = this;
      channelId = AnalyticsFeedItemSeenManager.channelId;
      ({ guildId, windowId, isPaused } = AnalyticsFeedItemSeenManager);
      tmp = closure_3(this, ForumChannelSeenManager);
      obj = { windowId, isPaused, id: closure_8(channelId) };
      items = [];
      items[0] = obj;
      obj2 = closure_5(ForumChannelSeenManager);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj2, items, closure_5(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      ForumChannelSeenManager = tmp2Result;
      tmp2Result.createFlushSeenItemsFunction = (arg0) => {
        const tmp2Result = { guildId: tmp2Result.guildId, channelId: tmp2Result.channelId, sessionId: tmp2Result.sessionId, trackedFeedItems: tmp2Result.trackedFeedItems, isForcedFlush: null != arg0 };
        return () => {
          let channelId;
          let guildId;
          let isForcedFlush;
          let sessionId;
          const trackedFeedItems = obj.trackedFeedItems;
          const items = [];
          const items1 = [];
          ({ guildId, channelId, sessionId, isForcedFlush } = obj);
          const keys = Object.keys(trackedFeedItems);
          for (let num = 0; num < keys.length; num = num + 1) {
            let tmp = keys[num];
            let obj = trackedFeedItems[tmp];
            let seenTimeDestructive = obj.computeSeenTimeDestructive(isForcedFlush);
            if (seenTimeDestructive > 0) {
              let arr = items.push(tmp);
              arr = items1.push(seenTimeDestructive);
            }
          }
          if (0 !== items.length) {
            obj = { guildId, channelId, sessionId, postIds: items, additionalTimes: items1 };
            const result = obj(closure_1[7]).trackForumChannelSeenBatch(obj);
            const obj2 = obj(closure_1[7]);
          }
        };
      };
      tmp2Result.guildId = guildId;
      tmp2Result.channelId = channelId;
      obj3 = ForumChannelSeenManager(closure_1[8]);
      tmp2Result.sessionId = obj3.getForumChannelSessionId(channelId);
      return tmp2Result;
    }
  }
  const arg1 = ForumChannelSeenManager;
  callback2(ForumChannelSeenManager, AnalyticsFeedItemSeenManager);
  return callback(ForumChannelSeenManager);
}(arg1(dependencyMap[5]).AnalyticsFeedItemSeenManager);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/forums/tracking/ForumChannelSeenManager.tsx");

export default tmp2;
export { getForumPostSeenManagerId };
export const markForumPostItemAsSeen = function markForumPostItemAsSeen(parent_id, item, timestampMillis) {
  const result = item(dependencyMap[6]).markAnalyticsFeedItemSeen(getForumPostSeenManagerId(parent_id), item, timestampMillis);
};
export const markForumPostItemAsUnseen = function markForumPostItemAsUnseen(parent_id, item, timestampMillis) {
  const result = item(dependencyMap[6]).markAnalyticsFeedItemUnseen(getForumPostSeenManagerId(parent_id), item, timestampMillis);
};
