// Module ID: 9177
// Function ID: 71851
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 9178, 9176, 7008, 7010, 2]
// Exports: markForumPostItemAsSeen, markForumPostItemAsUnseen

// Module 9177 (_isNativeReflectConstruct)
import trackForumChannelSeenBatch from "trackForumChannelSeenBatch";
import markAnalyticsFeedItemSeen from "markAnalyticsFeedItemSeen";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getForumPostSeenManagerId(parent_id) {
  return "" + require(9178) /* _createForOfIteratorHelperLoose */.AnalyticsFeedTypes.FORUM_CHANNEL + "_" + parent_id;
}
let tmp2 = ((AnalyticsFeedItemSeenManager) => {
  class ForumChannelSeenManager {
    constructor(arg0) {
      self = this;
      channelId = AnalyticsFeedItemSeenManager.channelId;
      ({ guildId, windowId, isPaused } = AnalyticsFeedItemSeenManager);
      tmp = outer1_3(this, apply);
      obj = { windowId, isPaused, id: outer1_8(channelId) };
      items = [];
      items[0] = obj;
      obj2 = outer1_5(apply);
      tmp2 = outer1_4;
      if (outer1_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj2, items, outer1_5(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.createFlushSeenItemsFunction = (arg0) => {
        obj = { guildId: obj.guildId, channelId: obj.channelId, sessionId: obj.sessionId, trackedFeedItems: obj.trackedFeedItems, isForcedFlush: null != arg0 };
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
            obj = trackedFeedItems[tmp];
            let seenTimeDestructive = obj.computeSeenTimeDestructive(isForcedFlush);
            if (seenTimeDestructive > 0) {
              let arr = items.push(tmp);
              arr = items1.push(seenTimeDestructive);
            }
          }
          if (0 !== items.length) {
            obj = { guildId, channelId, sessionId, postIds: items, additionalTimes: items1 };
            const result = ForumChannelSeenManager(outer3_1[7]).trackForumChannelSeenBatch(obj);
            const obj2 = ForumChannelSeenManager(outer3_1[7]);
          }
        };
      };
      tmp2Result.guildId = guildId;
      tmp2Result.channelId = channelId;
      obj3 = ForumChannelSeenManager(outer1_1[8]);
      tmp2Result.sessionId = obj3.getForumChannelSessionId(channelId);
      return tmp2Result;
    }
  }
  callback2(ForumChannelSeenManager, AnalyticsFeedItemSeenManager);
  return callback(ForumChannelSeenManager);
})(require("_createForOfIteratorHelperLoose").AnalyticsFeedItemSeenManager);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/forums/tracking/ForumChannelSeenManager.tsx");

export default tmp2;
export { getForumPostSeenManagerId };
export const markForumPostItemAsSeen = function markForumPostItemAsSeen(parent_id, item, timestampMillis) {
  const result = require(9176) /* markAnalyticsFeedItemSeen */.markAnalyticsFeedItemSeen(getForumPostSeenManagerId(parent_id), item, timestampMillis);
};
export const markForumPostItemAsUnseen = function markForumPostItemAsUnseen(parent_id, item, timestampMillis) {
  const result = require(9176) /* markAnalyticsFeedItemSeen */.markAnalyticsFeedItemUnseen(getForumPostSeenManagerId(parent_id), item, timestampMillis);
};
