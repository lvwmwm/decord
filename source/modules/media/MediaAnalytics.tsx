// Module ID: 11046
// Function ID: 85903
// Name: logMediaAttachmentPlaybackStarted
// Dependencies: [653, 675, 2]
// Exports: logMediaAttachmentPlaybackEnded, logMediaAttachmentPlaybackStarted

// Module 11046 (logMediaAttachmentPlaybackStarted)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/media/MediaAnalytics.tsx");

export const logMediaAttachmentPlaybackStarted = function logMediaAttachmentPlaybackStarted(messageChannel, found, totalDurationSecs, messageId, startDurationSecs, id) {
  let obj = importDefault(675);
  obj = { guild_id: messageChannel.guild_id, channel_id: messageChannel.id, channel_type: messageChannel.type, type: found.content_type, flags: found.flags, size: found.size, duration: totalDurationSecs, message_id: messageId, attachment_id: found.id };
  let tmp = startDurationSecs;
  if (null != totalDurationSecs) {
    tmp = totalDurationSecs;
  }
  obj.start_duration_secs = Math.min(tmp, startDurationSecs);
  obj.sender_user_id = id;
  obj.track(AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, obj);
};
export const logMediaAttachmentPlaybackEnded = function logMediaAttachmentPlaybackEnded(messageId, totalDurationSecs, endDurationSecs, id, durationListeningSecs, found) {
  let obj = importDefault(675);
  obj = { message_id: messageId, total_duration_secs: totalDurationSecs };
  let tmp = endDurationSecs;
  if (null != totalDurationSecs) {
    tmp = totalDurationSecs;
  }
  obj.end_duration_secs = Math.min(tmp, endDurationSecs);
  obj.sender_user_id = id;
  obj.duration_listening_secs = durationListeningSecs;
  obj.type = found.content_type;
  obj.track(AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_ENDED, obj);
};
