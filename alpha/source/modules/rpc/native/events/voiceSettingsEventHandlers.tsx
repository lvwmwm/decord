// Module ID: 14763
// Function ID: 14764
// Name: voiceSettingsEventHandlers
// Dependencies: [14764, 10944, 2]

// Module 14763 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10944 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14764 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
