// Module ID: 15610
// Function ID: 119180
// Name: trackActivityThermalStateNoticeShown
// Dependencies: []
// Exports: trackActivityThermalStateNoticeShown

// Module 15610 (trackActivityThermalStateNoticeShown)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activities/trackActivityThermalStateNoticeShown.tsx");

export const trackActivityThermalStateNoticeShown = function trackActivityThermalStateNoticeShown() {
  const currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  let obj = arg1(dependencyMap[4]);
  let _location;
  if (null != currentEmbeddedActivity) {
    _location = currentEmbeddedActivity.location;
  }
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  const basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
  let compositeInstanceId;
  if (null != currentEmbeddedActivity) {
    compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
  }
  let applicationId;
  if (null != currentEmbeddedActivity) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  obj = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId };
  let guild_id;
  if (null != basicChannel) {
    guild_id = basicChannel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.media_session_id = mediaSessionId.getMediaSessionId();
  importDefault(dependencyMap[5]).track(AnalyticEvents.ACTIVITY_THERMAL_STATE_NOTICE_SHOWN, obj);
};
