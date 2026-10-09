// Module ID: 14709
// Function ID: 14710
// Name: voiceSettingsEventHandlers
// Dependencies: [14710, 10904, 2]

// Module 14709 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10904 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14710 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
