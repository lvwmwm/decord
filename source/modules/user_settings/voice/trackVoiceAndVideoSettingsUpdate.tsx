// Module ID: 8847
// Function ID: 69793
// Name: trackVoiceAndVideoDebuggingSettingsUpdated
// Dependencies: [653, 675, 2]
// Exports: default

// Module 8847 (trackVoiceAndVideoDebuggingSettingsUpdated)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx");

export default function trackVoiceAndVideoDebuggingSettingsUpdated(arg0, arg1, arg2, arg3) {
  let obj = importDefault(675);
  obj = {};
  let StringResult;
  if (null != arg2) {
    const _String = String;
    StringResult = String(arg2);
  }
  obj.previous_setting_value = StringResult;
  obj[arg0] = arg1;
  obj["location_stack"] = arg3;
  return obj.track(AnalyticEvents.VOICE_AND_VIDEO_SETTINGS_UPDATED, obj);
};
