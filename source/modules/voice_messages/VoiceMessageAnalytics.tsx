// Module ID: 11007
// Function ID: 85647
// Name: logVoiceMessagePlaybackStarted
// Dependencies: [670, 2, 6]
// Exports: logVoiceMessagePlaybackEnded, logVoiceMessagePlaybackFailed, logVoiceMessagePlaybackStarted

// Module 11007 (logVoiceMessagePlaybackStarted)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

const result = _classCallCheck.fileFinishedImporting("modules/voice_messages/VoiceMessageAnalytics.tsx");

export const VoiceMessageRecordingResult = { SENT: "sent", CANCELLED_DURATION: "cancelled_duration", CANCELLED_USER_REQUESTED: "cancelled_user_requested", CANCELLED_GESTURE_CONFLICT: "cancelled_gesture_conflict", CANCELLED_ON_BACKGROUND: "cancelled_on_background" };
export const logVoiceMessagePlaybackStarted = function logVoiceMessagePlaybackStarted(messageId, totalDurationSecs, startDurationSecs, id) {
  let obj = importDefault(dependencyMap[1]);
  obj = { message_id: messageId, total_duration_secs: totalDurationSecs };
  let tmp = startDurationSecs;
  if (null != totalDurationSecs) {
    tmp = totalDurationSecs;
  }
  obj.start_duration_secs = Math.min(tmp, startDurationSecs);
  obj.sender_user_id = id;
  obj.track(AnalyticEvents.VOICE_MESSAGE_PLAYBACK_STARTED, obj);
};
export const logVoiceMessagePlaybackEnded = function logVoiceMessagePlaybackEnded(messageId, totalDurationSecs, endDurationSecs, id, durationListeningSecs) {
  let obj = importDefault(dependencyMap[1]);
  obj = { message_id: messageId, total_duration_secs: totalDurationSecs };
  let tmp = endDurationSecs;
  if (null != totalDurationSecs) {
    tmp = totalDurationSecs;
  }
  obj.end_duration_secs = Math.min(tmp, endDurationSecs);
  obj.sender_user_id = id;
  obj.duration_listening_secs = durationListeningSecs;
  obj.track(AnalyticEvents.VOICE_MESSAGE_PLAYBACK_ENDED, obj);
};
export const logVoiceMessagePlaybackFailed = function logVoiceMessagePlaybackFailed(messageId, error_message) {
  let obj = importDefault(dependencyMap[1]);
  obj = { message_id: messageId, error_message };
  obj.track(AnalyticEvents.VOICE_MESSAGE_PLAYBACK_FAILED, obj);
};
