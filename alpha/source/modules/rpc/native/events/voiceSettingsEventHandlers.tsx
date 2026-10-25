// Module ID: 15786
// Function ID: 15787
// Name: voiceSettingsEventHandlers
// Dependencies: [15787, 11475, 2]

// Module 15786 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11475 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15787 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
