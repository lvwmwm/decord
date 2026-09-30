// Module ID: 14286
// Function ID: 14287
// Name: voiceSettingsEventHandlers
// Dependencies: [14287, 8973, 2]

// Module 14286 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14287 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(8973).getDeprecatedVoiceSettings, fn(8973).getVoiceSettings);
