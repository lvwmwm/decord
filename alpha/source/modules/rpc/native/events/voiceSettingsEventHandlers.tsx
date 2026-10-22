// Module ID: 15737
// Function ID: 15738
// Name: voiceSettingsEventHandlers
// Dependencies: [15738, 11434, 2]

// Module 15737 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11434 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15738 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
