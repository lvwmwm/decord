// Module ID: 9905
// Function ID: 76624
// Name: trackForwardStart
// Dependencies: [31, 1348, 653, 675, 4324, 22, 2]
// Exports: trackForwardCancel, trackForwardCopyLink, trackForwardSent, trackForwardStart, useTrackForwardAddRecipientOnce, useTrackForwardEditContextMessageOnce, useTrackForwardEditSearchOnce

// Module 9905 (trackForwardStart)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/forwarding/ForwardingAnalyticsUtils.tsx");

export const trackForwardStart = function trackForwardStart(channel_id, id, source) {
  let obj = importDefault(675);
  obj = { channel_id, message_id: id, source };
  obj.track(AnalyticEvents.FORWARD_MESSAGE_STARTED, obj);
};
export const trackForwardCancel = function trackForwardCancel(arg0) {
  let channelId;
  let messageId;
  let numDestinationChanges;
  let numQueryChanges;
  ({ channelId, messageId, numDestinationChanges, numQueryChanges } = arg0);
  importDefault(675).track(AnalyticEvents.FORWARD_MESSAGE_CANCELLED, { channel_id: channelId, message_id: messageId, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges });
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
  let obj = importDefault(675);
  obj.track(AnalyticEvents.FORWARD_MESSAGE_SENT, { channel_id: channelId, message_id: messageId, has_error: hasError, has_context_message: hasContextMessage, num_destinations: numDestinations, num_destination_changes: numDestinationChanges, num_query_changes: numQueryChanges, any_destination_has_slowmode: anyDestinationHasSlowmode });
  if ("message-shortcut" === source) {
    channel = channel.getChannel(channelId);
    obj = { action: "forward", original_message_id: messageId };
    const obj3 = importDefault(675);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guild_id));
    const obj5 = require(4324) /* _createForOfIteratorHelperLoose */;
    const merged1 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectChannelAnalyticsMetadata(channel));
    obj3.track(AnalyticEvents.MESSAGE_SHORTCUT_ACTION_SENT, obj);
    const obj2 = require(4324) /* _createForOfIteratorHelperLoose */;
  }
};
export const trackForwardCopyLink = function trackForwardCopyLink(channel_id, id) {
  let obj = importDefault(675);
  obj = { channel_id, message_id: id };
  obj.track(AnalyticEvents.FORWARD_COPY_LINK, obj);
};
export const useTrackForwardAddRecipientOnce = function useTrackForwardAddRecipientOnce() {
  return React.useMemo(() => outer1_0(outer1_2[5]).once((channel_id, message_id, has_query) => {
    let obj = outer2_1(outer2_2[3]);
    obj = { channel_id, message_id, has_query };
    obj.track(outer2_5.FORWARD_ADD_RECIPIENT, obj);
  }), []);
};
export const useTrackForwardEditSearchOnce = function useTrackForwardEditSearchOnce() {
  return React.useMemo(() => outer1_0(outer1_2[5]).once((channel_id, message_id) => {
    let obj = outer2_1(outer2_2[3]);
    obj = { channel_id, message_id };
    obj.track(outer2_5.FORWARD_EDIT_SEARCH, obj);
  }), []);
};
export const useTrackForwardEditContextMessageOnce = function useTrackForwardEditContextMessageOnce() {
  return React.useMemo(() => outer1_0(outer1_2[5]).once((channel_id, message_id) => {
    let obj = outer2_1(outer2_2[3]);
    obj = { channel_id, message_id };
    obj.track(outer2_5.FORWARD_EDIT_CONTEXT_MESSAGE, obj);
  }), []);
};
