// Module ID: 15681
// Function ID: 15682
// Name: voiceSettingsEventHandlers
// Dependencies: [15682, 11406, 2]

// Module 15681 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11406 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15682 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
