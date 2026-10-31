// Module ID: 16369
// Function ID: 16370
// Name: voiceSettingsEventHandlers
// Dependencies: [16370, 11811, 2]

// Module 16369 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11811 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16370 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
