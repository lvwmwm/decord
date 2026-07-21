// Module ID: 15008
// Function ID: 112997
// Dependencies: []

// Module 15008
const _module = require(dependencyMap[0]);
({ Endpoints: closure_3, MAX_MENTIONS_PER_FETCH: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("actions/MentionActionCreators.tsx");

export default {
  setGuildFilter(arg0) {
    let everyoneFilter;
    let guildFilter;
    let roleFilter;
    ({ guildFilter, roleFilter, everyoneFilter } = arg0);
    importDefault(dependencyMap[1]).dispatch({ type: "SET_RECENT_MENTIONS_FILTER", guildFilter, roleFilter, everyoneFilter });
  },
  clearMentions() {
    importDefault(dependencyMap[1]).dispatch({ type: "CLEAR_MENTIONS" });
  },
  truncateMentions(size) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "TRUNCATE_MENTIONS", size };
    obj.dispatch(obj);
  },
  fetchRecentMentions(before) {
    before = before.before;
    const require = before;
    let limit = before.limit;
    if (limit === undefined) {
      limit = closure_4;
    }
    let guildId = before.guildId;
    if (guildId === undefined) {
      guildId = null;
    }
    let flag = before.roles;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = before.everyone;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "LOAD_RECENT_MENTIONS", guildId };
    obj.dispatch(obj);
    const HTTP = require(dependencyMap[2]).HTTP;
    obj = { "Bool(false)": "RTC_CONNECTION_LOSS_RATE", "Bool(false)": "handleJoinThreadVoice", "Bool(false)": "toString", "Bool(false)": "isArray", "Bool(false)": "toString", url: closure_3.MENTIONS };
    const obj1 = { before, limit, guild_id: guildId, roles: flag, everyone: flag2, feature: before.feature };
    obj.query = obj1;
    const value = HTTP.get(obj);
    return value.then((body) => {
      body = body.body;
      let obj = callback(closure_2[1]);
      obj = { type: "LOAD_RECENT_MENTIONS_SUCCESS", messages: body, isAfter: null != before, hasMoreAfter: body.length >= closure_4 };
      obj.dispatch(obj);
    }, () => {
      callback(closure_2[1]).dispatch({ type: "LOAD_RECENT_MENTIONS_FAILURE" });
    });
  },
  deleteRecentMention(id) {
    const HTTP = require(dependencyMap[2]).HTTP;
    let obj = { url: closure_3.MENTIONS_MESSAGE_ID(id) };
    HTTP.del(obj);
    obj = { type: "RECENT_MENTION_DELETE", id };
    importDefault(dependencyMap[1]).dispatch(obj);
  },
  setRecentMentionsStale() {
    importDefault(dependencyMap[1]).dispatch({ type: "SET_RECENT_MENTIONS_STALE" });
  }
};
