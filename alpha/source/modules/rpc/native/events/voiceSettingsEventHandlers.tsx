// Module ID: 15767
// Function ID: 15768
// Name: voiceSettingsEventHandlers
// Dependencies: [15768, 10803, 2]

// Module 15767 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10803 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15768 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
