// Module ID: 15605
// Function ID: 15606
// Name: voiceSettingsEventHandlers
// Dependencies: [15606, 11362, 2]

// Module 15605 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11362 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15606 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
