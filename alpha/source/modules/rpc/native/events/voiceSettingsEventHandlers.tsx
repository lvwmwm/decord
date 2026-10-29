// Module ID: 16286
// Function ID: 16287
// Name: voiceSettingsEventHandlers
// Dependencies: [16287, 11573, 2]

// Module 16286 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11573 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16287 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
