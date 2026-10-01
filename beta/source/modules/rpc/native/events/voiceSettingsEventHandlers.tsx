// Module ID: 14085
// Function ID: 14086
// Name: voiceSettingsEventHandlers
// Dependencies: [14086, 8774, 2]

// Module 14085 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 8774 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14086 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
