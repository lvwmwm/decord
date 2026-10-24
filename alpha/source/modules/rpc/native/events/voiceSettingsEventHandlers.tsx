// Module ID: 15781
// Function ID: 15782
// Name: voiceSettingsEventHandlers
// Dependencies: [15782, 11474, 2]

// Module 15781 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11474 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15782 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
