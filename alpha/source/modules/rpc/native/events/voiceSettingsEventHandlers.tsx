// Module ID: 17038
// Function ID: 17039
// Name: voiceSettingsEventHandlers
// Dependencies: [17039, 11481, 2]

// Module 17038 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11481 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 17039 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
