// Module ID: 17005
// Function ID: 17006
// Name: voiceSettingsEventHandlers
// Dependencies: [17006, 12870, 2]

// Module 17005 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 12870 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 17006 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
