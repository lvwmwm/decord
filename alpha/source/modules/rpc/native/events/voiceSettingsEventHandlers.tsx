// Module ID: 16885
// Function ID: 16886
// Name: voiceSettingsEventHandlers
// Dependencies: [16886, 12778, 2]

// Module 16885 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 12778 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16886 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
