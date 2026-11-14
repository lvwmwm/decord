// Module ID: 17003
// Function ID: 17004
// Name: voiceSettingsEventHandlers
// Dependencies: [17004, 12868, 2]

// Module 17003 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 12868 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 17004 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
