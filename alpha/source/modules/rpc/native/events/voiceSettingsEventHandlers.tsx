// Module ID: 15478
// Function ID: 15479
// Name: voiceSettingsEventHandlers
// Dependencies: [15479, 11258, 2]

// Module 15478 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11258 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15479 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
