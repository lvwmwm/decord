// Module ID: 15785
// Function ID: 15786
// Name: voiceSettingsEventHandlers
// Dependencies: [15786, 11477, 2]

// Module 15785 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11477 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15786 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
