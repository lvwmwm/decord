// Module ID: 19235
// Function ID: 19236
// Name: trackActivityThermalStateNoticeShown
// Dependencies: [4762, 5654, 4761, 1071, 4834, 1255, 2]
// Exports: trackActivityThermalStateNoticeShown

// Module 19235 (trackActivityThermalStateNoticeShown)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4834 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5654 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4761 */;
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
