// Module ID: 15442
// Function ID: 15443
// Name: voiceSettingsEventHandlers
// Dependencies: [15443, 11242, 2]

// Module 15442 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11242 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15443 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
