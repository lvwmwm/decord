// Module ID: 17006
// Function ID: 17007
// Name: trackActivityThermalStateNoticeShown
// Dependencies: [2051, 4860, 2050, 1086, 4461, 1253, 2]
// Exports: trackActivityThermalStateNoticeShown

// Module 17006 (trackActivityThermalStateNoticeShown)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4461 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4860 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/activities/trackActivityThermalStateNoticeShown.tsx");

export const trackActivityThermalStateNoticeShown = function trackActivityThermalStateNoticeShown() {
  let guild_id;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  let _location;
  const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
  embeddedActivityLocationUtils;
  if (currentEmbeddedActivity != null) {
    _location = currentEmbeddedActivity.location;
  }
  const embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
  const basicChannel = ChannelStore.getBasicChannel(embeddedActivityLocationChannelId);
  let compositeInstanceId;
  if (currentEmbeddedActivity != null) {
    compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
  }
  let applicationId;
  if (currentEmbeddedActivity != null) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  const obj = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, guild_id, media_session_id: RTCConnectionStore.getMediaSessionId() };
  guild_id = undefined;
  const track = AnalyticsUtilsDefault.track;
  const ACTIVITY_THERMAL_STATE_NOTICE_SHOWN = AnalyticEvents.ACTIVITY_THERMAL_STATE_NOTICE_SHOWN;
  AnalyticsUtilsDefault;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  track(ACTIVITY_THERMAL_STATE_NOTICE_SHOWN, obj);
};
