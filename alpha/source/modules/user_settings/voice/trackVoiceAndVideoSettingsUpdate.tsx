// Module ID: 9922
// Function ID: 9923
// Name: trackVoiceAndVideoSettingsUpdate
// Dependencies: [1074, 1241, 2]
// Exports: default

// Module 9922 (trackVoiceAndVideoSettingsUpdate)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx");

export default function trackVoiceAndVideoDebuggingSettingsUpdated(arg0, arg1, arg2, location_stack) {
  let StringResult;
  if (null != arg2) {
    const _String = String;
    StringResult = String(arg2);
  }
  const obj2 = { previous_setting_value: StringResult };
  obj2[arg0] = arg1;
  obj2.location_stack = location_stack;
  return AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_AND_VIDEO_SETTINGS_UPDATED, obj2);
};
