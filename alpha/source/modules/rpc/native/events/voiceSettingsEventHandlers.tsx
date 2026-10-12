// Module ID: 14787
// Function ID: 14788
// Name: voiceSettingsEventHandlers
// Dependencies: [14788, 10944, 2]

// Module 14787 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10944 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14788 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
