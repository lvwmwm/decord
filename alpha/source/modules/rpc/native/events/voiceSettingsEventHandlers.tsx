// Module ID: 15795
// Function ID: 15796
// Name: voiceSettingsEventHandlers
// Dependencies: [15796, 10079, 2]

// Module 15795 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10079 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15796 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
