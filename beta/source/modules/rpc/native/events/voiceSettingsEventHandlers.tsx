// Module ID: 15765
// Function ID: 15766
// Name: voiceSettingsEventHandlers
// Dependencies: [15766, 10803, 2]

// Module 15765 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10803 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15766 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
