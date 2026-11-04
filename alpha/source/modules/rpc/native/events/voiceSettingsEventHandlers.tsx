// Module ID: 16628
// Function ID: 16629
// Name: voiceSettingsEventHandlers
// Dependencies: [16629, 12009, 2]

// Module 16628 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 12009 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16629 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
