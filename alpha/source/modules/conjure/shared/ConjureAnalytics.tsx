// Module ID: 10997
// Function ID: 10998
// Name: ConjureAnalytics
// Dependencies: [6293, 1087, 7222, 5206, 2]
// Exports: trackConjureErrored, trackConjurePublishActionClicked, trackConjureTurnResulted

// Module 10997 (ConjureAnalytics)
import Constants from "Constants" /* 1087 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5206 */;
import ConjureUtils from "ConjureUtils" /* 7222 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6293 */;
import size from "module_2" /* 2 */;

function projectFields(project_id) {
  let application_id;
  let install_scope;
  let prop;
  let substr;
  const project = ConjureProjectStore.getProject(project_id);
  let name;
  const obj = { project_id, project_name: substr, application_id, preview_application_id: prop, install_scope };
  if (project != null) {
    name = project.name;
  }
  substr = null;
  if (null != name) {
    substr = null;
    if ("" !== name) {
      substr = name.slice(0, 256);
    }
  }
  application_id = undefined;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  prop = undefined;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (prop == null) {
    prop = null;
  }
  install_scope = undefined;
  if (project != null) {
    install_scope = project.install_scope;
  }
  if (install_scope == null) {
    install_scope = null;
  }
  return obj;
}
function conjureLocation(project_id, isPreview) {
  let application_id;
  let findConjureChannelIdResult;
  let guild_id;
  const project = ConjureProjectStore.getProject(project_id);
  if (isPreview) {
    let preview_guild_id;
    if (project != null) {
      preview_guild_id = project.preview_guild_id;
    }
    guild_id = preview_guild_id;
  } else if (project != null) {
    guild_id = project.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  if (isPreview) {
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    application_id = prop;
  } else if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const obj = { guild_id, channel_id: findConjureChannelIdResult };
  findConjureChannelIdResult = null;
  if (null != guild_id) {
    findConjureChannelIdResult = null;
    if (null != application_id) {
      const obj2 = ConjureUtils;
      findConjureChannelIdResult = obj2.findConjureChannelId(guild_id, application_id);
    }
  }
  return obj;
}
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/conjure/shared/ConjureAnalytics.tsx");

export const ConjureErrorCodes = { BUILD_FAILED: "BUILD_FAILED", HEALTHCHECK_FAILED: "HEALTHCHECK_FAILED", AGENT_ERROR: "AGENT_ERROR", PUBLISH_FAILED: "PUBLISH_FAILED", WS_OPEN_FAILED: "WS_OPEN_FAILED", SEND_FAILED: "SEND_FAILED", RUNTIME_FRAME_ERROR: "RUNTIME_FRAME_ERROR", RUNTIME_WORKER_ERROR: "RUNTIME_WORKER_ERROR" };
export const trackConjureTurnResulted = function trackConjureTurnResulted(projectId, turn_id) {
  let cost_usd;
  let duration_ms;
  let model_tier;
  let obj3;
  let result;
  let substr;
  const obj = { turn_id, turn_result: result, turn_summary: substr, turn_cost: cost_usd, turn_duration_ms: duration_ms, model_tier };
  const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
  const CONJURE_TURN_RESULTED = AnalyticEvents.CONJURE_TURN_RESULTED;
  AppAnalyticsUtils;
  const merged = Object.assign(projectFields(projectId));
  const merged1 = Object.assign(conjureLocation(projectId, true));
  turn_id = turn_id.turn_id;
  if (turn_id == null) {
    turn_id = null;
  }
  result = turn_id.result;
  if (result == null) {
    result = null;
  }
  let detail = turn_id.detail;
  if (detail == null) {
    detail = turn_id.summary;
  }
  substr = null;
  if (null != detail) {
    substr = null;
    if ("" !== detail) {
      substr = detail.slice(0, 256);
    }
  }
  cost_usd = turn_id.cost_usd;
  if (cost_usd == null) {
    cost_usd = null;
  }
  duration_ms = turn_id.duration_ms;
  if (duration_ms == null) {
    duration_ms = null;
  }
  model_tier = turn_id.model_tier;
  if (model_tier == null) {
    model_tier = null;
  }
  const tokens = turn_id.tokens;
  if (null == tokens) {
    obj3 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: null };
  } else {
    obj3 = { turn_input_tokens: null, turn_output_tokens: null, turn_cache_write_tokens: null, turn_cache_read_tokens: null, turn_total_tokens: tokens.input_tokens + tokens.output_tokens + tokens.cache_creation_input_tokens + tokens.cache_read_input_tokens };
    ({ input_tokens: obj2.turn_input_tokens, output_tokens: obj2.turn_output_tokens, cache_creation_input_tokens: obj2.turn_cache_write_tokens, cache_read_input_tokens: obj2.turn_cache_read_tokens } = tokens);
  }
  const merged2 = Object.assign(obj3);
  trackWithMetadata(CONJURE_TURN_RESULTED, obj);
};
export const trackConjureErrored = function trackConjureErrored(projectId, turnId) {
  let _location;
  let code;
  let details;
  let isPreview;
  let message;
  let substr;
  let substr1;
  ({ message, details, isPreview } = turnId);
  ({ location: _location, code } = turnId);
  if (isPreview === undefined) {
    isPreview = true;
  }
  turnId = turnId.turnId;
  const obj = { is_preview: isPreview, turn_id: turnId, error_location: _location, error_code: code, error_message: substr, error_details: substr1 };
  const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
  const CONJURE_ERRORED = AnalyticEvents.CONJURE_ERRORED;
  AppAnalyticsUtils;
  const merged = Object.assign(projectFields(projectId));
  const merged1 = Object.assign(conjureLocation(projectId, isPreview));
  if (turnId == null) {
    turnId = null;
  }
  substr = null;
  if (null != message) {
    substr = null;
    if ("" !== message) {
      substr = message.slice(0, 256);
    }
  }
  substr1 = null;
  if (null != details) {
    substr1 = null;
    if ("" !== details) {
      substr1 = details.slice(0, 256);
    }
  }
  trackWithMetadata(CONJURE_ERRORED, obj);
};
export const trackConjurePublishActionClicked = function trackConjurePublishActionClicked(project_id, installScope) {
  let action;
  let application_id;
  let entryPoint;
  let obj2;
  let publishState;
  let surface;
  installScope = installScope.installScope;
  ({ entryPoint, publishState, surface, action } = installScope);
  const project = ConjureProjectStore.getProject(project_id);
  const obj = { project_id, application_id, entry_point: entryPoint, publish_state: publishState, surface, install_scope: installScope, action };
  application_id = undefined;
  const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
  const CONJURE_PUBLISH_ACTION_CLICKED = AnalyticEvents.CONJURE_PUBLISH_ACTION_CLICKED;
  AppAnalyticsUtils;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  if ("user" === installScope) {
    obj2 = { guild_id: null, channel_id: null };
  } else {
    obj2 = conjureLocation(project_id, false);
  }
  const merged = Object.assign(obj2);
  trackWithMetadata(CONJURE_PUBLISH_ACTION_CLICKED, obj);
};
