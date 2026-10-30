// Module ID: 16327
// Function ID: 16328
// Name: voiceSettingsEventHandlers
// Dependencies: [16328, 11774, 2]

// Module 16327 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11774 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16328 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
