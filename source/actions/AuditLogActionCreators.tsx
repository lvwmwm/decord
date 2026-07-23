// Module ID: 16236
// Function ID: 126454
// Name: isLoading
// Dependencies: [16226, 653, 507, 686, 2]
// Exports: fetchNextLogPage, filterByAction, filterByTargetId, filterByUserId

// Module 16236 (isLoading)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function isLoading(postId, closure_1, closure_2, _isNativeReflectConstruct) {
  let isLoadingNextPage = _isNativeReflectConstruct.isLoading;
  if (!isLoadingNextPage) {
    isLoadingNextPage = _isNativeReflectConstruct.isLoadingNextPage;
  }
  return isLoadingNextPage;
}
function makeRequest(arg0, arg1) {
  let action;
  let before;
  let targetId;
  let userId;
  ({ before, userId, targetId, action } = arg1);
  if (null == userId) {
    userId = _isNativeReflectConstruct.userIdFilter;
  }
  if (null == action) {
    action = _isNativeReflectConstruct.actionFilter;
  }
  if (null == targetId) {
    targetId = _isNativeReflectConstruct.targetIdFilter;
  }
  let obj = { limit: closure_5 };
  if (null != before) {
    obj.before = before;
  }
  if (null != userId) {
    obj.user_id = userId;
  }
  if (null != action) {
    obj.action_type = action;
  }
  if (null != targetId) {
    obj.target_id = targetId;
  }
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: closure_4.GUILD_AUDIT_LOG(arg0), query: obj, oldFormErrors: true, rejectWithError: true };
  return HTTP.get(obj);
}
function fetchLogs(guildId, userId, targetId, action) {
  if (!isLoading()) {
    if (null != guildId) {
      let obj = importDefault(686);
      obj = { type: "AUDIT_LOG_FETCH_START" };
      obj.dispatch(obj);
      obj = { userId, action, targetId };
      return makeRequest(guildId, obj).then((body) => {
        let application_commands;
        let audit_log_entries;
        let auto_moderation_rules;
        let guild_scheduled_events;
        let integrations;
        let threads;
        let users;
        let webhooks;
        ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
        outer1_1(outer1_2[3]).dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
      }, () => outer1_1(outer1_2[3]).dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
    }
  }
}
({ Endpoints: closure_4, AUDIT_LOG_PAGE_LIMIT: closure_5 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/AuditLogActionCreators.tsx");

export { fetchLogs };
export const fetchNextLogPage = function fetchNextLogPage(guildId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (_isNativeReflectConstruct.hasOlderLogs) {
    if (!isLoading()) {
      if (null != guildId) {
        const logs = _isNativeReflectConstruct.logs;
        let id = null;
        if (null != logs[logs.length - 1]) {
          id = tmp9.id;
        }
        let obj = importDefault(686);
        obj = { type: "AUDIT_LOG_FETCH_NEXT_PAGE_START", before: id, isGroupedFetch: flag };
        obj.dispatch(obj);
        obj = { before: id };
        return makeRequest(guildId, obj).then((body) => {
          let application_commands;
          let audit_log_entries;
          let auto_moderation_rules;
          let guild_scheduled_events;
          let integrations;
          let threads;
          let users;
          let webhooks;
          ({ audit_log_entries, integrations, users, webhooks, guild_scheduled_events, auto_moderation_rules, threads, application_commands } = body.body);
          outer1_1(outer1_2[3]).dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
        }, () => outer1_1(outer1_2[3]).dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL" }));
      }
    }
  }
};
export const filterByAction = function filterByAction(action, guildId) {
  if (!isLoading()) {
    if (null != guildId) {
      let obj = importDefault(686);
      obj = { type: "AUDIT_LOG_FILTER_BY_ACTION", action };
      obj.dispatch(obj);
      return fetchLogs(guildId, null, null, action);
    }
  }
};
export const filterByUserId = function filterByUserId(id, guildId) {
  if (!isLoading()) {
    if (null != guildId) {
      let obj = importDefault(686);
      obj = { type: "AUDIT_LOG_FILTER_BY_USER", userId: id };
      obj.dispatch(obj);
      return fetchLogs(guildId, id);
    }
  }
};
export const filterByTargetId = function filterByTargetId(targetId, guildId) {
  if (!isLoading()) {
    if (null != guildId) {
      let obj = importDefault(686);
      obj = { type: "AUDIT_LOG_FILTER_BY_TARGET", targetId };
      obj.dispatch(obj);
      return fetchLogs(guildId, null, targetId);
    }
  }
};
