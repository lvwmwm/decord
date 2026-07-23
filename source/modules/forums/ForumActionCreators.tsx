// Module ID: 9139
// Function ID: 71615
// Name: withErrorHandling
// Dependencies: [5, 653, 4470, 1212, 686, 507, 7007, 9140, 9141, 9142, 7009, 2]

// Module 9139 (withErrorHandling)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function withErrorHandling(arg0, stringResult, intl2) {
  return _withErrorHandling(...arguments);
}
function _withErrorHandling() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AbortCodes: closure_4, Endpoints: closure_5 } = ME);
let result = require("set").fileFinishedImporting("modules/forums/ForumActionCreators.tsx");

export default {
  resort(id) {
    let obj = importDefault(686);
    obj = { type: "RESORT_THREADS", channelId: id };
    obj.dispatch(obj);
  },
  createForumTag(name, channelId) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    let obj = { url: closure_5.FORUM_TAGS(channelId) };
    obj = { name: name.name, emoji_id: name.emojiId };
    let emojiName;
    if (null == name.emojiId) {
      emojiName = name.emojiName;
    }
    obj.emoji_name = emojiName;
    obj.moderated = name.moderated;
    obj.body = obj;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  updateForumTag(id, channelId) {
    const HTTP = _require(507).HTTP;
    let obj = { url: closure_5.FORUM_TAG(channelId, id.id) };
    obj = { name: id.name, emoji_id: id.emojiId };
    let emojiName;
    if (null == id.emojiId) {
      emojiName = id.emojiName;
    }
    obj.emoji_name = emojiName;
    obj.moderated = id.moderated;
    obj.body = obj;
    obj.rejectWithError = _require(507).rejectWithMigratedError();
    _require = HTTP.put(obj);
    const intl = _require(1212).intl;
    const obj3 = _require(507);
    const intl2 = _require(1212).intl;
    withErrorHandling(() => closure_0, intl.string(_require(1212).t.T8sBLJ), intl2.string(_require(1212).t.imcb5u));
  },
  deleteForumTag(outer1_0, id) {
    const HTTP = _require(507).HTTP;
    const obj = { url: closure_5.FORUM_TAG(outer1_0, id), rejectWithError: _require(507).rejectWithMigratedError() };
    _require = HTTP.del(obj);
    const intl = _require(1212).intl;
    const obj2 = _require(507);
    const intl2 = _require(1212).intl;
    withErrorHandling(() => closure_0, intl.string(_require(1212).t["0ZkNDU"]), intl2.string(_require(1212).t.imcb5u));
  },
  updateForumPostTags(id, arg1) {
    let closure_0 = id;
    let closure_1 = arg1;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  hideAdminOnboarding(channelId, hide) {
    let obj = importDefault(686);
    obj = { type: "ADMIN_ONBOARDING_GUIDE_HIDE", channelId, hide };
    obj.dispatch(obj);
  },
  markPostAsSeen(parent_id, feedItemId, timestampMillis) {
    const obj = require(9140) /* markAnalyticsFeedItemSeen */;
    const result = obj.markAnalyticsFeedItemSeen(require(9141) /* _isNativeReflectConstruct */.getForumPostSeenManagerId(parent_id), feedItemId, timestampMillis);
  },
  markPostAsUnseen(parent_id, feedItemId, timestampMillis) {
    const obj = require(9140) /* markAnalyticsFeedItemSeen */;
    const result = obj.markAnalyticsFeedItemUnseen(require(9141) /* _isNativeReflectConstruct */.getForumPostSeenManagerId(parent_id), feedItemId, timestampMillis);
  },
  flushSeenItems(parent_id, IMMEDIATE_WITH_COOLDOWN) {
    if (IMMEDIATE_WITH_COOLDOWN === undefined) {
      IMMEDIATE_WITH_COOLDOWN = require(9142) /* _createForOfIteratorHelperLoose */.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
    }
    const obj = require(9140) /* markAnalyticsFeedItemSeen */;
    const result = obj.flushAnalyticsFeedItems(require(9141) /* _isNativeReflectConstruct */.getForumPostSeenManagerId(parent_id), IMMEDIATE_WITH_COOLDOWN);
  },
  searchForumPosts(guild_id, id, arg2, arg3, arg4) {
    let closure_0 = guild_id;
    let closure_1 = id;
    let closure_2 = arg2;
    const callback = arg3;
    let closure_4 = arg4;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateForumSearchQuery(channelId, query) {
    let obj = importDefault(686);
    obj = { type: "FORUM_SEARCH_QUERY_UPDATED", channelId, query };
    obj.dispatch(obj);
  },
  clearForumSearch(id) {
    let obj = importDefault(686);
    obj = { type: "FORUM_SEARCH_CLEAR", channelId: id };
    obj.dispatch(obj);
  }
};
