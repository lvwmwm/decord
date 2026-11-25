// Module ID: 15916
// Function ID: 15917
// Name: voiceSettingsEventHandlers
// Dependencies: [15917, 10178, 2]

// Module 15916 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10178 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15917 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
