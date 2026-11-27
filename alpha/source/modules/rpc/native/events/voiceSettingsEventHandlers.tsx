// Module ID: 15974
// Function ID: 15975
// Name: voiceSettingsEventHandlers
// Dependencies: [15975, 10221, 2]

// Module 15974 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10221 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15975 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
