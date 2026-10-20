// Module ID: 15586
// Function ID: 15587
// Name: voiceSettingsEventHandlers
// Dependencies: [15587, 11351, 2]

// Module 15586 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11351 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15587 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
