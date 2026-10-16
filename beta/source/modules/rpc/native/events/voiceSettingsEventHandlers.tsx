// Module ID: 14792
// Function ID: 14793
// Name: voiceSettingsEventHandlers
// Dependencies: [14793, 10945, 2]

// Module 14792 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10945 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14793 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
