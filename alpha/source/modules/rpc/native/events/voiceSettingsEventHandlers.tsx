// Module ID: 15553
// Function ID: 15554
// Name: voiceSettingsEventHandlers
// Dependencies: [15554, 11316, 2]

// Module 15553 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11316 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15554 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
