// Module ID: 16381
// Function ID: 16382
// Name: voiceSettingsEventHandlers
// Dependencies: [16382, 11812, 2]

// Module 16381 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11812 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16382 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
