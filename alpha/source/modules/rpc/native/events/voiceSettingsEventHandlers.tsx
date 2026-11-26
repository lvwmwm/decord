// Module ID: 15967
// Function ID: 15968
// Name: voiceSettingsEventHandlers
// Dependencies: [15968, 10220, 2]

// Module 15967 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10220 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15968 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
