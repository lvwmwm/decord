// Module ID: 16697
// Function ID: 16698
// Name: voiceSettingsEventHandlers
// Dependencies: [16698, 11975, 2]

// Module 16697 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11975 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16698 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
