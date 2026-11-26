// Module ID: 15779
// Function ID: 15780
// Name: voiceSettingsEventHandlers
// Dependencies: [15780, 10808, 2]

// Module 15779 (voiceSettingsEventHandlers)
import NativeRPCHelpers from "NativeRPCHelpers" /* 10808 */;
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 15780 */;
import size from "module_2" /* 2 */;

const importDefaultResultResult = VoiceSettingsEventsFactory(NativeRPCHelpers.getDeprecatedVoiceSettings, NativeRPCHelpers.getVoiceSettings);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
