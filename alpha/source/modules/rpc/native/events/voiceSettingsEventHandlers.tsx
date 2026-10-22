// Module ID: 15723
// Function ID: 15724
// Name: voiceSettingsEventHandlers
// Dependencies: [15724, 11423, 2]

// Module 15723 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 11423 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15724 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
