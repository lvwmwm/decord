// Module ID: 16880
// Function ID: 16881
// Name: voiceSettingsEventHandlers
// Dependencies: [16881, 12772, 2]

// Module 16880 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 12772 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16881 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
