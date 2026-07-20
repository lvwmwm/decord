// Module ID: 9263
// Function ID: 72379
// Name: channelProps
// Dependencies: []

// Module 9263 (channelProps)
function channelProps(channelId) {
  const channel = channel.getChannel(channelId);
  const obj = { channel_id: channelId };
  let type;
  if (null != channel) {
    type = channel.type;
  }
  let tmp3 = null;
  if (null != type) {
    tmp3 = type;
  }
  obj.channel_type = tmp3;
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let tmp5 = null;
  if (null != guild_id) {
    tmp5 = guild_id;
  }
  obj.guild_id = tmp5;
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/conversations/ConversationsAnalytics.tsx");

export const ConversationsAnalytics = {
  trackEntrypointImpression(channelId) {
    let obj = importDefault(dependencyMap[2]);
    obj = {};
    const merged = Object.assign(channelProps(channelId.channelId));
    obj["conversation_count"] = channelId.conversationCount;
    obj.track(AnalyticEvents.TOPICAL_NAV_ENTRYPOINT_IMPRESSION, obj);
  },
  trackTopicsUnitImpression(channelId) {
    let obj = importDefault(dependencyMap[2]);
    obj = {};
    const merged = Object.assign(channelProps(channelId.channelId));
    obj["conversation_ids"] = channelId.conversationIds;
    obj["is_focus_mode"] = channelId.isFocusMode;
    obj.track(AnalyticEvents.TOPICAL_NAV_TOPICS_UNIT_IMPRESSION, obj);
  },
  trackPreviewImpression(channelId) {
    let obj = importDefault(dependencyMap[2]);
    obj = {};
    const merged = Object.assign(channelProps(channelId.channelId));
    obj["conversation_id"] = channelId.conversationId;
    obj["is_focus_mode"] = channelId.isFocusMode;
    obj.track(AnalyticEvents.TOPICAL_NAV_PREVIEW_IMPRESSION, obj);
  },
  trackTopicsUnitClicked(channelId) {
    let obj = importDefault(dependencyMap[2]);
    obj = {};
    const merged = Object.assign(channelProps(channelId.channelId));
    obj["conversation_id"] = channelId.conversationId;
    obj["is_focus_mode"] = channelId.isFocusMode;
    obj.track(AnalyticEvents.TOPICAL_NAV_TOPICS_UNIT_CLICKED, obj);
  },
  trackFocusModeImpression(channelId) {
    let obj = importDefault(dependencyMap[2]);
    obj = {};
    const merged = Object.assign(channelProps(channelId.channelId));
    obj["conversation_id"] = channelId.conversationId;
    obj.track(AnalyticEvents.TOPICAL_NAV_FOCUS_MODE_IMPRESSION, obj);
  },
  trackFocusModeDismissed(channelId) {
    let obj = importDefault(dependencyMap[2]);
    obj = {};
    const merged = Object.assign(channelProps(channelId.channelId));
    obj["conversation_id"] = channelId.conversationId;
    obj["dismiss_reason"] = channelId.dismissReason;
    obj.track(AnalyticEvents.TOPICAL_NAV_FOCUS_MODE_DISMISSED, obj);
  },
  trackThumbsClicked(channelId) {
    let obj = importDefault(dependencyMap[2]);
    obj = {};
    const merged = Object.assign(channelProps(channelId.channelId));
    obj["conversation_id"] = channelId.conversationId;
    obj["is_thumbs_up"] = channelId.isThumbsUp;
    obj["is_focus_mode"] = channelId.isFocusMode;
    obj.track(AnalyticEvents.TOPICAL_NAV_THUMBS_CLICKED, obj);
  },
  trackThumbsDownReasonSelected(channelId) {
    let obj = importDefault(dependencyMap[2]);
    obj = {};
    const merged = Object.assign(channelProps(channelId.channelId));
    obj["conversation_id"] = channelId.conversationId;
    obj["is_focus_mode"] = channelId.isFocusMode;
    obj["reasons"] = channelId.reasons;
    obj["other_text"] = channelId.otherText;
    obj.track(AnalyticEvents.TOPICAL_NAV_THUMBS_DOWN_REASON_SELECTED, obj);
  }
};
