// Module ID: 15738
// Function ID: 121435
// Name: trackActivityThermalStateNoticeShown
// Dependencies: [1348, 4202, 1347, 653, 3748, 675, 2]
// Exports: trackActivityThermalStateNoticeShown

// Module 15738 (trackActivityThermalStateNoticeShown)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activities/trackActivityThermalStateNoticeShown.tsx");

export const trackActivityThermalStateNoticeShown = function trackActivityThermalStateNoticeShown() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  let obj = require(3748) /* getEmbeddedActivityLocationChannelId */;
  let _location;
  if (null != currentEmbeddedActivity) {
    _location = currentEmbeddedActivity.location;
  }
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
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
  importDefault(675).track(AnalyticEvents.ACTIVITY_THERMAL_STATE_NOTICE_SHOWN, obj);
};
