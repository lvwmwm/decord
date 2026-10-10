// Module ID: 17900
// Function ID: 17901
// Name: trackActivityThermalStateNoticeShown
// Dependencies: [2065, 5110, 2064, 1085, 4739, 1265, 2]
// Exports: trackActivityThermalStateNoticeShown

// Module 17900 (trackActivityThermalStateNoticeShown)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4739 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
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
