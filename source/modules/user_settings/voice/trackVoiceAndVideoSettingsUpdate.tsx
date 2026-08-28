// Module ID: 9724
// Function ID: 9725
// Name: trackVoiceAndVideoDebuggingSettingsUpdated
// Dependencies: [676, 698, 2]
// Exports: default

// Module 9724 (trackVoiceAndVideoDebuggingSettingsUpdated)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/user_settings/voice/trackVoiceAndVideoSettingsUpdate.tsx");

export default function trackVoiceAndVideoDebuggingSettingsUpdated(arg0, arg1, arg2, location_stack) {
  let obj = expandEventPropertiesDefault;
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
