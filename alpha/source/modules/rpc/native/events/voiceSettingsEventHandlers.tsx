// Module ID: 15758
// Function ID: 15759
// Name: voiceSettingsEventHandlers
// Dependencies: [15759, 11454, 2]

// Module 15758 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11454 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15759 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
