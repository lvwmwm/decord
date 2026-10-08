// Module ID: 17676
// Function ID: 17677
// Name: trackActivityThermalStateNoticeShown
// Dependencies: [2063, 5108, 2062, 1085, 4696, 1264, 2]
// Exports: trackActivityThermalStateNoticeShown

// Module 17676 (trackActivityThermalStateNoticeShown)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4696 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
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
