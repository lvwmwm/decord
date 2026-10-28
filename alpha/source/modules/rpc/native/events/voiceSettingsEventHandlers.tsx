// Module ID: 16050
// Function ID: 16051
// Name: voiceSettingsEventHandlers
// Dependencies: [16051, 11519, 2]

// Module 16050 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11519 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16051 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
