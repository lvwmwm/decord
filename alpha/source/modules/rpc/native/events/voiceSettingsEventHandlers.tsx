// Module ID: 16641
// Function ID: 16642
// Name: voiceSettingsEventHandlers
// Dependencies: [16642, 12018, 2]

// Module 16641 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 12018 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 16642 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
