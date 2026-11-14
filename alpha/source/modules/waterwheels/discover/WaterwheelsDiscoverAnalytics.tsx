// Module ID: 19013
// Function ID: 19014
// Name: WaterwheelsDiscoverAnalytics
// Dependencies: [1072, 10225, 1256, 2]
// Exports: getDiscoverActionParameters

// Module 19013 (WaterwheelsDiscoverAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10225 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const discover_item = "discover_item";
const gravity = "gravity";
const waterwheels_discover = "waterwheels_discover";
let obj = {
  sessionStarted(arg0) {
    let loadId;
    let previousSessionCount;
    let sessionId;
    let startMs;
    ({ sessionId, loadId, startMs, previousSessionCount } = arg0);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: loadId, session_start_time_ms: startMs, icymi_session_id: sessionId, previous_icymi_session_count: previousSessionCount, ux_variation: waterwheels_discover };
    return obj.track(AnalyticEvents.FEED_SESSION_STARTED, obj2);
  },
  sessionCompleted(loadId) {
    let items1;
    const obj = { load_id: loadId.loadId, session_duration_ms: loadId.endMs - loadId.startMs, session_start_time_ms: loadId.startMs, session_end_time_ms: loadId.endMs, impression_count: loadId.impressionCount, icymi_session_id: loadId.sessionId, feed_visible_items_changed_count: loadId.visibleItemsChangedCount, impression_item_types: items1, latest_dwell_start_time_ms: null, previous_icymi_session_count: null, ux_variation: waterwheels_discover, interaction_count: null, dwelled_count: null };
    const track = AnalyticsUtilsDefault.track;
    const FEED_SESSION_COMPLETED = AnalyticEvents.FEED_SESSION_COMPLETED;
    AnalyticsUtilsDefault;
    if (loadId.impressionCount > 0) {
      const items = [discover_item];
      items1 = items;
    } else {
      items1 = [];
    }
    ({ latestDwellStartMs: obj.latest_dwell_start_time_ms, previousSessionCount: obj.previous_icymi_session_count } = loadId);
    ({ interactionCount: obj.interaction_count, dwellCount: obj.dwelled_count } = loadId);
    return track(FEED_SESSION_COMPLETED, obj);
  },
  seenBatch(items) {
    items = items.items;
    const first = items[0];
    let loadId;
    const track = AnalyticsUtilsDefault.track;
    const FEED_ITEM_SEEN_BATCH = AnalyticEvents.FEED_ITEM_SEEN_BATCH;
    AnalyticsUtilsDefault;
    if (first != null) {
      loadId = first.loadId;
    }
    if (loadId == null) {
      loadId = null;
    }
    const obj = { load_id: loadId, home_session_id: gravity, feed_item_ids: items.map((itemId) => itemId.itemId), feed_item_types: items.map(() => discover_item), feed_item_indices: items.map((item) => item.index), num_items: items.length, version: 3 };
    return track(FEED_ITEM_SEEN_BATCH, obj);
  },
  dwell1s(load_id) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: load_id.item.loadId, impression_id: load_id.impressionId, item_id: load_id.item.itemId, item_type: discover_item, dwell_start_time_ms: load_id.startMs, icymi_session_id: load_id.sessionId, trigger_type: load_id.triggerType, item_feed_index: load_id.item.brokerPosition, is_initially_visible: load_id.isInitiallyVisible, item_score: load_id.item.score, item_channel_type: null, item_card_height: null, is_dwelling: load_id.isDwelling, interaction_action_types: load_id.interactionActionTypes, interaction_count: load_id.interactionCount, ux_variation: waterwheels_discover, session_impression_index: load_id.sessionImpressionIndex };
    return obj.track(AnalyticEvents.FEED_ITEM_1S_DWELLED, obj2);
  },
  dwelled(load_id) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: load_id.item.loadId, impression_id: load_id.impressionId, dwell_time_ms: load_id.endMs - load_id.startMs, item_id: load_id.item.itemId, item_type: discover_item, dwell_start_time_ms: load_id.startMs, dwell_end_time_ms: load_id.endMs, icymi_session_id: load_id.sessionId, trigger_type: load_id.triggerType, item_feed_index: load_id.item.brokerPosition, is_initially_visible: load_id.isInitiallyVisible, item_score: load_id.item.score, item_channel_type: null, item_card_height: null, ux_variation: waterwheels_discover, interaction_action_types: load_id.interactionActionTypes, interaction_count: load_id.interactionCount, session_impression_index: load_id.sessionImpressionIndex };
    return obj.track(AnalyticEvents.FEED_ITEM_DWELLED, obj2);
  },
  interacted(arg0) {
    let impressionId;
    let item;
    let parameters;
    let sessionId;
    let sessionInteractionIndex;
    ({ item, parameters } = arg0);
    ({ sessionId, impressionId, sessionInteractionIndex } = arg0);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { load_id: item.loadId, feed_item_type: discover_item, feed_item_id: item.itemId, home_session_id: gravity, action_type: parameters.actionType, feed_item_index: item.index, icymi_session_id: sessionId, impression_id: impressionId, ux_variation: waterwheels_discover, session_interaction_index: sessionInteractionIndex, guild_id: parameters.guildId };
    return obj.track(AnalyticEvents.FEED_ITEM_INTERACTED, obj2);
  },
  actioned(arg0) {
    let impressionId;
    let item;
    let outcome;
    let outcome2;
    let parameters;
    let reason;
    let sessionActionIndex;
    let sessionId;
    ({ item, parameters, outcome } = arg0);
    ({ sessionId, impressionId, sessionActionIndex } = arg0);
    let tmp2;
    const obj = { load_id: item.loadId, icymi_session_id: sessionId, ux_variation: waterwheels_discover, session_action_index: sessionActionIndex, item_id: item.itemId, item_type: discover_item, impression_id: impressionId, action_gesture_type: parameters.gestureType, action_target_element: parameters.targetElement, action_intent_type: parameters.intentType, action_destination_type: parameters.destinationType, guild_id: parameters.guildId, item_feed_index: item.brokerPosition, item_card_type: item.cardType, action_outcome: outcome2, action_failure_reason: reason };
    const track = AnalyticsUtilsDefault.track;
    const FEED_ITEM_ACTIONED = AnalyticEvents.FEED_ITEM_ACTIONED;
    AnalyticsUtilsDefault;
    if (outcome != null) {
      tmp2 = outcome.outcome;
    }
    if ("succeeded" === tmp2) {
      outcome2 = outcome.outcome;
    }
    let tmp4;
    if (outcome != null) {
      tmp4 = outcome.outcome;
    }
    reason = undefined;
    if ("failed" === tmp4) {
      reason = outcome.reason;
    }
    return track(FEED_ITEM_ACTIONED, obj);
  }
};
const result = size.fileFinishedImporting("modules/waterwheels/discover/WaterwheelsDiscoverAnalytics.tsx");

