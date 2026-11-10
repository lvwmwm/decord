// Module ID: 16376
// Function ID: 16377
// Name: voiceSettingsEventHandlers
// Dependencies: [16377, 11812, 2]

// Module 16376 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11812 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16377 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
