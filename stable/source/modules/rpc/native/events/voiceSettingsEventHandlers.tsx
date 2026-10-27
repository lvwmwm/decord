// Module ID: 15557
// Function ID: 15558
// Name: voiceSettingsEventHandlers
// Dependencies: [15558, 11334, 2]

// Module 15557 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11334 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15558 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
