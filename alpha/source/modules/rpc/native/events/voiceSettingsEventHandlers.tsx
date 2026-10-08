// Module ID: 14610
// Function ID: 14611
// Name: voiceSettingsEventHandlers
// Dependencies: [14611, 11141, 2]

// Module 14610 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11141 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14611 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
