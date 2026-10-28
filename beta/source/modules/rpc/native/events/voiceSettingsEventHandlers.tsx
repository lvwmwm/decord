// Module ID: 15820
// Function ID: 15821
// Name: voiceSettingsEventHandlers
// Dependencies: [15821, 11509, 2]

// Module 15820 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11509 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15821 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
