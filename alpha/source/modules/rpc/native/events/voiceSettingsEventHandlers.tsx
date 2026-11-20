// Module ID: 15644
// Function ID: 15645
// Name: voiceSettingsEventHandlers
// Dependencies: [15645, 10683, 2]

// Module 15644 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10683 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15645 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
