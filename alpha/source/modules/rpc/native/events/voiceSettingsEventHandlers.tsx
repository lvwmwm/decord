// Module ID: 14061
// Function ID: 14062
// Name: voiceSettingsEventHandlers
// Dependencies: [14062, 8766, 2]

// Module 14061 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14062 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(8766).getDeprecatedVoiceSettings, fn(8766).getVoiceSettings);
