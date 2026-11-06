// Module ID: 16638
// Function ID: 16639
// Name: voiceSettingsEventHandlers
// Dependencies: [16639, 11984, 2]

// Module 16638 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11984 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16639 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
