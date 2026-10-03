// Module ID: 9311
// Function ID: 9312
// Name: trackVoiceAndVideoSettingsUpdate
// Dependencies: [1085, 1252, 2]
// Exports: default

// Module 9311 (trackVoiceAndVideoSettingsUpdate)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx");

export default function trackVoiceAndVideoDebuggingSettingsUpdated(arg0, arg1, arg2, location_stack) {
  let StringResult;
  const track = AnalyticsUtilsDefault.track;
  const VOICE_AND_VIDEO_SETTINGS_UPDATED = AnalyticEvents.VOICE_AND_VIDEO_SETTINGS_UPDATED;
  AnalyticsUtilsDefault;
  if (null != arg2) {
    const _String = String;
    StringResult = String(arg2);
  }
  const obj = { previous_setting_value: StringResult, location_stack };
  obj[arg0] = arg1;
  return track(VOICE_AND_VIDEO_SETTINGS_UPDATED, obj);
};
