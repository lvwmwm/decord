// Module ID: 14362
// Function ID: 14363
// Name: voiceSettingsEventHandlers
// Dependencies: [14363, 9030, 2]

// Module 14362 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 9030 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14363 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
