// Module ID: 15108
// Function ID: 15109
// Name: voiceSettingsEventHandlers
// Dependencies: [15109, 10944, 2]

// Module 15108 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10944 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15109 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
