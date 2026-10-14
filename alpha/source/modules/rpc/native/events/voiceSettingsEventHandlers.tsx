// Module ID: 15146
// Function ID: 15147
// Name: voiceSettingsEventHandlers
// Dependencies: [15147, 11018, 2]

// Module 15146 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11018 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15147 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
