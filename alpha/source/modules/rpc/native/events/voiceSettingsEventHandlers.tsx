// Module ID: 16724
// Function ID: 16725
// Name: voiceSettingsEventHandlers
// Dependencies: [16725, 11984, 2]

// Module 16724 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11984 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16725 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
