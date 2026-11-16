// Module ID: 16726
// Function ID: 16727
// Name: voiceSettingsEventHandlers
// Dependencies: [16727, 12007, 2]

// Module 16726 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 12007 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16727 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
