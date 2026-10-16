// Module ID: 15488
// Function ID: 15489
// Name: voiceSettingsEventHandlers
// Dependencies: [15489, 11255, 2]

// Module 15488 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11255 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15489 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
