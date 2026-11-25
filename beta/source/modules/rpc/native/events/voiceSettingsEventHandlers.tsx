// Module ID: 15775
// Function ID: 15776
// Name: voiceSettingsEventHandlers
// Dependencies: [15776, 10808, 2]

// Module 15775 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10808 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15776 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
