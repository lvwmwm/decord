// Module ID: 16119
// Function ID: 124281
// Name: isLoading
// Dependencies: []
// Exports: fetchNextLogPage, filterByAction, filterByTargetId, filterByUserId

// Module 16119 (isLoading)
function isLoading(postId, sortOrder, tagFilter, tagSetting) {
  let isLoadingNextPage = closure_3.isLoading;
  if (!isLoadingNextPage) {
    isLoadingNextPage = closure_3.isLoadingNextPage;
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
    userId = closure_3.userIdFilter;
  }
  if (null == action) {
    action = closure_3.actionFilter;
  }
  if (null == targetId) {
    targetId = closure_3.targetIdFilter;
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
  const HTTP = arg1(dependencyMap[2]).HTTP;
  obj = { url: closure_4.GUILD_AUDIT_LOG(arg0), query: obj, oldFormErrors: true, rejectWithError: true };
  return HTTP.get(obj);
}
function fetchLogs(guildId, userId, targetId, action) {
  if (!isLoading()) {
    if (null != guildId) {
      let obj = importDefault(dependencyMap[3]);
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
        callback(closure_2[3]).dispatch({ type: "AUDIT_LOG_FETCH_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
      }, () => callback(closure_2[3]).dispatch({ type: "AUDIT_LOG_FETCH_FAIL" }));
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
({ Endpoints: closure_4, AUDIT_LOG_PAGE_LIMIT: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("actions/AuditLogActionCreators.tsx");

export { fetchLogs };
export const fetchNextLogPage = function fetchNextLogPage(guildId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (closure_3.hasOlderLogs) {
    if (!isLoading()) {
      if (null != guildId) {
        const logs = closure_3.logs;
        let id = null;
        if (null != logs[logs.length - 1]) {
          id = tmp9.id;
        }
        let obj = importDefault(dependencyMap[3]);
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
          callback(closure_2[3]).dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS", logs: audit_log_entries, integrations, users, webhooks, guildScheduledEvents: guild_scheduled_events, automodRules: auto_moderation_rules, threads, applicationCommands: application_commands });
        }, () => callback(closure_2[3]).dispatch({ type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL" }));
      }
    }
  }
};
export const filterByAction = function filterByAction(action, guildId) {
  if (!isLoading()) {
    if (null != guildId) {
      let obj = importDefault(dependencyMap[3]);
      obj = { type: "AUDIT_LOG_FILTER_BY_ACTION", action };
      obj.dispatch(obj);
      return fetchLogs(guildId, null, null, action);
    }
  }
};
export const filterByUserId = function filterByUserId(id, guildId) {
  if (!isLoading()) {
    if (null != guildId) {
      let obj = importDefault(dependencyMap[3]);
      obj = { type: "AUDIT_LOG_FILTER_BY_USER", userId: id };
      obj.dispatch(obj);
      return fetchLogs(guildId, id);
    }
  }
};
export const filterByTargetId = function filterByTargetId(targetId, guildId) {
  if (!isLoading()) {
    if (null != guildId) {
      let obj = importDefault(dependencyMap[3]);
      obj = { type: "AUDIT_LOG_FILTER_BY_TARGET", targetId };
      obj.dispatch(obj);
      return fetchLogs(guildId, null, targetId);
    }
  }
};
