// Module ID: 12757
// Function ID: 99447
// Name: trackVideoToggle
// Dependencies: [653, 12751, 675, 2]
// Exports: default, setVideoToggleAnalyticsParams

// Module 12757 (trackVideoToggle)
import { AnalyticEvents } from "ME";

const result = require("expandLocation").fileFinishedImporting("modules/media_engine/trackVideoToggle.tsx");

export default function trackVideoToggle(toggled_user_id, video_toggle_reason, is_video_shown) {
  let allowedPoorFpsRatio;
  let backoffTimeSec;
  let fpsThreshold;
  let windowLength;
  const defaultConfig = require(12751) /* VideoHealthManager */.VideoHealthManager.defaultConfig;
  const featureEnabled = defaultConfig.featureEnabled;
  ({ windowLength, allowedPoorFpsRatio, fpsThreshold, backoffTimeSec } = defaultConfig);
  let obj = importDefault(675);
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
  let closure_3 = getRTCConnectionId;
  let closure_4 = getMediaSessionId;
}
