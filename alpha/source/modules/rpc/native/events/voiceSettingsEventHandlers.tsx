// Module ID: 15680
// Function ID: 15681
// Name: voiceSettingsEventHandlers
// Dependencies: [15681, 10741, 2]

// Module 15680 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10741 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15681 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
