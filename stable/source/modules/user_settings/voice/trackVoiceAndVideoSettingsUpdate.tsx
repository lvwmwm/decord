// Module ID: 9086
// Function ID: 9087
// Name: trackVoiceAndVideoSettingsUpdate
// Dependencies: [1086, 1253, 2]
// Exports: default

// Module 9086 (trackVoiceAndVideoSettingsUpdate)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
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
