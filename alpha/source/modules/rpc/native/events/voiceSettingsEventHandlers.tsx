// Module ID: 16524
// Function ID: 16525
// Name: voiceSettingsEventHandlers
// Dependencies: [16525, 11949, 2]

// Module 16524 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11949 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16525 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
