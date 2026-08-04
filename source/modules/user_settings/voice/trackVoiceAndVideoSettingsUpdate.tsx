// Module ID: 9081
// Function ID: 9082
// Name: trackVoiceAndVideoDebuggingSettingsUpdated
// Dependencies: [676, 698, 2]
// Exports: default

// Module 9081 (trackVoiceAndVideoDebuggingSettingsUpdated)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx");

export default function trackVoiceAndVideoDebuggingSettingsUpdated(arg0, arg1, arg2, location_stack) {
  let obj = importDefault(698);
  let StringResult;
  if (null != arg2) {
    const _String = String;
    StringResult = String(arg2);
  }
  obj = { previous_setting_value: StringResult };
  obj[arg0] = arg1;
  obj.location_stack = location_stack;
  return obj.track(AnalyticEvents.VOICE_AND_VIDEO_SETTINGS_UPDATED, obj);
};
