// Module ID: 15692
// Function ID: 15693
// Name: voiceSettingsEventHandlers
// Dependencies: [15693, 10763, 2]

// Module 15692 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10763 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15693 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
