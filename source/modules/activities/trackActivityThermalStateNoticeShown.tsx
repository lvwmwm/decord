// Module ID: 16131
// Function ID: 16132
// Name: trackActivityThermalStateNoticeShown
// Dependencies: [1372, 4375, 1371, 676, 3919, 698, 2]
// Exports: trackActivityThermalStateNoticeShown

// Module 16131 (trackActivityThermalStateNoticeShown)
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import participantFromServer from "participantFromServer";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("participantFromServer").fileFinishedImporting("modules/activities/trackActivityThermalStateNoticeShown.tsx");

export const trackActivityThermalStateNoticeShown = function trackActivityThermalStateNoticeShown() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  let obj = require(3919) /* getEmbeddedActivityLocationChannelId */;
  let _location;
  if (currentEmbeddedActivity != null) {
    _location = currentEmbeddedActivity.location;
  }
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
  let compositeInstanceId;
  if (currentEmbeddedActivity != null) {
    compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
  }
  let applicationId;
  if (currentEmbeddedActivity != null) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  obj = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, guild_id: null, media_session_id: null };
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  obj[3] = guild_id;
  obj[4] = mediaSessionId.getMediaSessionId();
  importDefault(698).track(AnalyticEvents.ACTIVITY_THERMAL_STATE_NOTICE_SHOWN, obj);
};
