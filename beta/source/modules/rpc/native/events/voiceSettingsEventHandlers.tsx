// Module ID: 16727
// Function ID: 16728
// Name: voiceSettingsEventHandlers
// Dependencies: [16728, 12006, 2]

// Module 16727 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 12006 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16728 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
