// Module ID: 12643
// Function ID: 97291
// Name: trackVideoToggle
// Dependencies: []
// Exports: default, setVideoToggleAnalyticsParams

// Module 12643 (trackVideoToggle)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/media_engine/trackVideoToggle.tsx");

export default function trackVideoToggle(toggled_user_id, video_toggle_reason, is_video_shown) {
  let allowedPoorFpsRatio;
  let backoffTimeSec;
  let fpsThreshold;
  let windowLength;
  const defaultConfig = require(dependencyMap[1]).VideoHealthManager.defaultConfig;
  const featureEnabled = defaultConfig.featureEnabled;
  ({ windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec } = defaultConfig);
  let obj = importDefault(dependencyMap[2]);
  obj = { video_toggle_reason, toggled_user_id };
  let tmp;
  if (null != callback) {
    tmp = callback();
  }
  obj.rtc_connection_id = tmp;
  let tmp3;
  if (null != callback2) {
    tmp3 = callback2();
  }
  obj.media_session_id = tmp3;
  let tmp5 = null;
  if (featureEnabled) {
    tmp5 = windowLength;
  }
  obj.video_health_manager_window_length = tmp5;
  let tmp6 = null;
  if (featureEnabled) {
    tmp6 = allowedPoorFpsRatio;
  }
  obj.video_health_manager_poor_fps_ratio = tmp6;
  let tmp7 = null;
  if (featureEnabled) {
    tmp7 = fpsThreshold;
  }
  obj.video_health_manager_fps_threshold = tmp7;
  obj.is_video_shown = is_video_shown;
  let tmp8 = null;
  if (featureEnabled) {
    tmp8 = backoffTimeSec;
  }
  obj.video_health_manager_backoff_time_seconds = tmp8;
  obj.track(AnalyticEvents.VIDEO_TOGGLED, obj);
};
export function setVideoToggleAnalyticsParams(getRTCConnectionId, getMediaSessionId) {

}
