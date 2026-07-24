// Module ID: 15182
// Function ID: 115566
// Dependencies: [653, 686, 507, 2]

// Module 15182
import ME from "ME";

let closure_3;
let closure_4;
({ Endpoints: closure_3, MAX_MENTIONS_PER_FETCH: closure_4 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/MentionActionCreators.tsx");

export default {
  setGuildFilter(arg0) {
    let everyoneFilter;
    let guildFilter;
    let roleFilter;
    ({ guildFilter, roleFilter, everyoneFilter } = arg0);
    importDefault(686).dispatch({ type: "SET_RECENT_MENTIONS_FILTER", guildFilter, roleFilter, everyoneFilter });
  },
  clearMentions() {
    importDefault(686).dispatch({ type: "CLEAR_MENTIONS" });
  },
  truncateMentions(size) {
    let obj = importDefault(686);
    obj = { type: "TRUNCATE_MENTIONS", size };
    obj.dispatch(obj);
  },
  fetchRecentMentions(before) {
    before = before.before;
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
    let obj = importDefault(686);
    obj = { type: "LOAD_RECENT_MENTIONS", guildId };
    obj.dispatch(obj);
    const HTTP = before(507).HTTP;
    obj = { url: closure_3.MENTIONS, query: null, retries: 2, oldFormErrors: true, rejectWithError: true };
    const obj1 = { before, limit, guild_id: guildId, roles: flag, everyone: flag2, feature: before.feature };
    obj.query = obj1;
    const value = HTTP.get(obj);
    return value.then((body) => {
      body = body.body;
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "LOAD_RECENT_MENTIONS_SUCCESS", messages: body, isAfter: null != before, hasMoreAfter: body.length >= outer1_4 };
      obj.dispatch(obj);
    }, () => {
      outer1_1(outer1_2[1]).dispatch({ type: "LOAD_RECENT_MENTIONS_FAILURE" });
    });
  },
  deleteRecentMention(id) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    let obj = { url: closure_3.MENTIONS_MESSAGE_ID(id), retries: 2, oldFormErrors: true, rejectWithError: true };
    HTTP.del(obj);
    obj = { type: "RECENT_MENTION_DELETE", id };
    importDefault(686).dispatch(obj);
  },
  setRecentMentionsStale() {
    importDefault(686).dispatch({ type: "SET_RECENT_MENTIONS_STALE" });
  }
};
