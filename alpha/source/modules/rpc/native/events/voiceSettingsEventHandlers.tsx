// Module ID: 16616
// Function ID: 16617
// Name: voiceSettingsEventHandlers
// Dependencies: [16617, 12008, 2]

// Module 16616 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 12008 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16617 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