export const DISCOVER_FEED_ITEM_TYPE = "discover_item";
export const DISCOVER_HOME_SESSION_ID = "gravity";
export const DISCOVER_UX_VARIATION = "waterwheels_discover";
export function getDiscoverActionParameters(type, arg1) {
  let str = "item_body";
  if ("identity" === arg1) {
    str = "item_header";
  }
  type = type.type;
  if ("guild_profile" === type) {
    return { actionType: "press_guild_profile", gestureType: "press", targetElement: str, intentType: "navigate", destinationType: "guild_profile", guildId: type.guildId };
  } else if (WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD === type) {
    return { actionType: "press_join_guild", gestureType: "press", targetElement: str, intentType: "join", destinationType: "guild", guildId: type.value.guild_id };
  } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD === type) {
    let str2 = "press";
    if ("identity" === arg1) {
      str2 = "press_header";
    }
    return { actionType: str2, gestureType: "press", targetElement: str, intentType: "navigate", destinationType: "guild", guildId: type.value.guild_id };
  } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_NUDGE === type) {
    return { actionType: "press", gestureType: "press", targetElement: str, intentType: "configure", destinationType: "none", guildId: null };
  } else {
    return { actionType: "press", gestureType: "press", targetElement: str, intentType: "open", destinationType: "unknown", guildId: null };
  }
}
export const discoverAnalyticsTracker = obj;
