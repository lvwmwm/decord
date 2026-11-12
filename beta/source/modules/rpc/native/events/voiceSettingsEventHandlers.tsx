// Module ID: 16729
// Function ID: 16730
// Name: voiceSettingsEventHandlers
// Dependencies: [16730, 12007, 2]

// Module 16729 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 12007 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16730 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
