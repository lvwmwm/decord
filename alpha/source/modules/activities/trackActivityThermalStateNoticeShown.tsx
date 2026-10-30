// Module ID: 19109
// Function ID: 19110
// Name: trackActivityThermalStateNoticeShown
// Dependencies: [4858, 5759, 4857, 1072, 4930, 1253, 2]
// Exports: trackActivityThermalStateNoticeShown

// Module 19109 (trackActivityThermalStateNoticeShown)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4930 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/activities/trackActivityThermalStateNoticeShown.tsx");

export function trackActivityThermalStateNoticeShown() {
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
}
