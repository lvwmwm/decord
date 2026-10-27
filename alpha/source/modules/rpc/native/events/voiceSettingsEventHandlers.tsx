// Module ID: 15824
// Function ID: 15825
// Name: voiceSettingsEventHandlers
// Dependencies: [15825, 11481, 2]

// Module 15824 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11481 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15825 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
