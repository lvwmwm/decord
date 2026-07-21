// Module ID: 8839
// Function ID: 69739
// Name: trackVoiceAndVideoDebuggingSettingsUpdated
// Dependencies: [670, 2, 6]
// Exports: default

// Module 8839 (trackVoiceAndVideoDebuggingSettingsUpdated)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

const result = _classCallCheck.fileFinishedImporting("modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx");

export default function trackVoiceAndVideoDebuggingSettingsUpdated(arg0, arg1, arg2, arg3) {
  let obj = importDefault(dependencyMap[1]);
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
