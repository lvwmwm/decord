// Module ID: 16686
// Function ID: 16687
// Name: voiceSettingsEventHandlers
// Dependencies: [16687, 11975, 2]

// Module 16686 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11975 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16687 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
