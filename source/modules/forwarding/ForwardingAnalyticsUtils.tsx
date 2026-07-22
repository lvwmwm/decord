// Module ID: 9866
// Function ID: 76389
// Name: trackForwardStart
// Dependencies: []
// Exports: trackForwardCancel, trackForwardCopyLink, trackForwardSent, trackForwardStart, useTrackForwardAddRecipientOnce, useTrackForwardEditContextMessageOnce, useTrackForwardEditSearchOnce

// Module 9866 (trackForwardStart)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/forwarding/ForwardingAnalyticsUtils.tsx");

export const trackForwardStart = function trackForwardStart(channel_id, id, source) {
  let obj = importDefault(dependencyMap[3]);
  obj = { channel_id, message_id: id, source };
  obj.track(AnalyticEvents.FORWARD_MESSAGE_STARTED, obj);
};
export const trackForwardCancel = function trackForwardCancel(arg0) {
  let channelId;
  let messageId;
  let numDestinationChanges;
  let numQueryChanges;
  ({ channelId, messageId, numDestinationChanges, numQueryChanges } = arg0);
  importDefault(dependencyMap[3]).track(AnalyticEvents.FORWARD_MESSAGE_CANCELLED, { channel_id: channelId, message_id: messageId, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges });
};
export const trackForwardSent = function trackForwardSent(arg0) {
  let anyDestinationHasSlowmode;
  let channelId;
  let hasContextMessage;
  let hasError;
  let messageId;
  let numDestinationChanges;
  let numDestinations;
  let numQueryChanges;
  let source;
  ({ channelId, messageId } = arg0);
  ({ hasError, hasContextMessage, numDestinations, numDestinationChanges, numQueryChanges, anyDestinationHasSlowmode, source } = arg0);
  let obj = importDefault(dependencyMap[3]);
  obj.track(AnalyticEvents.FORWARD_MESSAGE_SENT, { channel_id: channelId, message_id: messageId, has_error: hasError, has_context_message: hasContextMessage, num_destinations: numDestinations, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges, any_destination_has_slowmode: anyDestinationHasSlowmode });
  if ("message-shortcut" === source) {
    const channel = channel.getChannel(channelId);
    obj = { action: "forward", original_message_id: messageId };
    const obj3 = importDefault(dependencyMap[3]);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    const merged = Object.assign(arg1(dependencyMap[4]).collectGuildAnalyticsMetadata(guild_id));
    const obj5 = arg1(dependencyMap[4]);
    const merged1 = Object.assign(arg1(dependencyMap[4]).collectChannelAnalyticsMetadata(channel));
    obj3.track(AnalyticEvents.MESSAGE_SHORTCUT_ACTION_SENT, obj);
    const obj2 = arg1(dependencyMap[4]);
  }
};
export const trackForwardCopyLink = function trackForwardCopyLink(channel_id, id) {
  let obj = importDefault(dependencyMap[3]);
  obj = { channel_id, message_id: id };
  obj.track(AnalyticEvents.FORWARD_COPY_LINK, obj);
};
export const useTrackForwardAddRecipientOnce = function useTrackForwardAddRecipientOnce() {
  return React.useMemo(() => callback(closure_2[5]).once((channel_id, message_id, has_query) => {
    let obj = callback(closure_2[3]);
    obj = { channel_id, message_id, has_query };
    obj.track(constants.FORWARD_ADD_RECIPIENT, obj);
  }), []);
};
export const useTrackForwardEditSearchOnce = function useTrackForwardEditSearchOnce() {
  return React.useMemo(() => callback(closure_2[5]).once((channel_id, message_id) => {
    let obj = callback(closure_2[3]);
    obj = { channel_id, message_id };
    obj.track(constants.FORWARD_EDIT_SEARCH, obj);
  }), []);
};
export const useTrackForwardEditContextMessageOnce = function useTrackForwardEditContextMessageOnce() {
  return React.useMemo(() => callback(closure_2[5]).once((channel_id, message_id) => {
    let obj = callback(closure_2[3]);
    obj = { channel_id, message_id };
    obj.track(constants.FORWARD_EDIT_CONTEXT_MESSAGE, obj);
  }), []);
};
