// Module ID: 9131
// Function ID: 71561
// Name: withErrorHandling
// Dependencies: []

// Module 9131 (withErrorHandling)
function withErrorHandling(arg0, stringResult, intl2) {
  return _withErrorHandling(...arguments);
}
function _withErrorHandling() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _withErrorHandling = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
({ AbortCodes: closure_4, Endpoints: closure_5 } = arg1(dependencyMap[1]));
const obj = {
  resort(id) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "RESORT_THREADS", channelId: id };
    obj.dispatch(obj);
  },
  createForumTag(name, channelId) {
    const HTTP = channelId(dependencyMap[5]).HTTP;
    let obj = { url: closure_5.FORUM_TAGS(channelId) };
    obj = { name: name.name, emoji_id: name.emojiId };
    let emojiName;
    if (null == name.emojiId) {
      emojiName = name.emojiName;
    }
    obj.emoji_name = emojiName;
    obj.moderated = name.moderated;
    obj.body = obj;
    obj.rejectWithError = channelId(dependencyMap[5]).rejectWithMigratedError();
    return HTTP.post(obj);
  },
  updateForumTag(id, channelId) {
    const HTTP = callback(dependencyMap[5]).HTTP;
    let obj = { url: closure_5.FORUM_TAG(channelId, id.id) };
    obj = { name: id.name, emoji_id: id.emojiId };
    let emojiName;
    if (null == id.emojiId) {
      emojiName = id.emojiName;
    }
    obj.emoji_name = emojiName;
    obj.moderated = id.moderated;
    obj.body = obj;
    obj.rejectWithError = callback(dependencyMap[5]).rejectWithMigratedError();
    const callback = HTTP.put(obj);
    const intl = callback(dependencyMap[3]).intl;
    const obj3 = callback(dependencyMap[5]);
    const intl2 = callback(dependencyMap[3]).intl;
    withErrorHandling(() => closure_0, intl.string(callback(dependencyMap[3]).t.T8sBLJ), intl2.string(callback(dependencyMap[3]).t.imcb5u));
  },
  deleteForumTag(closure_0, id) {
    const HTTP = callback(dependencyMap[5]).HTTP;
    const obj = { url: closure_5.FORUM_TAG(closure_0, id), rejectWithError: callback(dependencyMap[5]).rejectWithMigratedError() };
    const callback = HTTP.del(obj);
    const intl = callback(dependencyMap[3]).intl;
    const obj2 = callback(dependencyMap[5]);
    const intl2 = callback(dependencyMap[3]).intl;
    withErrorHandling(() => closure_0, intl.string(callback(dependencyMap[3]).t.0ZkNDU), intl2.string(callback(dependencyMap[3]).t.imcb5u));
  },
  updateForumPostTags(id, arg1) {
    arg1 = id;
    const importDefault = arg1;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback2(tmp)();
  },
  hideAdminOnboarding(channelId, hide) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "ADMIN_ONBOARDING_GUIDE_HIDE", channelId, hide };
    obj.dispatch(obj);
  },
  markPostAsSeen(parent_id, feedItemId, timestampMillis) {
    const obj = feedItemId(dependencyMap[7]);
    const result = obj.markAnalyticsFeedItemSeen(feedItemId(dependencyMap[8]).getForumPostSeenManagerId(parent_id), feedItemId, timestampMillis);
  },
  markPostAsUnseen(parent_id, feedItemId, timestampMillis) {
    const obj = feedItemId(dependencyMap[7]);
    const result = obj.markAnalyticsFeedItemUnseen(feedItemId(dependencyMap[8]).getForumPostSeenManagerId(parent_id), feedItemId, timestampMillis);
  },
  flushSeenItems(parent_id, IMMEDIATE_WITH_COOLDOWN) {
    if (IMMEDIATE_WITH_COOLDOWN === undefined) {
      IMMEDIATE_WITH_COOLDOWN = IMMEDIATE_WITH_COOLDOWN(dependencyMap[9]).ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
    }
    const obj = IMMEDIATE_WITH_COOLDOWN(dependencyMap[7]);
    const result = obj.flushAnalyticsFeedItems(IMMEDIATE_WITH_COOLDOWN(dependencyMap[8]).getForumPostSeenManagerId(parent_id), IMMEDIATE_WITH_COOLDOWN);
  },
  searchForumPosts(guild_id, id, arg2, arg3, arg4) {
    id = guild_id;
    const importDefault = id;
    const dependencyMap = arg2;
    const callback2 = arg3;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback2(tmp)();
  },
  updateForumSearchQuery(channelId, query) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "FORUM_SEARCH_QUERY_UPDATED", channelId, query };
    obj.dispatch(obj);
  },
  clearForumSearch(id) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "FORUM_SEARCH_CLEAR", channelId: id };
    obj.dispatch(obj);
  }
};
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/ForumActionCreators.tsx");

export default obj;
