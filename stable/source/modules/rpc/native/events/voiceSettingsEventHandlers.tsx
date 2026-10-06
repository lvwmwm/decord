// Module ID: 14087
// Function ID: 14088
// Name: voiceSettingsEventHandlers
// Dependencies: [14088, 8769, 2]

// Module 14087 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 8769 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14088 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
